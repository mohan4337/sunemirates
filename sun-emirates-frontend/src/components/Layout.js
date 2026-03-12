import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

const Layout = () => {
  return (
    <div>
      <Header />
      <Breadcrumb />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
