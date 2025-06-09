import type { TPregunta } from '@/models';

const preguntaOpcion: Record<number, Array<number>> = {
 1: [1, 2, 3, 4],
 2: [5, 6, 7, 8],
 3: [9, 10, 11, 12],
 4: [13, 14, 15, 16],
 5: [17, 18, 19, 20],
 6: [21, 22, 23, 24],
 7: [25, 26, 27, 28],
 8: [29, 30, 31, 32],
 9: [33, 34, 35, 36],
 10: [37, 38, 39, 40],
 11: [41, 42, 43, 44],
 12: [45, 46, 47, 48],
};
const preguntasTitulos: Record<number, Partial<TPregunta>> = {
 1: {
  titulo:
   '¿Qué lenguaje se utiliza principalmente para desarrollar aplicaciones Android nativas?',
 },
 2: { titulo: '¿Qué paradigma de programación se basa en objetos y clases?' },
 3: {
  titulo: '¿Cuál no es un tipo de dato primitivo en la mayoría de lenguajes?',
 },
 4: {
  titulo: '¿Qué herramienta es esencial para gestionar versiones de código?',
 },
 5: { titulo: '¿Qué tecnología se usa para estilizar páginas web?' },
 6: { titulo: 'En el desarrollo backend, ¿qué base de datos es NoSQL?' },
 7: {
  titulo:
   '¿Qué método HTTP se utiliza para enviar datos al servidor (ej: formularios)?',
 },
 8: {
  titulo:
   '¿Qué principio de diseño recomienda que una clase tenga una única responsabilidad?',
 },

 9: {
  titulo:
   '¿Qué área de la programación está más vinculada a la inteligencia artificial?',
 },
 10: { titulo: '¿Qué habilidad blanda es crucial para un programador?' },
 11: {
  titulo:
   'Según tendencias, ¿qué lenguaje ha ganado popularidad en ciencia de datos?',
 },
 12: {
  titulo:
   '¿Qué práctica mejora la calidad del código mediante revisión entre pares?',
 },
};

const mockPreguntasArray: TPregunta[] = Array.from(
 { length: 12 },
 (_, index) => {
  const idPregunta = index + 1;

  return {
   id: idPregunta,
   estatus: true,
   titulo: preguntasTitulos[idPregunta]?.titulo ?? '',
   preguntaOpcion: preguntaOpcion[idPregunta]?.map((idOpcion) => ({
    idOpcion,
    idPregunta,
   })),
   createAt: new Date(),
   updateAt: new Date(),
  };
 }
);

export const mockPreguntas: TPregunta[] = mockPreguntasArray;
