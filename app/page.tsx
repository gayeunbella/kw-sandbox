"use client";

import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import FAQ from "./faq";
import About from "./about";
import Team from "./team";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <About />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
