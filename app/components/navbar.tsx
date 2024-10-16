"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`fixed z-40 left-0 top-0 bg-gray-900 p-4 w-full transition-all duration-100 ${scrollY === 0 ? "border-none" : "border-b-[1px] border-slate-500 bg-slate-950"}`}
    >
      <div className="justify-between mx-auto flex items-center">
        <div className="flex justify-start">
          <a className="flex text-white font-bold text-lg mr-8 " href="#main">
            <Image
              src="/kwLogo.png"
              alt="logo"
              width={100}
              height={100}
              unoptimized
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-7 text-white text-base font-semibold">
          <a className="relative group" href="#our-mission">
            <div className="group-hover:cursor-pointer">About</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-purple-500 transition-all duration-300"></div>
          </a>
          <a className="relative group" href="#previous-events">
            <div className="group-hover:cursor-pointer">Events</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-purple-500 transition-all duration-300"></div>
          </a>
          <a className="relative group" href="#sponsors">
            <div className="group-hover:cursor-pointer">Sponsors</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-purple-500 transition-all duration-300"></div>
          </a>
          <a className="relative group" href="#faq">
            <div className="group-hover:cursor-pointer">FAQs</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-purple-500 transition-all duration-300"></div>
          </a>
          <a className="relative group" href="#team">
            <div className="group-hover:cursor-pointer">Team</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-purple-500 transition-all duration-300"></div>
          </a>
        </div>

        <button
          className="md:hidden text-white p-2 rounded text-3xl focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Open menu"
        >
          <span className="w-8 h-8 flex items-center justify-center">☰</span>
        </button>
      </div>

      <div
        className={`fixed z-40 h-screen text-center md:hidden bg-gray-700 text-white p-4 top-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-full h-full transition-transform duration-300`}
      >
        <button
          className="absolute top-4 right-4 text-white p-2 rounded text-3xl focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Close menu"
        >
          <span className="block w-8 h-8 items-center justify-center">✖</span>
        </button>
        <div className="mt-16 text-xl underline">
          <b>Navigation</b>
        </div>
        <a
          onClick={toggleSidebar}
          href="#our-mission"
          className="block hover:bg-blue-700 py-4 rounded mt-4"
        >
          <b>About</b>
        </a>
        <a
          onClick={toggleSidebar}
          href="#previous-events"
          className="block hover:bg-blue-700 py-4 rounded"
        >
          <b>Events</b>
        </a>
        <a
          onClick={toggleSidebar}
          href="#sponsors"
          className="block hover:bg-blue-700 py-4 rounded"
        >
          <b>Sponsors</b>
        </a>
        <a
          onClick={toggleSidebar}
          href="#faq"
          className="block hover:bg-blue-700 py-4 rounded"
        >
          <b>FAQs</b>
        </a>
        <a
          onClick={toggleSidebar}
          href="#team"
          className="block hover:bg-blue-700 py-4 rounded"
        >
          <b>Team</b>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
