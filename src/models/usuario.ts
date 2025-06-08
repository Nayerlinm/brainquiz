import { z } from 'zod';

export type TUsuario = z.infer<typeof usuarioDefinition>;

export const usuarioDefinition = z.object({
 id: z.string(),
 email: z.string(),
 firstName: z.string(),
 lastName: z.string(),
 image: z.string().optional(),
 createdAt: z.string().optional(),
 updatedAt: z.string().optional(),
 deletedAt: z.string().optional(),
});
