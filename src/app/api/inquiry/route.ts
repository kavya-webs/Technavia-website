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
      companyUrl,
      competitorUrl,
      services,
      service,
      projectBrief,
      bottleneck,
      platform,
      biggestLeak,
      aiGoal,
      aiPresence,
      firstBottleneck,
      crmStack,
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

    // Resolve service list
    let resolvedServices: string[] = [];
    if (Array.isArray(services) && services.length > 0) {
      resolvedServices = services.map((s) => String(s).trim());
    } else if (typeof service === "string" && service.trim().length > 0) {
      resolvedServices = [service.trim()];
    } else {
      resolvedServices = ["Full 21-Day Growth Engine (5d Web + 16d SEO)"];
    }

    const cleanFullName = fullName.trim();
    const cleanEmail = email.trim();
    const rawWebsite = websiteUrl || companyUrl;
    const cleanWebsite = rawWebsite && String(rawWebsite).trim().length > 0
      ? String(rawWebsite).trim()
      : "Not provided";

    // Gather diagnostic telemetry
    const diagnosticItems: string[] = [];
    if (platform) diagnosticItems.push(`Current Platform: ${platform}`);
    if (biggestLeak) diagnosticItems.push(`Biggest Leak: ${biggestLeak}`);
    if (aiGoal) diagnosticItems.push(`Primary AI Search Goal: ${aiGoal}`);
    if (aiPresence) diagnosticItems.push(`Current AI Presence: ${aiPresence}`);
    if (competitorUrl) diagnosticItems.push(`Top Competitor URL: ${competitorUrl}`);
    if (firstBottleneck) diagnosticItems.push(`First Bottleneck to Automate: ${firstBottleneck}`);
    if (crmStack) diagnosticItems.push(`Current CRM / Stack: ${crmStack}`);

    const diagnosticSummary = diagnosticItems.length > 0
      ? diagnosticItems.join(" | ")
      : "None provided";

    const cleanBrief =
      (projectBrief && typeof projectBrief === "string" && projectBrief.trim().length > 0)
        ? projectBrief.trim()
        : (bottleneck && typeof bottleneck === "string" && bottleneck.trim().length > 0)
        ? bottleneck.trim()
        : (diagnosticItems.length > 0 ? diagnosticSummary : "20-Min Architecture Audit Requested");

    const serviceList = resolvedServices.join(", ");
    const cleanTimeline = "21-Day Sprint (5 Days Website + 16 Days SEO)";
    const cleanBudget = "Standard Architecture Scope";

    // 3. Guaranteed Lead Recording (Safeguard in runtime logs before attempting SMTP)
    const timestamp = new Date().toISOString();
    console.log(`[LEAD_SAVED] Name="${cleanFullName}" Email="${cleanEmail}" Website="${cleanWebsite}" Services="${serviceList}" Bottleneck="${cleanBrief}" IP="${ip}" Source="${sourcePage || "Direct"}" Time="${timestamp}"`);
    console.error(`[LEAD_SAVED] Name="${cleanFullName}" Email="${cleanEmail}" Website="${cleanWebsite}" Services="${serviceList}" Bottleneck="${cleanBrief}" IP="${ip}" Source="${sourcePage || "Direct"}" Time="${timestamp}"`);

    // 4. SMTP Transport Configuration & Dispatch
    // Hostinger CloudLinux Passenger handles Port 587 (STARTTLS) with 100% reliability, whereas Port 465 can intermittently reset.
    const rawPort = Number(process.env.SMTP_PORT) || 587;
    const smtpHost = (process.env.SMTP_HOST || "smtp.hostinger.com").trim();
    const smtpUser = (process.env.SMTP_USER || "inquiry@technaviatechnology.com").trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const smtpPort = rawPort;
    const smtpSecure = rawPort === 465;

    // Build recipient list ensuring both domain inbox and admin gmail receive every lead
    const recipients = new Set<string>();
    recipients.add("inquiry@technaviatechnology.com");
    recipients.add("kavyamavaniweb@gmail.com");
    if (process.env.INQUIRY_TO_EMAIL) {
      process.env.INQUIRY_TO_EMAIL.split(",").forEach((addr) => {
        const trimmed = addr.trim();
        if (trimmed) recipients.add(trimmed);
      });
    }
    const toEmail = Array.from(recipients).join(", ");

    // Prepare Email Options
    const internalMailOptions = {
      from: `"Technavia Technology Engineering Desk" <${smtpUser}>`,
      to: toEmail,
      replyTo: cleanEmail,
      subject: `[Technavia Technology Inquiry] ${serviceList} — ${cleanFullName}`,
      text: `NEW INBOUND ENGINEERING INQUIRY
----------------------------------------
Prospect:    ${cleanFullName}
Work Email:  ${cleanEmail}
Website:     ${cleanWebsite}
Services:    ${serviceList}
Diagnostics: ${diagnosticSummary}

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
      <span class="label">Diagnostic Breakdown</span>
      <span class="val">${diagnosticSummary}</span>
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

    const clientMailOptions = {
      from: `"Technavia Technology" <${smtpUser}>`,
      to: cleanEmail,
      replyTo: toEmail,
      subject: `Inquiry Received — Technavia Technology Engineering`,
      text: `Hello ${cleanFullName},

Thank you for contacting Technavia Technology.

We have received your project brief regarding:
${serviceList}

A senior web architect is reviewing your notes and website. We will reply with an initial technical assessment or scheduling link within 1 business day.

Your inquiry summary:
- Focus Area: ${serviceList}
- Notes / Goal: ${cleanBrief}

If you have additional design specs, GitHub links, or analytics to share, reply directly to this email.

Best regards,
Engineering Architecture Desk
Technavia Technology
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
    <h2>Inquiry Received — Technavia Technology</h2>
    <p>Hello ${cleanFullName},</p>
    <p>Thank you for contacting Technavia Technology. We have received your technical inquiry regarding <strong>${serviceList}</strong>.</p>
    <p>A senior web architect is reviewing your notes and website. We will respond with an initial technical assessment or audit scheduling link within 1 business day.</p>
    <div class="summary">
      <strong>Inquiry Summary:</strong><br/>
      • <strong>Focus Area:</strong> ${serviceList}<br/>
      • <strong>Notes / Goal:</strong> ${cleanBrief}
    </div>
    <p>If you have additional technical specs, repository links, or analytics reports to attach, simply reply directly to this email.</p>
    <div class="footer">
      <strong>Technavia Technology</strong> · Engineering & AI Automation Studio<br/>
      <a href="https://technaviatechnology.com" style="color: #111827;">technaviatechnology.com</a> · Surat, Gujarat, India
    </div>
  </div>
</body>
</html>
`,
    };

    let emailSent = false;

    // Resilient SMTP Dispatch: Errors are logged, but never crash the lead submission
    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          connectionTimeout: 8000,
          greetingTimeout: 5000,
          socketTimeout: 8000,
          tls: {
            rejectUnauthorized: false,
          },
        });

        await transporter.sendMail(internalMailOptions);
        emailSent = true;
        console.log(`[INQUIRY_INTERNAL_EMAIL_SENT] Dispatched to ${toEmail}`);
        console.error(`[INQUIRY_INTERNAL_EMAIL_SENT] Dispatched to ${toEmail}`);

        // Try client confirmation independently (non-fatal if blocked)
        try {
          await transporter.sendMail(clientMailOptions);
          console.log(`[INQUIRY_CLIENT_EMAIL_SENT] Dispatched confirmation to ${cleanEmail}`);
          console.error(`[INQUIRY_CLIENT_EMAIL_SENT] Dispatched confirmation to ${cleanEmail}`);
        } catch (clientErr: any) {
          console.warn("[CLIENT_MAIL_WARNING] Could not dispatch client auto-confirmation:", clientErr?.message);
        }
      } catch (smtpErr: any) {
        console.error(`[INQUIRY_SMTP_ERROR_PORT_${smtpPort}] Mail dispatch failed:`, smtpErr?.message || smtpErr);

        // Fallback retry on alternate port if primary failed
        const altPort = smtpPort === 587 ? 465 : 587;
        const altSecure = altPort === 465;
        try {
          console.log(`[INQUIRY_SMTP_RETRY] Attempting fallback on port ${altPort} (secure: ${altSecure})...`);
          const fallbackTransporter = nodemailer.createTransport({
            host: smtpHost,
            port: altPort,
            secure: altSecure,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
            connectionTimeout: 8000,
            greetingTimeout: 5000,
            socketTimeout: 8000,
            tls: {
              rejectUnauthorized: false,
            },
          });

          await fallbackTransporter.sendMail(internalMailOptions);
          emailSent = true;
          console.log(`[INQUIRY_FALLBACK_PORT_${altPort}_SUCCESS] Dispatched to ${toEmail}`);
          console.error(`[INQUIRY_FALLBACK_PORT_${altPort}_SUCCESS] Dispatched to ${toEmail}`);

          try {
            await fallbackTransporter.sendMail(clientMailOptions);
            console.log(`[INQUIRY_CLIENT_EMAIL_SENT] Dispatched confirmation to ${cleanEmail}`);
          } catch {}
        } catch (fallbackErr: any) {
          console.error(`[INQUIRY_FALLBACK_PORT_${altPort}_ERROR] Fallback also failed:`, fallbackErr?.message || fallbackErr);
        }
      }
    } else {
      console.warn("[SMTP_WARNING] SMTP_PASS environment variable not set. Lead safely recorded in server logs.");
    }

    // Always succeed from the prospect's perspective so a technical SMTP glitch never shows a broken error banner
    return NextResponse.json({
      success: true,
      emailSent,
      message: "Your inquiry has been received. Our engineering team will review your notes and contact you within 24 hours.",
    });
  } catch (error: any) {
    console.error("[INQUIRY_API_ERROR]", error);
    return NextResponse.json(
      {
        success: true,
        message:
          "Your inquiry has been received. Our engineering team will review your notes and contact you within 24 hours.",
      },
      { status: 200 }
    );
  }
}
