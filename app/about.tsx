import React, { useState, useEffect } from "react";
import Image from "next/image";

function About() {
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
  }, []);

  return (
    <div
      id="main"
      className="w-full min-h-screen flex flex-col justify-center items-center p-8"
    >
      <div
        className="fixed inset-0 z-0"
        style={{ backgroundColor: "rgb(37, 22, 56)" }}
      >
        {/* 3 blobs */}
        <div className="absolute top-0 left-0">
          <svg
            width="627"
            height="298"
            viewBox="0 0 627 298"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hero-background-asset1"
          >
            <path
              d="M0 0.000366211V217.501C9.16667 229.834 43.1934 302.693 74 297.5C104.807 292.308 144.252 300 166 166.501C192 87.0005 314.664 79.5266 386 101.501C498 136 638.333 35.667 626 0.000366211H0Z"
              fill="rgb(168,104,240)"
              fillOpacity="0.6"
            ></path>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 flex align-item flex-end">
          <svg
            width="500"
            height="232"
            viewBox="0 0 500 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hero-background-asset1"
          >
            <path
              d="M0 232V14.5002C9.16667 2.16685 66.5 -9.5 86.5 14.5001C98.7523 29.203 136.752 64.0002 158.5 130.5C184.5 210 337.2 151.3 386 170.5C430.8 179.7 427.833 196.334 500 230H0Z"
              fill="rgb(101,77,228)"
              fillOpacity="0.6"
            ></path>
          </svg>
        </div>

        {/* the blob on the right side */}
        <div className={"absolute top-0 right-0 flex justify-content flex-end"}>
          <svg
            width="300"
            height="700"
            viewBox="0 0 300 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hero-background-asset2"
          >
            <path
              d="M500 0V230V200C500 300 400 700 230 500C200 100 50 250 50 100C50 50 -20 35 12 0H400Z"
              fill="rgb(168,104,240)"
              fillOpacity="0.6"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-white text-xl mb-2">
          <div className="inline" data-aos="fade-up" data-aos-delay={50}>
            Welcome to{" "}
            <span className="text-[rgb(168,104,240)] font-bold">
              Waterloo&apos;s largest
            </span>{" "}
            high school engineering community
          </div>
        </div>
        <h1
          className="text-5xl md:text-7xl text-[rgb(101,77,228)] font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay={150}
        >
          KW Sandbox
        </h1>
        <p
          className="text-white text-xl mb-10"
          data-aos="fade-up"
          data-aos-delay={350}
        >
          Community • Engineering • Innovation • In-person Event
        </p>

        {/* FOR LUMA SIGNUPS */}
        <a
          href="https://lu.ma/event/evt-DruWjPZMsolBAbE"
          className="z-10 border text-lg text-[rgb(168,104,240)] bg-white px-5 py-2 rounded-full shadow-md font-bold hover:bg-[rgb(168,104,240)] hover:text-white transition-all duration-300 mb-4"
          data-luma-action="checkout"
          data-luma-event-id="evt-DruWjPZMsolBAbE"
        >
          Register to Attend Our First Event!
        </a>

        <a
          href="#our-mission"
          className="z-10 border text-lg text-white bg-[rgb(168,104,240)] px-5 py-2 rounded-full shadow-md font-bold hover:bg-white hover:text-[rgb(168,104,240)] transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default About;
