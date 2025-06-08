import type { TResultado } from '@/models';
import React from 'react';

interface IResultadoContext {
 resultados: TResultado[];
 guardarResultado: (resultado: Omit<TResultado, 'id' | 'createAt'>) => void;
 eliminarResultados: () => void;
 getResultadoPorId: (id: number) => TResultado | undefined;
 getResultadoPorEncuesta: (idEncuesta: number) => number;
}

const ResultadoContext = React.createContext<IResultadoContext>({
 resultados: [],
 guardarResultado: () => null,
 eliminarResultados: () => null,
 getResultadoPorId: () => undefined,
 getResultadoPorEncuesta: () => 0,
});

const ResultadoProvider = ({ children }: { children: React.ReactNode }) => {
 const [resultados, setResultados] = React.useState<TResultado[]>([]);

 React.useEffect(() => {
  const usuarioLocalStorage = localStorage.getItem('resultados');
  if (usuarioLocalStorage) {
   setResultados(JSON.parse(usuarioLocalStorage));
  } else {
   setResultados([]);
  }
 }, []);

 const guardarResultado = (resultado: Omit<TResultado, 'id' | 'createAt'>) => {
  const data = [
   ...resultados.filter((r) => r.idEncuesta !== resultado.idEncuesta),
   { ...resultado, id: resultados.length + 1, createAt: new Date() },
  ];
  setResultados(data);
  localStorage.setItem('resultados', JSON.stringify(data));
 };

 const eliminarResultados = () => {
  setResultados([]);
  localStorage.removeItem('resultados');
 };

 const getResultadoPorId = (id: number): TResultado | undefined => {
  return resultados.find((resultado) => resultado.idEncuesta === id);
 };

 const getResultadoPorEncuesta = (idEncuesta: number): number => {
  return (
   resultados.find((resultado) => resultado.idEncuesta === idEncuesta)
    ?.puntaje ?? 0
  );
 };

 return (
  <ResultadoContext.Provider
   value={{
    resultados,
    guardarResultado,
    getResultadoPorId,
    eliminarResultados,
    getResultadoPorEncuesta,
   }}
  >
   {children}
  </ResultadoContext.Provider>
 );
};

export { ResultadoProvider, ResultadoContext };
