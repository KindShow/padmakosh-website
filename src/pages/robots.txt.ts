import type { APIRoute } from 'astro';
import { isIndexingAllowed } from '../lib/sanity';

export const GET: APIRoute = ({ site }) => {
  const allowIndexing = isIndexingAllowed();
  const origin = site ? site.toString().replace(/\/$/, '') : 'https://padmakoshstudio.in';

  // Local and preview builds MUST remain Disallow: / until PUBLIC_ALLOW_INDEXING="true" in production
  const body = allowIndexing
    ? `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`
    : `# Padmakosh Local/Preview Build — Indexing Disabled Until Authorised Launch\nUser-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
