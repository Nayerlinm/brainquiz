import { z } from 'zod';

export const encuestaPreguntaDefinition = z.object({
 idEncuesta: z.number().int(),
 idPregunta: z.number().int(),
});
