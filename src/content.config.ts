import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readTime: z.string(),
    excerpt: z.string().optional(), // Optional excerpt for posts list
    image: z.string().optional(), // Optional cover image for posts list
  }),
});

export const collections = {
  posts: postsCollection,
};

