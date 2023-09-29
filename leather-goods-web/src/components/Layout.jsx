import React from "react";
import Header from "./Header";
import BackToTopButton from "@components/BackToTopButton";
import Footer from "./Footer";
import HotlineButton from "./HotlineButton";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <HotlineButton />
      <BackToTopButton />
    </>
  );
};

export default Layout;
