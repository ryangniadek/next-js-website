import { GetServerSideProps } from 'next';
import { getSortedPostsData } from '../lib/posts';

const SITE_URL = 'https://ryangniadek.com';

const staticPages = ['', '/blog', '/projects', '/experience', '/contact'];

function generateSitemap(postIds: string[]): string {
  const staticEntries = staticPages.map(
    (path) => `
  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
  );

  const postEntries = postIds.map(
    (id) => `
  <url>
    <loc>${SITE_URL}/posts/${id}</loc>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...postEntries].join('')}
</urlset>`;
}

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = getSortedPostsData();
  const sitemap = generateSitemap(posts.map((p) => p.id));

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
};
