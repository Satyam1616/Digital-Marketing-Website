import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet /> {/* Renders the child components */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
