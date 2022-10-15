import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { Header } from './Header/Header';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div >
      <Header  />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};