import { preguntaOpcionDefinition } from '@/models';
import { z } from 'zod';

export type TEncuestaForm = z.infer<typeof encuestaFormDefinition>;

export const encuestaFormDefinition = z
 .object({
  puntajeMaximo: z.number(),
  resultado: z.number(),
  cantidadPreguntas: z.number(),
  preguntaOpcionSelecionadas: z.array(preguntaOpcionDefinition),
 })
 .superRefine((data, ctx) => {
  if (data.resultado > data.puntajeMaximo) {
   ctx.addIssue({
    path: ['resultado'],
    code: 'custom',
    message: 'El resultado no puede ser mayor que el puntaje máximo',
   });
  }

  if (data.preguntaOpcionSelecionadas.length !== data.cantidadPreguntas) {
   ctx.addIssue({
    path: ['cantidadPreguntas'],
    code: 'custom',
    message: 'Debes responder todas las preguntas',
   });
  }
 });
