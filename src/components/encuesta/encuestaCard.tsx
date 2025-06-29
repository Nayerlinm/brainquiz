import { ResultadoContext, UsuarioContext } from '@/context';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { TEncuesta } from '../../models';
import {
 TypographyH4,
 TypographyMuted,
 TypographySmall,
} from '../common/typography';
import {
 Card,
 CardAction,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from '../ui/card';
import { Progress } from '../ui/progress';
import UsuarioPreRegisterModal from '../usuario/usuarioPreRegisterModal';

function EncuestaCard(encuesta: TEncuesta) {
 const { titulo, descripcion, puntaje_maximo, id, publico, imagen } = encuesta;
 const [isOpen, setIsOpen] = React.useState(false);
 const { usuario } = React.useContext(UsuarioContext);
 const { getResultadoPorEncuesta, getResultadoPorId } =
  React.useContext(ResultadoContext);

 const navigate = useNavigate();

 const canAcceder = React.useMemo(
  () => !usuario && !publico,
  [usuario, publico]
 );

 const accesoIcon = React.useMemo(() => {
  if (canAcceder) return '💎';
  return <TypographySmall>{puntaje_maximo} Puntos</TypographySmall>;
 }, [canAcceder, puntaje_maximo]);

 const puntajeUsuario: number = React.useMemo(
  () => getResultadoPorEncuesta(id),
  [getResultadoPorEncuesta, id]
 );

 const resultadoColor: { [key: number]: string } = React.useMemo(
  () => ({
   2.5: 'bg-red-500',
   5: 'bg-orange-500',
   7.5: 'bg-yellow-500',
   10: 'bg-green-500',
  }),
  []
 );

 const handleClick = () => {
  if (canAcceder) return setIsOpen(true);
  if (puntajeUsuario > 2.5) return;
  navigate(`/${id}`);
 };

 return (
  <React.Fragment>
   <Card
    onClick={handleClick}
    className={cn([
     puntajeUsuario <= 2.5 && 'cursor-pointer',
     'relative bg-secondary/50 drop-shadow-accent backdrop-blur-3xl border-transparent overflow-hidden',
    ])}
   >
    {!imagen ? null : (
     <img
      height={400}
      alt={titulo}
      loading="lazy"
      className="max-h-40 object-cover mx-6 rounded-md"
      src={imagen ?? 'https://placehold.co/600x400'}
     />
    )}
    <CardHeader>
     <CardTitle>
      <TypographyH4 className="line-clamp-1 text-ellipsis">
       {titulo}
      </TypographyH4>
     </CardTitle>
     <CardDescription>
      <TypographyMuted>{descripcion}</TypographyMuted>
     </CardDescription>
     <CardAction>{accesoIcon}</CardAction>
    </CardHeader>
    {puntajeUsuario === 0 ? (
     !getResultadoPorId(id) ? null : (
      <CardFooter className="flex items-center justify-end gap-x-1">
       <TypographySmall>Reintentar</TypographySmall>
       <ArrowRight className="h-4 w-4" />
      </CardFooter>
     )
    ) : (
     <CardFooter className="flex items-center gap-x-4">
      <Progress
       className={cn('flex-1')}
       value={(puntajeUsuario / encuesta.puntaje_maximo) * 100}
       color={resultadoColor[puntajeUsuario]}
      />
      <TypographySmall>
       {puntajeUsuario} / {encuesta.puntaje_maximo}
      </TypographySmall>
     </CardFooter>
    )}
    <span className="absolute -top-20 right-0 h-36 w-36 bg-amber-300/30 blur-3xl rounded-full -z-10" />
    <span className="absolute -bottom-20 right-10 h-36 w-36 bg-sky-300/30 blur-3xl rounded-full -z-10" />
   </Card>
   <UsuarioPreRegisterModal open={isOpen} onOpenChange={setIsOpen} />
  </React.Fragment>
 );
}

export default EncuestaCard;
