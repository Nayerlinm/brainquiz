import { Route, Routes } from 'react-router-dom';

import RootLayout from './app/layout';

import AdminLayout from './app/(admin)/adminLayout';
import DashboardPage from './app/(admin)/dashboad/page';
import EncuestaListPage from './app/encuesta/(list)/page';
import EncuestaFormPage from './app/encuesta/[id]/page';

function AppRoutes() {
 return (
  <Routes>
   <Route element={<RootLayout />}>
    <Route path="/" element={<EncuestaListPage />} />
    <Route path="/:id" element={<EncuestaFormPage />} />
    <Route element={<AdminLayout />}>
     <Route path="/admin" element={<DashboardPage />} />
    </Route>
   </Route>
  </Routes>
 );
}

export default AppRoutes;
