'use client';

import { ResultadoContext, UsuarioContext } from '@/context';
import React from 'react';
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
import Logo from './logo';

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
      <AvatarFallback className="uppercase bg-sky-300">
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
  <div className="w-full border-b gap-4 py-3">
   <div className="container flex items-center gap-4 mx-auto">
    <div className="mr-10">
     <Logo />
    </div>
    {userAvatar}
   </div>
  </div>
 );
}
