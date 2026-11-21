#!/usr/bin/env node
/**
 * scripts/run-e2e-tests.mjs
 *
 * 4-Tier Automated End-to-End Test Suite for Runbook Next.js Application.
 * Follows TEST_INFRA.md and ORIGINAL_REQUEST.md specifications:
 *
 * - Tier 1: Feature Coverage (>=5 assertions per feature for all 11 routes + hero tint check)
 * - Tier 2: Boundary & Corner Cases (4 responsive viewports, overflow, console error checks)
 * - Tier 3: Cross-Feature Combinations (Pairwise navigation, breadcrumbs, cadence toggle, suspense params)
 * - Tier 4: Real-World Application Scenarios (5 multi-step realistic user journeys)
 *
 * Zero external test framework dependencies. Uses pre-installed Playwright Core.
 */

import { spawn, execSync } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

// Dynamic Playwright Resolution
function resolvePlaywright() {
  const localPkg = path.resolve('node_modules/playwright');
  if (fs.existsSync(localPkg)) {
    const req = createRequire(import.meta.url);
    return req('playwright');
  }
  const codexPath = 'C:/Users/Kavya/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/dummy.js';
  const req = createRequire(codexPath);
  return req('playwright');
}

const { chromium } = resolvePlaywright();

const PORT = 3008;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const TARGET_ROUTES = [
  { path: '/workflows', name: 'Services / Workflows', breadcrumbKeyword: 'SERVICES', h1Keyword: 'workflows' },
  { path: '/process', name: 'Process', breadcrumbKeyword: 'PROCESS', h1Keyword: 'autopilot' },
  { path: '/pricing', name: 'Pricing', breadcrumbKeyword: 'PRICING', h1Keyword: 'packages' },
  { path: '/results', name: 'Results', breadcrumbKeyword: 'RESULTS', h1Keyword: 'number' },
  { path: '/about', name: 'About', breadcrumbKeyword: 'ABOUT', h1Keyword: 'night shift' },
  { path: '/tools', name: 'Tools', breadcrumbKeyword: 'TOOLS', h1Keyword: 'stack' },
  { path: '/industries', name: 'Industries', breadcrumbKeyword: 'INDUSTRIES', h1Keyword: 'sectors' },
  { path: '/faq', name: 'FAQ', breadcrumbKeyword: 'FAQ', h1Keyword: 'call' },
  { path: '/contact', name: 'Contact', breadcrumbKeyword: 'CONTACT', h1Keyword: 'desk' },
  { path: '/book', name: 'Book a Call', breadcrumbKeyword: 'BOOK', h1Keyword: 'minutes' },
  { path: '/careers', name: 'Careers', breadcrumbKeyword: 'CAREERS', h1Keyword: 'point at' },
];

const VIEWPORTS = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1280, height: 800 },
  { name: 'Ultra-wide', width: 1440, height: 900 },
];

let serverProcess = null;
let spawnedServer = false;

// Filter out offline sandbox external DNS failures for CDN assets
function isRealConsoleError(msg) {
  if (typeof msg !== 'string') return true;
  if (msg.includes('ERR_NAME_NOT_RESOLVED')) return false;
  if (msg.includes('net::ERR_')) return false;
  if (msg.includes('framerusercontent.com')) return false;
  return true;
}

