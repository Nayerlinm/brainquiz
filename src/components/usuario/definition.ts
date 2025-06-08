import { usuarioDefinition } from '@/models';
import { z } from 'zod';

export type TUsuarioForm = z.infer<typeof usuarioFormDefinition>;

export const usuarioFormDefinition = usuarioDefinition.extend({
 email: z
  .string()
  .email({ message: 'El correo no es valido' })
  .min(1, { message: 'El correo es obligatorio' }),
 firstName: z
  .string({ message: 'El nombre es obligatorio' })
  .min(1, { message: 'El nombre es obligatorio' }),
 lastName: z
  .string({ message: 'El apellido es obligatorio' })
  .min(1, { message: 'El apellido es obligatorio' }),
});
