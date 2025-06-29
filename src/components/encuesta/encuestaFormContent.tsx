import type { TOpcion, TPregunta } from '@/models';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { TypographyH3 } from '../common/typography';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import type { TEncuestaForm } from './definition';

interface Props {
 opciones: TOpcion[];
 preguntas: TPregunta[];
}

function EncuestaFormContent({ preguntas, opciones }: Props) {
 const methods = useFormContext<TEncuestaForm>();
 const { setValue, watch } = methods;
 const preguntaOpcionSelecionadas = watch('preguntaOpcionSelecionadas');

 // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
 useEffect(() => {
  return setValue('resultado', getResultadoTotal());
 }, [preguntaOpcionSelecionadas]);

 function getResultadoTotal(): number {
  return preguntaOpcionSelecionadas
   .map(({ idOpcion }) => {
    const opcion = opciones.find((opcion) => opcion.id === idOpcion);
    return opcion?.puntaje ?? 0;
   })
   .reduce((puntajeTotal, puntaje) => puntajeTotal + puntaje, 0);
 }

 function handlePeguntaOpcion(preguntaOpcion: string): void {
  const [idPregunta, idOpcion] = preguntaOpcion.split('-');

  const filtered = preguntaOpcionSelecionadas.filter(
   (preguntaOpcion) => preguntaOpcion.idPregunta !== Number(idPregunta)
  );

  setValue('preguntaOpcionSelecionadas', [
   ...filtered,
   {
    idOpcion: Number(idOpcion),
    idPregunta: Number(idPregunta),
   },
  ]);
 }

 return (
  <div className="space-y-6 flex flex-col gap-10 my-10">
   {preguntas.map((pregunta) => (
    <div className="flex flex-col gap-4 border-b pb-6" key={pregunta.id}>
     <TypographyH3 className="mb-4">{pregunta.titulo}</TypographyH3>
     <RadioGroup onValueChange={handlePeguntaOpcion}>
      {opciones
       .filter((opcion) =>
        pregunta.preguntaOpcion?.some(
         (preguntaOpcion) => preguntaOpcion.idOpcion === opcion.id
        )
       )
       .map((opcion) => (
        <div
         key={`${pregunta.id}-${opcion.id}`}
         className="flex items-center space-x-2 mb-2 cursor-pointer"
        >
         <RadioGroupItem
          id={`${pregunta.id}-${opcion.id}`}
          value={`${pregunta.id}-${opcion.id}`}
         />
         <Label htmlFor={`${pregunta.id}-${opcion.id}`}>{opcion.titulo}</Label>
        </div>
       ))}
     </RadioGroup>
    </div>
   ))}
  </div>
 );
}

export default EncuestaFormContent;
