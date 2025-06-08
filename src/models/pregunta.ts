import { z } from 'zod';
import { preguntaOpcionDefinition } from './preguntaOpcion';

export const preguntaDefinition = z.object({
 id: z.number().int(),
 titulo: z.string().min(1, 'El título es obligatorio'),
 estatus: z.boolean(),
 createAt: z.date(),
 updateAt: z.date().optional(),
 preguntaOpcion: z.array(preguntaOpcionDefinition).optional(),
});

export type TPregunta = z.infer<typeof preguntaDefinition>;
