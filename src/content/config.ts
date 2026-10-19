import { defineCollection, z } from "astro:content";

const carCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.url(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.url(),
      usa: z.url(),
    }),
  }),
});

export const collections = {
  carCollection,
};
