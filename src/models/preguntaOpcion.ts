import { z } from 'zod';

export const preguntaOpcionDefinition = z.object({
 idOpcion: z.number().int(),
 idPregunta: z.number().int(),
});

export type TPreguntaOpcion = z.infer<typeof preguntaOpcionDefinition>;
