"use client";

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

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
        <FAQ />
      </main>
      <Team />
      <Footer />
    </div>
  );
}
