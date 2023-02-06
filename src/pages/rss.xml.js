import rss from '@astrojs/rss';
import { getAllPosts } from "../lib/api.js";

const postImportResult = import.meta.globEager('./*.md');
const posts = await getAllPosts();

export const get = () => rss({
  stylesheet: '/rss/styles.xsl',
  title: 'Trente Neuf Degrés',
  description: 'Le média populaire, écologiste et social du Jura',
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: `/article/${post.slug.current}`,
    description: post.excerpt,
    title: post.title,
    pubDate: post.publishedAt,
  }))
});