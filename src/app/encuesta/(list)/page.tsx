import { TypographyH1, TypographyMuted } from '@/components/common/typography';
import EncuestaCard from '@/components/encuesta/encuestaCard';
import { mockEncuentas } from '@/mocks/encuestas';
import React from 'react';

function EncuestaListPage() {
 const encuestas = mockEncuentas;

 return (
  <React.Fragment>
   <div className="my-10 space-y-10">
    <div>
     <TypographyH1>Encuestas</TypographyH1>
     <TypographyMuted>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
      repudiandae!
     </TypographyMuted>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {encuestas.map((encuesta) => (
      <EncuestaCard key={encuesta.id} {...encuesta} />
     ))}
    </div>
   </div>
  </React.Fragment>
 );
}

export default EncuestaListPage;
