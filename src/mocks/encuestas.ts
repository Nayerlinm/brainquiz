import type { TEncuesta } from '../models';

export const mockEncuentas: TEncuesta[] = [
 {
  id: 1,
  estatus: true,
  puntaje_maximo: 10,
  titulo: 'Fundamentos de Programación',
  descripcion: 'Nivel: Básico/Intermedio',
  createAt: new Date(),
  updateAt: new Date(),
  encuestaPregunta: [
   {
    idEncuesta: 1,
    idPregunta: 1,
   },
   {
    idEncuesta: 1,
    idPregunta: 2,
   },
   {
    idEncuesta: 1,
    idPregunta: 3,
   },
   {
    idEncuesta: 1,
    idPregunta: 4,
   },
  ],
  publico: false,
 },
 {
  id: 2,
  estatus: true,
  puntaje_maximo: 10,
  titulo: 'Desarrollo Web y Prácticas',
  descripcion: 'Nivel: Intermedio',
  createAt: new Date(),
  updateAt: new Date(),
  encuestaPregunta: [
   {
    idEncuesta: 2,
    idPregunta: 5,
   },
   {
    idEncuesta: 2,
    idPregunta: 6,
   },
   {
    idEncuesta: 2,
    idPregunta: 7,
   },
   {
    idEncuesta: 2,
    idPregunta: 8,
   },
  ],
  publico: false,
 },
 {
  id: 3,
  estatus: true,
  puntaje_maximo: 10,
  titulo: 'Carrera y Tendencias',
  descripcion: 'Nivel: General',
  createAt: new Date(),
  updateAt: new Date(),
  encuestaPregunta: [
   {
    idEncuesta: 3,
    idPregunta: 9,
   },
   {
    idEncuesta: 3,
    idPregunta: 10,
   },
   {
    idEncuesta: 3,
    idPregunta: 11,
   },
   {
    idEncuesta: 3,
    idPregunta: 12,
   },
  ],
  publico: true,
 },
];
