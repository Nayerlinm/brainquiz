import { z } from 'zod';

export const opcionTypeEnum = z.enum([
 'text',
 'date',
 'time',
 'radio',
 'number',
 'select',
 'checkbox',
]);

export type TOpcionType = z.infer<typeof opcionTypeEnum>;

export type TOpcion = z.infer<typeof opcionDefinition>;

export const opcionDefinition = z.object({
 id: z.number().int(),
 titulo: z.string(),
 estatus: z.boolean(),
 tipo: opcionTypeEnum,
 puntaje: z.number(),
 createAt: z.date(),
 updateAt: z.date().optional(),
});
