'use client';

import { BrainIcon } from 'lucide-react';

import {
 NavigationMenu,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ResultadoContext, UsuarioContext } from '@/context';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Avatar, AvatarFallback } from '../ui/avatar';
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { TypographyH4 } from './typography';

export function Navbar() {
 const { usuario, eliminarUsuario } = React.useContext(UsuarioContext);
 const { eliminarResultados } = React.useContext(ResultadoContext);

 const handleLogout = () => {
  toast.success('Nos vemos pronto!');
  eliminarUsuario();
  eliminarResultados();
 };

 // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
 const userAvatar = React.useMemo(() => {
  if (!usuario) return null;

  return (
   <DropdownMenu>
    <DropdownMenuTrigger className="ms-auto outline-0">
     <Avatar>
      <AvatarFallback className="uppercase bg-teal-200">
       <strong>{usuario.firstName.charAt(0)}</strong>
      </AvatarFallback>
     </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
     <DropdownMenuLabel>{usuario.email}</DropdownMenuLabel>
     <DropdownMenuSeparator />
     <DropdownMenuItem disabled>Profile</DropdownMenuItem>
     <DropdownMenuItem disabled>Billing</DropdownMenuItem>
     <DropdownMenuItem disabled>Team</DropdownMenuItem>
     <DropdownMenuItem onClick={handleLogout}>Cerrar Sesión</DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  );
 }, [usuario]);

 return (
  <div className="w-full flex items-center border-b gap-4 py-3">
   <Link className="flex items-center gap-2" to="/">
    <BrainIcon className="w-8 h-8" />
    <TypographyH4>BrainQuiz</TypographyH4>
   </Link>
   <NavigationMenu viewport>
    <NavigationMenuList>
     <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
       <Link to="/">Inicio</Link>
      </NavigationMenuLink>
     </NavigationMenuItem>
    </NavigationMenuList>
   </NavigationMenu>
   {userAvatar}
  </div>
 );
}
