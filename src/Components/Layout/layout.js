import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className='layout-navbar'>
        <Navbar />
      </div>
      <div className='layout-children'>{children}</div>
      <div className='layout-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
