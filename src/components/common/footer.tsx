import {
 mockEnlacesCategorias,
 mockEnlacesContacto,
 mockEnlacesLegales,
 mockEnlacesRapidos,
} from '@/mocks';
import { Link } from 'react-router-dom';
import Logo from './logo';
import { TypographyH6, TypographyMuted } from './typography';

function Footer() {
 return (
  <footer className="border-t border-gray-200">
   <div className="container mx-auto py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
     {/* Logo y descripción */}
     <div className="lg:col-span-2 space-y-4">
      <Logo />
      <TypographyMuted className="leading-relaxed max-w-sm">
       Plataforma líder en encuestas y evaluaciones interactivas para potenciar
       el aprendizaje y desarrollo profesional.
      </TypographyMuted>
     </div>

     {/* Enlaces rápidos */}
     <div>
      <TypographyH6 className="mb-4">Enlaces Rápidos</TypographyH6>
      <ul className="flex flex-col gap-4">
       {mockEnlacesRapidos.map((enlace) => (
        <li key={enlace.name}>
         <Link to={enlace.href}>
          <TypographyMuted className="hover:text-current transition-colors">
           {enlace.name}
          </TypographyMuted>
         </Link>
        </li>
       ))}
      </ul>
     </div>

     {/* Categorías */}
     <div>
      <TypographyH6 className="mb-4">Categorías</TypographyH6>
      <ul className="flex flex-col gap-4">
       {mockEnlacesCategorias.map((enlace) => (
        <li key={enlace.name}>
         <Link to={enlace.href}>
          <TypographyMuted className="hover:text-current transition-colors">
           {enlace.name}
          </TypographyMuted>
         </Link>
        </li>
       ))}
      </ul>
     </div>

     {/* Contacto */}
     <div>
      <TypographyH6 className="mb-4">Contacto</TypographyH6>
      <ul className="flex flex-col gap-4">
       {mockEnlacesContacto.map((enlace) => (
        <li key={enlace.name}>
         <Link to={enlace.href}>
          <TypographyMuted className="hover:text-current transition-colors flex items-center gap-2">
           {enlace.icon && <enlace.icon className="w-4 h-4 mr-2" />}
           {enlace.name}
          </TypographyMuted>
         </Link>
        </li>
       ))}
      </ul>
     </div>
    </div>

    {/* Línea divisoria */}
    <div className="border-t border-gray-200 mt-8 pt-4">
     {/* Enlaces legales */}
     <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4">
      <span className="text-sm text-gray-600">
       © Todos los derechos reservados
      </span>
      {mockEnlacesLegales.map((enlace) => (
       <Link key={enlace.name} to={enlace.href}>
        <TypographyMuted className="hover:text-current transition-colors">
         {enlace.name}
        </TypographyMuted>
       </Link>
      ))}
     </div>
    </div>
   </div>
  </footer>
 );
}

export default Footer;
