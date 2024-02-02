// components/Layout.js
"use client"
import React from "react";
import "../components/styles/globals.css";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Providers from "./Providers";
import Footer from "@/components/footer/Footer";

const Layout = ({ children }) => {
  

  return (
    <Providers>
      <div className={`flex h-screen `}>
        <Sidebar  />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header  />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </Providers>
  );
};

export default Layout;
