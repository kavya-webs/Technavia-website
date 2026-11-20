// Comprehensive page extraction script for Playwright
// Visits every page, extracts full layout/style/animation data, takes screenshots

async (page) => {
  const BASE = 'https://miraculous-beet-889424.framer.app';
  
  const PAGES = [
    { slug: '/', name: 'home' },
    { slug: '/workflows', name: 'workflows' },
    { slug: '/workflows/invoicing', name: 'wf-invoicing' },
    { slug: '/workflows/lead-routing', name: 'wf-lead-routing' },
    { slug: '/workflows/support', name: 'wf-support' },
    { slug: '/workflows/onboarding', name: 'wf-onboarding' },
    { slug: '/workflows/reporting', name: 'wf-reporting' },
    { slug: '/results', name: 'results' },
    { slug: '/results/harbour-dental', name: 'rs-harbour-dental' },
    { slug: '/results/northcode-studio', name: 'rs-northcode' },
    { slug: '/results/fernwood-living', name: 'rs-fernwood' },
    { slug: '/results/crosslane-freight', name: 'rs-crosslane' },
    { slug: '/results/whitmore-hale', name: 'rs-whitmore' },
    { slug: '/results/aldgate-estates', name: 'rs-aldgate' },
    { slug: '/process', name: 'process' },
    { slug: '/pricing', name: 'pricing' },
    { slug: '/about', name: 'about' },
    { slug: '/book', name: 'book' },
    { slug: '/industries', name: 'industries' },
    { slug: '/tools', name: 'tools' },
    { slug: '/insights', name: 'insights' },
    { slug: '/insights/which-workflow-first', name: 'in-workflow-first' },
    { slug: '/insights/zapier-make-n8n', name: 'in-zapier-make' },
    { slug: '/insights/invoice-chasing', name: 'in-invoice-chasing' },
    { slug: '/insights/ai-agents-in-support', name: 'in-ai-agents' },
    { slug: '/contact', name: 'contact' },
  ];

  const extractPageData = async () => {
    return await page.evaluate(() => {
      const data = { sections: [], links: [], images: [], forms: [] };
      
      // Extract all sections with their bounding boxes and content
      const sections = document.querySelectorAll('section, [data-framer-name], main > div > div');
      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const style = getComputedStyle(sec);
        data.sections.push({
          index: i,
          tag: sec.tagName,
          framerName: sec.getAttribute('data-framer-name') || '',
          box: { x: rect.x, y: rect.y + window.scrollY, w: rect.width, h: rect.height },
          bg: style.backgroundColor,
          overflow: style.overflow,
          position: style.position,
          text: sec.textContent?.slice(0, 200) || ''
        });
      });
      
      // Extract all links
      document.querySelectorAll('a[href]').forEach(a => {
        data.links.push({ href: a.getAttribute('href'), text: a.textContent?.trim().slice(0, 80) });
      });
      
      // Extract all images
      document.querySelectorAll('img').forEach(img => {
        data.images.push({ 
          src: img.src?.slice(0, 200), 
          alt: img.alt, 
          w: img.naturalWidth, 
          h: img.naturalHeight 
        });
      });
      
      // Extract forms
      document.querySelectorAll('form, [role="form"]').forEach(form => {
        const inputs = [];
        form.querySelectorAll('input, button, select, textarea').forEach(el => {
          inputs.push({ tag: el.tagName, type: el.type, name: el.name, placeholder: el.placeholder });
        });
        data.forms.push({ inputs, action: form.action });
      });
      
      return data;
    });
  };

  const results = {};

  for (const pg of PAGES) {
    try {
      await page.goto(BASE + pg.slug, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(3000);
      
      // Full-page screenshot
      await page.screenshot({ path: `screenshots/${pg.name}-full.png`, fullPage: true });
      
      // Viewport screenshot
      await page.screenshot({ path: `screenshots/${pg.name}-viewport.png` });
      
      // Extract page data
      const pageData = await extractPageData();
      
      // Get page title and meta
      const title = await page.title();
      const meta = await page.evaluate(() => {
        const desc = document.querySelector('meta[name="description"]')?.content || '';
        const og = document.querySelector('meta[property="og:image"]')?.content || '';
        return { description: desc, ogImage: og };
      });
      
      results[pg.name] = {
        url: BASE + pg.slug,
        title,
        meta,
        sectionCount: pageData.sections.length,
        linkCount: pageData.links.length,
        imageCount: pageData.images.length,
        sections: pageData.sections.slice(0, 30),
        links: pageData.links,
        images: pageData.images,
        forms: pageData.forms
      };
    } catch (err) {
      results[pg.name] = { error: err.message, url: BASE + pg.slug };
    }
  }

  // Save results to file
  const fs = require('fs');
  fs.writeFileSync('screenshots/all-pages-data.json', JSON.stringify(results, null, 2));
  
  return `Analyzed ${Object.keys(results).length} pages. Data saved to screenshots/all-pages-data.json`;
}
