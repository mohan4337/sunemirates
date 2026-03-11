import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

const Layout = () => {
  return (
    <div>
      <div className="headertopbg"></div>
      <div id="SE-Container">
        <div id="frmCombian">
          <div id="frmLeftPane">&nbsp;</div>
          <div id="frmCenterPane">
            <Header />
            <div className="HP_Divider"></div>
            <Breadcrumb />
            <div className="contarea">
              <Outlet />
            </div>
            <div className="HP_Divider"></div>
            <Footer />
          </div>
          <div id="frmRightPane">&nbsp;</div>
        </div>
      </div>
      <div className="Footerbottombg"></div>
    </div>
  );
};

export default Layout;
