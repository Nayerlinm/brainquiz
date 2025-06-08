import {
 TypographyH1,
 TypographyLead,
 TypographyMuted,
} from '@/components/common/typography';
import EncuestaForm from '@/components/encuesta/encuestaForm';
import { Button } from '@/components/ui/button';
import { mockEncuentas, mockOpciones, mockPreguntas } from '@/mocks';
import type { TEncuesta, TOpcion, TPregunta } from '@/models';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EncuestaFormPage() {
 const { id } = useParams();
 const navigate = useNavigate();

 const encuesta: TEncuesta = React.useMemo(
  () =>
   mockEncuentas.find((encuesta) => encuesta.id === Number(id)) as TEncuesta,
  [id]
 );

 const preguntas: TPregunta[] = React.useMemo(
  () =>
   mockPreguntas.filter((pregunta) =>
    encuesta?.encuestaPregunta?.some(
     (preguntaEncuesta) => preguntaEncuesta.idPregunta === pregunta.id
    )
   ),
  [encuesta]
 );

 const opciones: TOpcion[] = React.useMemo(
  () =>
   mockOpciones.filter((opcion) =>
    preguntas.some((pregunta) =>
     pregunta?.preguntaOpcion?.some(
      (preguntaOpcion) => preguntaOpcion.idOpcion === opcion.id
     )
    )
   ),
  [preguntas]
 );

 return (
  <React.Fragment>
   <div className="my-10">
    <div className="flex gap-6">
     <Button type="button" variant={'outline'} onClick={() => navigate(-1)}>
      ←
     </Button>
     <div className="flex flex-col">
      <div className="flex items-center gap-6">
       <TypographyH1>{encuesta?.titulo}</TypographyH1>
       <TypographyLead className="ms-auto">
        <strong>{encuesta.puntaje_maximo}</strong> Puntos
       </TypographyLead>
      </div>
      <TypographyMuted>{encuesta?.descripcion}</TypographyMuted>
     </div>
    </div>
   </div>
   <EncuestaForm
    encuesta={encuesta}
    opciones={opciones}
    preguntas={preguntas}
   />
  </React.Fragment>
 );
}

export default EncuestaFormPage;
