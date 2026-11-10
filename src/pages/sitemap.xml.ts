import type { APIRoute } from 'astro';

const PUBLIC_CORE_ROUTES = [
  '/',
  '/about/',
  '/sonal-pendse/',
  '/classes/',
  '/studio/',
  '/events/',
  '/gallery/',
  '/contact/',
  '/privacy/',
];

export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.toString().replace(/\/$/, '') : 'https://padmakoshstudio.in';

  // Note: Local test event fixtures (/events/test-*) are strictly excluded from sitemap.xml
  const urlsXml = PUBLIC_CORE_ROUTES.map(
    (path) => `  <url>\n    <loc>${origin}${path}</loc>\n  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
