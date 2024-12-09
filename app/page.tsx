"use client";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'


import React from "react";
import Footer from "./footer";
import FAQ from "./faq";
import About from "./about";
import Team from "./team";
import Image from "next/image";
import NextNavbar from "./components/navbar";
import Navbar from "./navbar";
import Sponsor from "./Sponsor/page";
import Events from "./Events/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <Navbar />
      <About/>
      {/* <div className="flex-1 flex flex-col items-center justify-center p-4 h-screen">
        <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] px-4 inline-block">
          <span
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mr-2"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
            KW
          </span>
          <Image
            src="/designAssets.png"
            alt="KW Sandbox"
            width={600}
            height={150}
            layout="responsive"
            priority
            className="object-contain"
            />
        </div>
      </div> */}
      <Team />
      <FAQ />
      <Sponsor />
      <Events />
      <Footer />
    </main>
  );
}
