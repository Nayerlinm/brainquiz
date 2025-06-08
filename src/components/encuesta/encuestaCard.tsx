import { ResultadoContext, UsuarioContext } from '@/context';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { TEncuesta } from '../../models';
import { TypographyH4, TypographySmall } from '../common/typography';
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
 const { titulo, descripcion, puntaje_maximo, id, publico } = encuesta;
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
    className={cn([puntajeUsuario > 2.5 && 'cursor-pointer'])}
    onClick={handleClick}
   >
    <CardHeader>
     <CardTitle>
      <TypographyH4 className="line-clamp-1 text-ellipsis">
       {titulo}
      </TypographyH4>
     </CardTitle>
     <CardDescription>{descripcion}</CardDescription>
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
   </Card>
   <UsuarioPreRegisterModal open={isOpen} onOpenChange={setIsOpen} />
  </React.Fragment>
 );
}

export default EncuestaCard;
