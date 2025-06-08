import { z } from 'zod';
import { encuestaPreguntaDefinition } from './encuestaPregunta';

export const encuestaDefinition = z.object({
 id: z.number(),
 titulo: z.string(),
 descripcion: z.string(),
 puntaje_maximo: z.number(),
 estatus: z.boolean(),
 createAt: z.date(),
 updateAt: z.date().optional(),
 encuestaPregunta: z.array(encuestaPreguntaDefinition).optional(),
 publico: z.boolean(),
});

export type TEncuesta = z.infer<typeof encuestaDefinition>;
