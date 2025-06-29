import Footer from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

function RootLayout() {
 return (
  <React.Fragment>
   <div className="flex flex-col min-h-screen mx-auto bg-linear-to-b from-sky-200 to-neutral-50 px-4">
    <Navbar />
    <div className="container mx-auto flex-1">
     <Outlet />
    </div>
    <Footer />
   </div>
   <Toaster position="top-center" />
  </React.Fragment>
 );
}

export default RootLayout;
