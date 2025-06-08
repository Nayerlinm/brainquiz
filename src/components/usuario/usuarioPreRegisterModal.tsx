import { UsuarioContext } from '@/context';
import { zodResolver } from '@hookform/resolvers/zod';
import type { DialogProps } from '@radix-ui/react-dialog';
import React from 'react';
import {
 FormProvider,
 type SubmitErrorHandler,
 type SubmitHandler,
 useForm,
} from 'react-hook-form';
import { toast } from 'sonner';
import { v4 as uuid } from 'uuid';
import { Button } from '../ui/button';
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
} from '../ui/dialog';
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { type TUsuarioForm, usuarioFormDefinition } from './definition';

function UsuarioPreRegisterModal({ children, ...props }: DialogProps) {
 const { guardarUsuario } = React.useContext(UsuarioContext);

 const methods = useForm<TUsuarioForm>({
  defaultValues: { id: uuid(), firstName: '', lastName: '', email: '' },
  resolver: zodResolver(usuarioFormDefinition),
  mode: 'onChange',
 });

 const handleConfirm: SubmitHandler<TUsuarioForm> = (
  formData: TUsuarioForm
 ) => {
  guardarUsuario(formData);
  props?.onOpenChange?.(false);
  methods.reset();
  toast.success('¡Bienvenido!');
 };

 const onError: SubmitErrorHandler<TUsuarioForm> = (errors) => {
  Object.values(errors).forEach((error) => {
   toast.error(error.message);
  });
 };

 return (
  <Dialog
   {...props}
   onOpenChange={(open) => {
    if (open) return;
    props?.onOpenChange?.(open);
    methods.reset();
   }}
  >
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Encuestas VIP 💎</DialogTitle>
     <DialogDescription>
      Para tener acceso a las encuestas VIP, por favor ingresa tus datos.
     </DialogDescription>

     <FormProvider {...methods}>
      <form
       className="flex flex-col space-y-4 mt-4"
       onSubmit={methods.handleSubmit(handleConfirm, onError)}
      >
       <FormField
        control={methods.control}
        name="firstName"
        render={({ field }) => (
         <FormItem>
          <FormControl>
           <Input type="text" placeholder="Nombres" {...field} />
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />
       <FormField
        control={methods.control}
        name="lastName"
        render={({ field }) => (
         <FormItem>
          <FormControl>
           <Input type="text" placeholder="Apellidos" {...field} />
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />
       <FormField
        control={methods.control}
        name="email"
        render={({ field }) => (
         <FormItem>
          <FormControl>
           <Input type="email" placeholder="Correo" {...field} />
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />
       <Button className="mt-4" type="submit">
        Iniciar
       </Button>
      </form>
     </FormProvider>
    </DialogHeader>
   </DialogContent>
  </Dialog>
 );
}

export default UsuarioPreRegisterModal;