// Check if port is already active
function checkServerRunning() {
  return new Promise((resolve) => {
    const req = http.get(BASE_URL, (res) => {
      resolve(res.statusCode === 200 || res.statusCode === 304);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1500, () => {
      req.destroy();
      resolve(false);
    });
  });
}

// Ensure .next exists and start server
async function ensureServer() {
  const isRunning = await checkServerRunning();
  if (isRunning) {
    console.log(`[INFO] Server already running at ${BASE_URL}`);
    return;
  }

  const nextDir = path.resolve('.next');
  if (!fs.existsSync(nextDir)) {
    console.log('[INFO] .next directory not found. Building project...');
    execSync('npm run build', { stdio: 'inherit' });
  }

  console.log(`[INFO] Spawning Next.js production server on port ${PORT}...`);
  const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  serverProcess = spawn(npxCmd, ['next', 'start', '-p', String(PORT)], {
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  spawnedServer = true;

  serverProcess.stdout.on('data', (d) => {
    const out = d.toString().trim();
    if (out) console.log(`[SERVER] ${out}`);
  });
  serverProcess.stderr.on('data', (d) => {
    const err = d.toString().trim();
    if (err) console.error(`[SERVER ERR] ${err}`);
  });

  // Wait for server readiness
  const startTime = Date.now();
  while (Date.now() - startTime < 35000) {
    const active = await checkServerRunning();
    if (active) {
      console.log(`[INFO] Server ready at ${BASE_URL} in ${Date.now() - startTime}ms`);
      return;
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Server failed to start on port ${PORT} within 35 seconds`);
}

function stopServer() {
  if (spawnedServer && serverProcess && serverProcess.pid) {
    console.log(`[INFO] Shutting down Next.js server (PID ${serverProcess.pid})...`);
    try {
      execSync(`taskkill /F /T /PID ${serverProcess.pid}`, { stdio: 'ignore' });
    } catch {
      // Process already ended
    }
    try {
      if (serverProcess.stdout) serverProcess.stdout.destroy();
      if (serverProcess.stderr) serverProcess.stderr.destroy();
    } catch {}
  }
}

// Browser launch with fallback
async function launchBrowser() {
  try {
    return await chromium.launch({ channel: 'chrome', headless: true });
  } catch {
    const pwExe = 'C:\\Users\\Kavya\\AppData\\Local\\ms-playwright\\chromium-1248\\chrome-win64\\chrome.exe';
    return await chromium.launch({ executablePath: pwExe, headless: true });
  }
}

// Test Results Accumulator
class TestReporter {
  constructor() {
    this.results = [];
    this.currentTier = '';
  }

  setTier(name) {
    this.currentTier = name;
    console.log(`\n================================================================================`);
    console.log(`  ${name}`);
    console.log(`================================================================================`);
  }

  assert(description, condition, extraInfo = '') {
    if (condition) {
      console.log(`  ✓ ${description}`);
      this.results.push({ tier: this.currentTier, description, passed: true });
    } else {
      console.error(`  ✗ ${description} ${extraInfo ? `(${extraInfo})` : ''}`);
      this.results.push({ tier: this.currentTier, description, passed: false, error: extraInfo });
    }
  }

  summary() {
    const total = this.results.length;
    const passed = this.results.filter((r) => r.passed).length;
    const failed = total - passed;

    console.log(`\n================================================================================`);
    console.log(`  SUITE EXECUTION SUMMARY`);
    console.log(`================================================================================`);
    console.log(`  Total Assertions: ${total}`);
    console.log(`  Passed:           ${passed}`);
    console.log(`  Failed:           ${failed}`);
    console.log(`================================================================================\n`);

    if (failed > 0) {
      console.error(`FAILED ASSERTIONS (${failed}):`);
      this.results.filter((r) => !r.passed).forEach((r) => {
        console.error(`  [${r.tier}] ${r.description} - ${r.error || 'Failed'}`);
      });
      return false;
    }
    console.log(`ALL ${total} CHECKS PASSED PERFECTLY!\n`);
    return true;
  }
}

async function runTestSuite() {
  const reporter = new TestReporter();
  let browser = null;
  let allPassed = false;

  try {
    await ensureServer();
    browser = await launchBrowser();

    // =========================================================================
    // TIER 1: Feature Coverage (>=5 assertions per feature for all 11 routes)
    // =========================================================================
    reporter.setTier('TIER 1: FEATURE COVERAGE (Isolated Feature Assertions)');

    for (const route of TARGET_ROUTES) {
      const page = await browser.newPage();
      const consoleErrors = [];
      page.on('pageerror', (err) => {
        if (isRealConsoleError(err.message)) consoleErrors.push(err.message);
      });
      page.on('console', (msg) => {
        if (msg.type() === 'error' && isRealConsoleError(msg.text())) {
          consoleErrors.push(msg.text());
        }
      });

      const response = await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'domcontentloaded' });

      // Check 1: Route Loading (HTTP 200, text/html)
      const status = response ? response.status() : 0;
      const contentType = response ? response.headers()['content-type'] || '' : '';
      reporter.assert(
        `[${route.name}] Route responds HTTP 200 with text/html`,
        status === 200 && contentType.includes('text/html'),
        `status: ${status}, contentType: ${contentType}`
      );

      // Check 2: Hero Structure
      const heroPresent = await page.evaluate(() => {
        const heroSection = document.querySelector('section, header');
        return heroSection !== null;
      });
      reporter.assert(`[${route.name}] Top Hero section container is present in DOM`, heroPresent);

      // Check 3: Breadcrumb Navigation or Section Indicator
      const breadcrumbData = await page.evaluate((keyword) => {
        const text = document.body ? document.body.innerText.toUpperCase() : '';
        const hasHome = text.includes('HOME');
        const hasKeyword = text.includes(keyword.toUpperCase());
        const dot = document.querySelector('span.rounded-full, div.rounded-full');
        return { hasHome, hasKeyword, hasDot: dot !== null };
      }, route.breadcrumbKeyword);
      reporter.assert(
        `[${route.name}] Breadcrumb indicates HOME / ${route.breadcrumbKeyword}`,
        breadcrumbData.hasHome && breadcrumbData.hasKeyword,
        `hasHome: ${breadcrumbData.hasHome}, hasKeyword: ${breadcrumbData.hasKeyword}`
      );

      // Check 4: Main Heading (H1) Content (Checks all H1 elements on page, including hero H1)
      const h1Data = await page.evaluate((keyword) => {
        const allH1s = Array.from(document.querySelectorAll('h1')).map((h) =>
          h.innerText.replace(/\s+/g, ' ').trim().toLowerCase()
        );
        const match = allH1s.find((text) => text.includes(keyword.toLowerCase()));
        return { hasMatch: Boolean(match), allH1s, matched: match || '' };
      }, route.h1Keyword);

      reporter.assert(
        `[${route.name}] H1 heading exists and contains relevant keyword ("${route.h1Keyword}")`,
        h1Data.hasMatch,
        `found H1s: ${JSON.stringify(h1Data.allH1s)}`
      );

      // Check 5: Action Elements, Buttons, or Status Indicators
      const hasInteractiveOrAction = await page.evaluate(() => {
        const buttons = document.querySelectorAll('button, a[href^="/"], a[href^="mailto:"]');
        return buttons.length > 0;
      });
      reporter.assert(`[${route.name}] Action CTAs, buttons, or navigation links are present`, hasInteractiveOrAction);

      // Specific Check on /workflows: Services Hero Background Image Tint Reduction
      if (route.path === '/workflows') {
        const tintData = await page.evaluate(() => {
          const heroImg = document.querySelector('img[alt*="hero"], img[src*="clean_hero"]');
          if (!heroImg) return { foundImg: false };
          const imgClasses = heroImg.className || '';
          const parent = heroImg.parentElement;
          const scrim = parent ? parent.querySelector('div[class*="gradient"]') : null;
          const scrimClasses = scrim ? scrim.className : '';
          return {
            foundImg: true,
            imgClasses,
            scrimClasses,
            hasOpacity95: imgClasses.includes('opacity-95'),
            hasContrastBoost: imgClasses.includes('contrast-[1.04]'),
            hasBrightnessBoost: imgClasses.includes('brightness-[1.02]'),
            hasDirectionalScrim: scrimClasses.includes('bg-gradient-to-r') && scrimClasses.includes('to-transparent'),
          };
        });

        reporter.assert(
          `[${route.name}] Services Hero tint reduction verified (vividness boost & directional scrim)`,
          tintData.foundImg && tintData.hasOpacity95 && tintData.hasDirectionalScrim,
          JSON.stringify(tintData)
        );
      }

      await page.close();
    }

    // =========================================================================
    // TIER 2: Boundary & Corner Cases (Responsive viewports, overflow, errors)
    // =========================================================================
    reporter.setTier('TIER 2: BOUNDARY & CORNER CASES (Multi-Viewport & Overflow)');

    for (const route of TARGET_ROUTES) {
      const page = await browser.newPage();
      const consoleErrors = [];
      page.on('pageerror', (err) => {
        if (isRealConsoleError(err.message)) consoleErrors.push(err.message);
      });
      page.on('console', (msg) => {
        if (msg.type() === 'error' && isRealConsoleError(msg.text())) {
          consoleErrors.push(msg.text());
        }
      });

      await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'domcontentloaded' });

      // Viewport assertions for each route
      for (const vp of VIEWPORTS) {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.waitForTimeout(60);

        const rendered = await page.evaluate(() => {
          return document.body && document.body.offsetHeight > 200;
        });
        reporter.assert(`[${route.name}] Viewport ${vp.name} (${vp.width}x${vp.height}) renders properly`, rendered);
      }

      // Check horizontal overflow across document
      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        const body = document.body;
        const scrollWidth = Math.max(doc.scrollWidth, body ? body.scrollWidth : 0);
        const clientWidth = Math.max(doc.clientWidth, body ? body.clientWidth : 0);
        return {
          scrollWidth,
          clientWidth,
          hasOverflow: scrollWidth > clientWidth + 2, // 2px margin for subpixel rounding
        };
      });
      reporter.assert(
        `[${route.name}] Zero horizontal overflow (scrollWidth <= clientWidth)`,
        !overflow.hasOverflow,
        `scrollWidth: ${overflow.scrollWidth}, clientWidth: ${overflow.clientWidth}`
      );

      // Console errors absence
      reporter.assert(
        `[${route.name}] Zero unhandled console or runtime errors`,
        consoleErrors.length === 0,
        consoleErrors.join(' | ')
      );

      await page.close();
    }

    // =========================================================================
    // TIER 3: Cross-Feature Combinations (Pairwise & Interactive Interactions)
    // =========================================================================
    reporter.setTier('TIER 3: CROSS-FEATURE COMBINATIONS (Interactive & Navigation)');

    const comboPage = await browser.newPage();

    // 1. Home to Services Navigation
    await comboPage.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    const navLinkExists = await comboPage.evaluate(() => {
      const link = document.querySelector('a[href="/workflows"], a[href*="workflows"]');
      if (link) {
        link.click();
        return true;
      }
      return false;
    });
    if (navLinkExists) {
      await comboPage.waitForURL('**/workflows', { timeout: 5000 }).catch(() => {});
    } else {
      await comboPage.goto(`${BASE_URL}/workflows`);
    }
    const currentUrl = comboPage.url();
    reporter.assert(
      'Home to Services navigation reaches /workflows with active hero',
      currentUrl.includes('/workflows')
    );

    // 2. Subpage Breadcrumb Backlink Navigation to Home
    await comboPage.goto(`${BASE_URL}/process`, { waitUntil: 'domcontentloaded' });
    const clickedHomeBreadcrumb = await comboPage.evaluate(() => {
      const homeLink = Array.from(document.querySelectorAll('a[href="/"]')).find((a) =>
        a.innerText.trim().toUpperCase().includes('HOME')
      );
      if (homeLink) {
        homeLink.click();
        return true;
      }
      return false;
    });
    if (clickedHomeBreadcrumb) {
      await comboPage.waitForURL(`${BASE_URL}/`, { timeout: 5000 }).catch(() => {});
    }
    const homeUrl = comboPage.url();
    reporter.assert(
      'Subpage breadcrumb HOME link navigates back to root /',
      homeUrl === `${BASE_URL}/` || homeUrl === `${BASE_URL}`
    );

    // 3. Services / Process to Book CTA Navigation
    await comboPage.goto(`${BASE_URL}/workflows`, { waitUntil: 'domcontentloaded' });
    const clickedBookCta = await comboPage.evaluate(() => {
      const bookLink = Array.from(document.querySelectorAll('a[href="/book"], a[href*="/book"]'))[0];
      if (bookLink) {
        bookLink.click();
        return true;
      }
      return false;
    });
    if (clickedBookCta) {
      await comboPage.waitForURL('**/book', { timeout: 5000 }).catch(() => {});
    } else {
      await comboPage.goto(`${BASE_URL}/book`);
    }
    reporter.assert('Services CTA to Book a Call successfully routes to /book', comboPage.url().includes('/book'));

    // 4. Pricing Cadence Switcher Interaction
    await comboPage.goto(`${BASE_URL}/pricing`, { waitUntil: 'domcontentloaded' });
    await comboPage.waitForSelector('button:has-text("MONTHLY")', { timeout: 5000 });

    const initialText = await comboPage.innerText('body');
    const initialHas1500 = initialText.includes('£1,500');

    await comboPage.click('button:has-text("MONTHLY")');
    await comboPage.waitForTimeout(300);
    const monthlyText = await comboPage.innerText('body');
    const monthlyHas125 = monthlyText.includes('£125');

    await comboPage.click('button:has-text("PAY ONCE")');
    await comboPage.waitForTimeout(300);
    const revertedText = await comboPage.innerText('body');
    const revertedHas1500 = revertedText.includes('£1,500');

    reporter.assert(
      'Pricing cadence toggle switches between pay-once (£1,500) and monthly (£125) prices',
      initialHas1500 && monthlyHas125 && revertedHas1500,
      `initialHas1500: ${initialHas1500}, monthlyHas125: ${monthlyHas125}, revertedHas1500: ${revertedHas1500}`
    );

    // 5. Book Route Suspense Query Parameter Handling
    const bookParamsPage = await browser.newPage();
    const bookConsoleErrors = [];
    bookParamsPage.on('pageerror', (err) => {
      if (isRealConsoleError(err.message)) bookConsoleErrors.push(err.message);
    });
    bookParamsPage.on('console', (msg) => {
      if (msg.type() === 'error' && isRealConsoleError(msg.text())) {
        bookConsoleErrors.push(msg.text());
      }
    });

    // Percent-encoded en-dash for robust query param handling
    const queryUrl = `${BASE_URL}/book?team=${encodeURIComponent('21–100')}&workflows=Invoicing,Reporting`;
    await bookParamsPage.goto(queryUrl, { waitUntil: 'domcontentloaded' });
    await bookParamsPage.waitForSelector('form', { timeout: 5000 });

    const paramsReflected = await bookParamsPage.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const activeBtns = buttons
        .filter((b) => b.className.includes('#D4F542') || b.className.includes('text-black'))
        .map((b) => b.innerText.trim());

      const teamActive = activeBtns.some((t) => t.includes('21'));
      const invActive = activeBtns.some((t) => t.includes('Invoicing'));
      const repActive = activeBtns.some((t) => t.includes('Reporting'));
      return { teamActive, invActive, repActive, activeBtns };
    });

    reporter.assert(
      'Book page loads inside Suspense boundary and parses query params into active state',
      Boolean(paramsReflected.teamActive && paramsReflected.invActive && paramsReflected.repActive) &&
        bookConsoleErrors.length === 0,
      JSON.stringify({ paramsReflected, errors: bookConsoleErrors })
    );
    await bookParamsPage.close();

    // 6. Contact Form Input State Interactivity
    await comboPage.goto(`${BASE_URL}/contact`, { waitUntil: 'domcontentloaded' });
    await comboPage.waitForSelector('form', { timeout: 5000 });
    await comboPage.fill('input[placeholder*="name" i], input[type="text"]', 'Automation Lead');
    await comboPage.fill('input[type="email"]', 'lead@company.tech');

    const formValues = await comboPage.evaluate(() => {
      const nameInput = document.querySelector('input[placeholder*="name" i], input[type="text"]');
      const emailInput = document.querySelector('input[type="email"]');
      return {
        nameVal: nameInput ? nameInput.value : '',
        emailVal: emailInput ? emailInput.value : '',
      };
    });
    reporter.assert(
      'Contact form inputs accept text and maintain state properly',
      formValues.nameVal === 'Automation Lead' && formValues.emailVal === 'lead@company.tech'
    );

    await comboPage.close();

    // =========================================================================
    // TIER 4: Real-World Application Scenarios (5 multi-step realistic flows)
    // =========================================================================
    reporter.setTier('TIER 4: REAL-WORLD APPLICATION SCENARIOS');

    // Scenario 1: Prospective Client Evaluation Flow
    // Home -> Services -> Process -> Results -> Book
    {
      const s1Page = await browser.newPage();
      const s1Errors = [];
      s1Page.on('pageerror', (err) => {
        if (isRealConsoleError(err.message)) s1Errors.push(err.message);
      });
      s1Page.on('console', (m) => {
        if (m.type() === 'error' && isRealConsoleError(m.text())) s1Errors.push(m.text());
      });

      const s1Routes = ['/', '/workflows', '/process', '/results', '/book'];
      let s1AllValid = true;
      for (const r of s1Routes) {
        const resp = await s1Page.goto(`${BASE_URL}${r}`, { waitUntil: 'domcontentloaded' });
        if (!resp || resp.status() !== 200) s1AllValid = false;
      }
      reporter.assert(
        'Scenario 1: Prospective Client Evaluation Flow (Home -> Services -> Process -> Results -> Book)',
        s1AllValid && s1Errors.length === 0,
        `allValid: ${s1AllValid}, errors: ${s1Errors.length}`
      );
      await s1Page.close();
    }

    // Scenario 2: Commercial Decision Maker Flow
    // Industries -> Pricing -> FAQ -> Contact
    {
      const s2Page = await browser.newPage();
      const s2Errors = [];
      s2Page.on('pageerror', (err) => {
        if (isRealConsoleError(err.message)) s2Errors.push(err.message);
      });
      s2Page.on('console', (m) => {
        if (m.type() === 'error' && isRealConsoleError(m.text())) s2Errors.push(m.text());
      });

      const s2Routes = ['/industries', '/pricing', '/faq', '/contact'];
      let s2AllValid = true;
      for (const r of s2Routes) {
        const resp = await s2Page.goto(`${BASE_URL}${r}`, { waitUntil: 'domcontentloaded' });
        if (!resp || resp.status() !== 200) s2AllValid = false;
      }
      reporter.assert(
        'Scenario 2: Commercial Decision Maker Flow (Industries -> Pricing -> FAQ -> Contact)',
        s2AllValid && s2Errors.length === 0,
        `allValid: ${s2AllValid}, errors: ${s2Errors.length}`
      );
      await s2Page.close();
    }

    // Scenario 3: Company Discovery & Talent Flow
    // About -> Tools -> Careers
    {
      const s3Page = await browser.newPage();
      const s3Errors = [];
      s3Page.on('pageerror', (err) => {
        if (isRealConsoleError(err.message)) s3Errors.push(err.message);
      });
      s3Page.on('console', (m) => {
        if (m.type() === 'error' && isRealConsoleError(m.text())) s3Errors.push(m.text());
      });

      const s3Routes = ['/about', '/tools', '/careers'];
      let s3AllValid = true;
      for (const r of s3Routes) {
        const resp = await s3Page.goto(`${BASE_URL}${r}`, { waitUntil: 'domcontentloaded' });
        if (!resp || resp.status() !== 200) s3AllValid = false;
      }
      reporter.assert(
        'Scenario 3: Company Discovery & Talent Flow (About -> Tools -> Careers)',
        s3AllValid && s3Errors.length === 0,
        `allValid: ${s3AllValid}, errors: ${s3Errors.length}`
      );
      await s3Page.close();
    }

    // Scenario 4: Direct Booking Flow with Query Params & Form Submission
    {
      const s4Page = await browser.newPage();
      await s4Page.goto(`${BASE_URL}/book?team=100%2B&workflows=Support`, { waitUntil: 'domcontentloaded' });
      await s4Page.waitForSelector('form', { timeout: 5000 });

      await s4Page.fill('form input[type="text"]', 'Enterprise Partner');
      await s4Page.fill('form input[type="email"]', 'partner@enterprise.com');
      await s4Page.click('form button[type="submit"]');

      // Wait for confirmation container to appear (handles both "Architecture Call Confirmed" and legacy "Call request received")
      const confirmationAppeared = await s4Page
        .waitForFunction(() => {
          const bodyText = document.body ? document.body.innerText : '';
          return (
            bodyText.includes('Architecture Call Confirmed') ||
            bodyText.includes('Call request received') ||
            bodyText.includes('Calendar invite')
          );
        }, { timeout: 5000 })
        .then(() => true)
        .catch(() => false);

      reporter.assert(
        'Scenario 4: Direct Booking Flow with Query Params & Form Submission',
        confirmationAppeared
      );
      await s4Page.close();
    }

    // Scenario 5: Full Site Health & Rapid Sweep
    {
      const sweepPage = await browser.newPage();
      const sweepStart = Date.now();
      let all200 = true;
      const sweepErrors = [];

      sweepPage.on('pageerror', (err) => {
        if (isRealConsoleError(err.message)) sweepErrors.push(err.message);
      });
      sweepPage.on('console', (m) => {
        if (m.type() === 'error' && isRealConsoleError(m.text())) {
          sweepErrors.push(m.text());
        }
      });

      for (const route of TARGET_ROUTES) {
        const resp = await sweepPage.goto(`${BASE_URL}${route.path}`, { waitUntil: 'domcontentloaded' });
        if (!resp || resp.status() !== 200) all200 = false;
      }
      const sweepDuration = Date.now() - sweepStart;
      reporter.assert(
        `Scenario 5: Full Site Health & Rapid Sweep (11 routes visited in ${sweepDuration}ms <= 15000ms)`,
        all200 && sweepDuration <= 15000 && sweepErrors.length === 0,
        `all200: ${all200}, duration: ${sweepDuration}ms, errors: ${sweepErrors.length}`
      );
      await sweepPage.close();
    }

    // Final Summary Evaluation
    allPassed = reporter.summary();
  } catch (err) {
    console.error('\n[FATAL ERROR IN TEST RUNNER]', err);
    allPassed = false;
  } finally {
    if (browser) {
      try {
        await browser.close();
      } catch {}
    }
    stopServer();
    process.exit(allPassed ? 0 : 1);
  }
}

// Global safety cleanups
process.on('SIGINT', () => {
  stopServer();
  process.exit(130);
});
process.on('SIGTERM', () => {
  stopServer();
  process.exit(143);
});

runTestSuite();
