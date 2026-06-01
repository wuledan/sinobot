import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  date: z.date(),
  author: z.string().default('SinoBot Editorial'),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  excerpt: z.string().optional(),
  tier: z.enum(['daily-pulse', 'hands-on', 'deep-signal']),
});

const enCollection = defineCollection({ schema: baseSchema });
const zhCollection = defineCollection({ schema: baseSchema });

export const collections = {
  en: enCollection,
  zh: zhCollection,
};
