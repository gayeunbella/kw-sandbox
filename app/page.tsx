"use client";

import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import FAQ from "./faq";
import About from "./about";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
