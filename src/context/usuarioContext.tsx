import type { TUsuario } from '@/models';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IUsuarioContext {
 usuario: TUsuario | null;
 existeUsuario: boolean;
 guardarUsuario: (usuario: TUsuario) => void;
 eliminarUsuario: () => void;
}

const UsuarioContext = React.createContext<IUsuarioContext>({
 usuario: null,
 existeUsuario: false,
 guardarUsuario: (usuario) => usuario,
 eliminarUsuario: () => null,
});

const UsuarioProvider = ({ children }: { children: React.ReactNode }) => {
 const [usuario, setUsuario] = React.useState<TUsuario | null>(null);
 const [existeUsuario, setExisteUsuario] = React.useState(false);
 const navigate = useNavigate();

 React.useEffect(() => {
  const usuarioLocalStorage = localStorage.getItem('usuario');
  if (usuarioLocalStorage) {
   setUsuario(JSON.parse(usuarioLocalStorage));
   setExisteUsuario(true);
  } else {
   setExisteUsuario(false);
  }
 }, []);

 const guardarUsuario = (usuario: TUsuario) => {
  localStorage.setItem('usuario', JSON.stringify(usuario));
  setUsuario(usuario);
  setExisteUsuario(true);
 };

 const eliminarUsuario = () => {
  localStorage.removeItem('usuario');
  setUsuario(null);
  setExisteUsuario(false);
  navigate('/');
 };

 return (
  <UsuarioContext.Provider
   value={{ usuario, existeUsuario, guardarUsuario, eliminarUsuario }}
  >
   {children}
  </UsuarioContext.Provider>
 );
};

export { UsuarioProvider, UsuarioContext };
