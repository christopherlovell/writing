import { getCollection } from 'astro:content';

// Drafts appear in `npm run dev` but are left out of the built site.
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
