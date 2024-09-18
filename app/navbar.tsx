import React, { useState, useEffect } from 'react';
import Image from "next/image";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
      <nav className={`fixed z-40 left-0 top-0 p-4 w-full transition-all duration-100 ${scrollY === 0 ? "border-none" : "border-b-[1px] border-slate-500 bg-slate-950"}`}> {/* style = {{backgroundColor: "rgb(101,77,228)"}} */}
        <div className="max-w-6xl mx-auto space-x-10 flex items-center justify-between">
          <div>
            <a className="flex items-center text-white font-bold text-lg" href="#main">
              <Image
                src="/logo.png"
                alt="logo"
                width={60}
                height={60}
                unoptimized
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-7 text-white text-base font-semibold">
            <a className="relative group" href="#about">
              <div className="group-hover:cursor-pointer">About</div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-white transition-all duration-300"></div>
            </a>
            <a className="relative group" href="#previous-events">
              <div className="group-hover:cursor-pointer">Events</div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-white transition-all duration-300"></div>
            </a>
            <a className="relative group" href="#sponsors">
              <div className="group-hover:cursor-pointer">Sponsors</div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-white transition-all duration-300"></div>
            </a>
            <a className="relative group" href="#faq">
              <div className="group-hover:cursor-pointer">FAQs</div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-white transition-all duration-300"></div>
            </a>
            <a className="relative group" href="#team">
              <div className="group-hover:cursor-pointer">Team</div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-white transition-all duration-300"></div>
            </a>
          </div>
          <div className="p-4 hidden md:flex space-x-3">
            <div className="flex justify-between space-x-5 px-2 py-1 rounded-sm">
              <a href="https://www.instagram.com/highlanderengineering/">
                <Image
                  src="/instagram.png"
                  width={30}
                  height={30}
                  alt="instagram"
                  unoptimized
                />
              </a>
              <a href="https://www.linkedin.com/company/highlander-engineering">
                <Image
                  src="/linkedin.png"
                  width={30}
                  height={30}
                  alt="linkedin"
                  unoptimized
                />
              </a>
              <a href="https://x.com/HighlanderEng">
                <Image
                  src="/x.png"
                  width={30}
                  height={30}
                  alt="x"
                  unoptimized
                />
              </a>
            </div>
            <a href="https://drive.google.com/file/d/1_obaL-fZBsIYEoNH27RIvx_z9oRKUWIm/view" className="bg-gray-100 text-[#11171b] font-semibold px-4 py-2 rounded-sm">
              Sponsor
            </a>

          </div>
          <button
            className="md:hidden text-white px-2 py-1 rounded"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>
        </div>
      {/* Mobile sidebar toggle button */}

      {/* Mobile sidebar */}
      <div
        className={`fixed z-40 left-0 top-0 h-screen text-center md:hidden bg-gray-700 text-white p-4 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full' // Slide-in effect
        } w-full h-full transition-transform duration-300`}
      >
        <button
          className="absolute top-4 right-4 text-white px-2 py-1 rounded"
          onClick={toggleSidebar}
        >
          ✖
        </button>
        <div className="mt-16 text-xl underline"><b>Navigation</b></div>
        <a onClick={toggleSidebar} href="#our-mission" className="block hover:bg-blue-700 py-4 rounded mt-4">
          <b>About</b>
        </a>
        <a onClick={toggleSidebar} href="#previous-events" className="block hover:bg-blue-700 py-4 rounded">
          <b>Events</b>
        </a>
        <a onClick={toggleSidebar} href="#sponsors" className="block hover:bg-blue-700 py-4 rounded">
          <b>Sponsors</b>
        </a>
        <a onClick={toggleSidebar} href="#faq" className="block hover:bg-blue-700 py-4 rounded">
          <b>FAQs</b>
        </a>
        <a onClick={toggleSidebar} href="#team" className="block hover:bg-blue-700 py-4 rounded">
          <b>Team</b>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;