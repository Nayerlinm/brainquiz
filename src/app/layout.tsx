import { Navbar } from '@/components/common/navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

function RootLayout() {
 return (
  <React.Fragment>
   <div className="container mx-auto px-4">
    <Navbar />
    <Outlet />
   </div>
   <Toaster position="top-center" />
  </React.Fragment>
 );
}

export default RootLayout;
