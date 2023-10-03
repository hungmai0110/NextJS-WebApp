import React from "react";
import Header from "./Header";
import BackToTopButton from "@components/BackToTopButton";
import Footer from "./Footer";
import HotlineButton from "./HotlineButton";

const Layout = ({ children }) => {
  const layoutStyle = {
    marginTop: "115px",
  };
  
  return (
    <>
      <Header />
      <main style={layoutStyle}>{children}</main>
      <Footer />
      <HotlineButton />
      <BackToTopButton />
    </>
  );
};

export default Layout;
