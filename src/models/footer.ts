import { z } from 'zod';

export type TFooterLinks = z.infer<typeof footerLinks>;

export const footerLinks = z.array(
 z.object({
  icon: z.any().optional(),
  name: z.string(),
  href: z.string(),
 })
);
