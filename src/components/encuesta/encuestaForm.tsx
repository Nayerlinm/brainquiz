import { ResultadoContext, UsuarioContext } from '@/context';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2Icon, SendIcon } from 'lucide-react';
import React from 'react';
import {
 FormProvider,
 type SubmitErrorHandler,
 type SubmitHandler,
 useForm,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import type { TEncuesta, TOpcion, TPregunta } from '../../models';
import { Button } from '../ui/button';
import { type TEncuestaForm, encuestaFormDefinition } from './definition';
import EncuestaFormContent from './encuestaFormContent';

interface Props {
 encuesta: TEncuesta;
 opciones: TOpcion[];
 preguntas: TPregunta[];
}

function EncuestaForm({ encuesta, preguntas, opciones }: Props) {
 const [disabledButtons, setDisabledButtons] = React.useState(false);

 const navigate = useNavigate();
 const { guardarResultado } = React.useContext(ResultadoContext);
 const { usuario } = React.useContext(UsuarioContext);

 const methods = useForm<TEncuestaForm>({
  defaultValues: Object.assign({
   resultado: 0,
   preguntaOpcionSelecionadas: [],
   cantidadPreguntas: preguntas.length,
   puntajeMaximo: encuesta.puntaje_maximo,
  }),
  resolver: zodResolver(encuestaFormDefinition),
 });

 const onSubmit: SubmitHandler<TEncuestaForm> = (data: TEncuestaForm) => {
  setDisabledButtons(true);
  setTimeout(() => {
   guardarResultado({
    puntaje: data.resultado,
    idEncuesta: encuesta.id,
    idUsuario: usuario?.id || '',
   });
   setDisabledButtons(false);
   toast.success('Encuesta enviada 🎊');
   navigate('/');
  }, 800);
 };

 const onError: SubmitErrorHandler<TEncuestaForm> = (errors) => {
  Object.values(errors).forEach((error) => {
   toast.error(error.message);
  });
 };

 return (
  <FormProvider {...methods}>
   <form onSubmit={methods.handleSubmit(onSubmit, onError)} className="my-10">
    <EncuestaFormContent preguntas={preguntas} opciones={opciones} />
    <div className="flex justify-end gap-4">
     <Button type="button" variant={'outline'} onClick={() => navigate(-1)}>
      Regresar
     </Button>
     <Button disabled={methods.formState.isSubmitting || disabledButtons}>
      Enviar
      {methods.formState.isSubmitting || disabledButtons ? (
       <Loader2Icon className="animate-spin" />
      ) : (
       <SendIcon />
      )}
     </Button>
    </div>
   </form>
  </FormProvider>
 );
}

export default EncuestaForm;
