import { ResultadoContext } from '@/context';
import React from 'react';
import { TypographyH1 } from '../common/typography';

function UsuarioResultadosList() {
 const { resultados } = React.useContext(ResultadoContext);
 return (
  <div>
   <TypographyH1>Resultados</TypographyH1>
   {resultados.map((resultado) => (
    <div key={resultado.id}>
     <p>{resultado.puntaje}</p>
     <p>{resultado.idEncuesta}</p>
     <p>{resultado.idUsuario}</p>
    </div>
   ))}
  </div>
 );
}

export default UsuarioResultadosList;
