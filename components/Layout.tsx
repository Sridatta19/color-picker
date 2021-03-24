import React, { ReactNode } from "react";
import Head from "next/head";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Color Picker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

interface LayoutProps {
  children: ReactNode;
}

export default Layout;
