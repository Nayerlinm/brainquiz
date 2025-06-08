import { z } from 'zod';

export type TResultado = z.infer<typeof resultadoDefinition>;

export const resultadoDefinition = z.object({
 id: z.number().int(),
 idUsuario: z.string(),
 idEncuesta: z.number().int(),
 puntaje: z.number().int(),
 createAt: z.date(),
 updateAt: z.date().optional(),
});
