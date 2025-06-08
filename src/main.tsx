import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ResultadoProvider, UsuarioProvider } from './context';
import AppRoutes from './routes.tsx';

createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <BrowserRouter>
   <UsuarioProvider>
    <ResultadoProvider>
     <AppRoutes />
    </ResultadoProvider>
   </UsuarioProvider>
  </BrowserRouter>
 </StrictMode>
);
