import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory rate limiting map: ip -> { count, resetTime }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // max 5 submissions per window
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in ms

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "unknown-ip";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    // Rate Limiting Check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many requests from this address. Please wait a few minutes before submitting again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      fullName,
      email,
      websiteUrl,
      services,
      projectBrief,
      timeline,
      budget,
      sourcePage,
      utm_source,
      utm_medium,
      utm_campaign,
      website_hp, // Honeypot field
    } = body;

    // 1. Silent Honeypot Trap
    // If the hidden bot field is filled, silently succeed without emailing
    if (website_hp && String(website_hp).trim().length > 0) {
      console.warn(`[SPAM_DETECTED] Honeypot triggered from IP: ${ip}`);
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been received.",
      });
    }

    // 2. Strict Input Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    if (!Array.isArray(services) || services.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one primary service area." },
        { status: 400 }
      );
    }

    if (
      !projectBrief ||
      typeof projectBrief !== "string" ||
      projectBrief.trim().length < 5
    ) {
      return NextResponse.json(
        { error: "Please describe your primary goal or bottleneck." },
        { status: 400 }
      );
    }

    const cleanFullName = fullName.trim();
    const cleanEmail = email.trim();
    const cleanWebsite = websiteUrl ? String(websiteUrl).trim() : "Not provided";
    const cleanBrief = projectBrief.trim();
    const cleanTimeline = timeline ? String(timeline).trim() : "Not specified";
    const cleanBudget = budget ? String(budget).trim() : "Not specified";
    const cleanServices = services.map((s: string) => String(s).trim());
    const serviceList = cleanServices.join(", ");

    // 3. SMTP Transport Setup
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE !== "false"; // true for port 465
    const smtpUser = process.env.SMTP_USER || "inquiry@technaviatechnology.com";
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.INQUIRY_TO_EMAIL || "inquiry@technaviatechnology.com";

    // If SMTP_PASS is missing in environment (e.g. before user sets it in hPanel),
    // log clearly and return success so UX doesn't crash
    if (!smtpPass) {
      console.warn(
        "[SMTP_WARNING] SMTP_PASS environment variable not set. Mocking email delivery for development/demo."
      );
      console.log("Inquiry Data:", {
        cleanFullName,
        cleanEmail,
        cleanWebsite,
        cleanServices,
        cleanBrief,
        cleanTimeline,
        cleanBudget,
        sourcePage,
        ip,
      });

      return NextResponse.json({
        success: true,
        mock: true,
        message:
          "Inquiry received successfully. (SMTP pending configuration in hPanel)",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const timestamp = new Date().toISOString();

    // 4. Send Internal Notification to inquiry@technaviatechnology.com
    const internalMailOptions = {
      from: `"TECHNAVIA Engineering Desk" <${smtpUser}>`,
      to: toEmail,
      replyTo: cleanEmail,
      subject: `[TECHNAVIA Inquiry] ${serviceList} — ${cleanFullName}`,
      text: `NEW INBOUND ENGINEERING INQUIRY
----------------------------------------
Prospect:    ${cleanFullName}
Work Email:  ${cleanEmail}
Website:     ${cleanWebsite}
Services:    ${serviceList}
Timeline:    ${cleanTimeline}
Budget:      ${cleanBudget}

PROJECT BRIEF / BOTTLENECK:
${cleanBrief}

TELEMETRY & ATTRIBUTION:
Source Page:  ${sourcePage || "Direct"}
UTM Source:   ${utm_source || "None"}
UTM Medium:   ${utm_medium || "None"}
UTM Campaign: ${utm_campaign || "None"}
IP Address:   ${ip}
Timestamp:    ${timestamp}
----------------------------------------
Reply directly to this email to contact the prospect.
`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #0b0d10; color: #f8f8f5; margin: 0; padding: 24px; }
    .card { background: #14161a; border: 1px solid #23272f; border-radius: 12px; padding: 28px; max-width: 640px; margin: 0 auto; }
    h2 { color: #d4f542; margin-top: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
    .row { margin-bottom: 12px; font-size: 14px; line-height: 1.5; }
    .label { color: #a8b0bc; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-family: monospace; display: block; margin-bottom: 2px; }
    .val { color: #ffffff; font-weight: 500; }
    .brief { background: #0b0d10; border-left: 3px solid #d4f542; padding: 14px 16px; border-radius: 4px; margin-top: 16px; margin-bottom: 16px; white-space: pre-wrap; font-size: 14px; color: #f8f8f5; }
    .footer { font-size: 12px; color: #6b7280; border-top: 1px solid #23272f; padding-top: 16px; margin-top: 24px; font-family: monospace; }
  </style>
</head>
<body>
  <div class="card">
    <h2>[NEW INQUIRY] ${serviceList}</h2>
    <div class="row">
      <span class="label">Full Name</span>
      <span class="val">${cleanFullName}</span>
    </div>
    <div class="row">
      <span class="label">Work Email</span>
      <span class="val"><a href="mailto:${cleanEmail}" style="color: #d4f542;">${cleanEmail}</a></span>
    </div>
    <div class="row">
      <span class="label">Website URL</span>
      <span class="val">${cleanWebsite !== "Not provided" ? `<a href="${cleanWebsite}" style="color: #d4f542;" target="_blank">${cleanWebsite}</a>` : "Not provided"}</span>
    </div>
    <div class="row">
      <span class="label">Services Requested</span>
      <span class="val">${serviceList}</span>
    </div>
    <div class="row">
      <span class="label">Target Timeline</span>
      <span class="val">${cleanTimeline}</span>
    </div>
    <div class="row">
      <span class="label">Estimated Investment</span>
      <span class="val">${cleanBudget}</span>
    </div>

    <div class="row" style="margin-top: 18px;">
      <span class="label">Project Brief / Core Bottleneck</span>
      <div class="brief">${cleanBrief}</div>
    </div>

    <div class="footer">
      Source: ${sourcePage || "Direct"} · IP: ${ip} · ${timestamp}<br/>
      Reply directly to this email to reach ${cleanFullName}.
    </div>
  </div>
</body>
</html>
`,
    };

    // 5. Send Auto-Confirmation to Prospect (Lightweight, text-first for deliverability warmup)
    const clientMailOptions = {
      from: `"TECHNAVIA" <${smtpUser}>`,
      to: cleanEmail,
      replyTo: toEmail,
      subject: `Inquiry Received — TECHNAVIA Engineering`,
      text: `Hello ${cleanFullName},

Thank you for contacting TECHNAVIA.

We have received your project brief regarding:
${serviceList}

A senior web architect is reviewing your notes and website. We will reply with an initial technical assessment or scheduling link within 1 business day.

Your inquiry summary:
- Services: ${serviceList}
- Timeline: ${cleanTimeline}
- Notes: ${cleanBrief}

If you have additional design specs, GitHub links, or analytics to share, reply directly to this email.

Best regards,
Engineering Architecture Desk
TECHNAVIA
https://technaviatechnology.com
Surat, Gujarat, India · Remote-First Worldwide
`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111827; margin: 0; padding: 24px; line-height: 1.6; }
    .container { max-width: 560px; margin: 0 auto; }
    h2 { font-size: 18px; color: #111827; margin-bottom: 16px; font-weight: 600; }
    p { font-size: 14px; color: #374151; margin-bottom: 14px; }
    .summary { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px 16px; margin: 16px 0; font-size: 13px; }
    .footer { font-size: 12px; color: #6b7280; margin-top: 28px; border-top: 1px solid #e5e7eb; padding-top: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Inquiry Received — TECHNAVIA</h2>
    <p>Hello ${cleanFullName},</p>
    <p>Thank you for contacting TECHNAVIA. We have received your technical inquiry regarding <strong>${serviceList}</strong>.</p>
    <p>A senior web architect is reviewing your notes and website. We will respond with an initial technical assessment or audit scheduling link within 1 business day.</p>
    <div class="summary">
      <strong>Inquiry Summary:</strong><br/>
      • <strong>Services:</strong> ${serviceList}<br/>
      • <strong>Timeline:</strong> ${cleanTimeline}<br/>
      • <strong>Estimated Budget:</strong> ${cleanBudget}
    </div>
    <p>If you have additional technical specs, repository links, or analytics reports to attach, simply reply directly to this email.</p>
    <div class="footer">
      <strong>TECHNAVIA</strong> · Engineering & AI Automation Studio<br/>
      <a href="https://technaviatechnology.com" style="color: #111827;">technaviatechnology.com</a> · Surat, Gujarat, India
    </div>
  </div>
</body>
</html>
`,
    };

    // Send both in parallel
    await Promise.all([
      transporter.sendMail(internalMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Inquiry dispatched successfully.",
    });
  } catch (error: any) {
    console.error("[INQUIRY_API_ERROR]", error);
    return NextResponse.json(
      {
        error:
          "An error occurred while sending your inquiry. Please email inquiry@technaviatechnology.com directly.",
      },
      { status: 500 }
    );
  }
}
