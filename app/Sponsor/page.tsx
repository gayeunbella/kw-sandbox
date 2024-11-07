"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Sponsors() {
  const [showDiamond, setShowDiamond] = useState(false);
  const [showGold, setShowGold] = useState(false);
  const [showEmerald, setShowEmerald] = useState(false);
  const [showRuby, setShowRuby] = useState(false);

  const Diamond = [
    { name: "gar.png", url: "https://automationroboticsarduino.com/" },
    { name: "ac.png", url: "https://www.acceleratorcentre.com/" },
    { name: "inksmith.png", url: "https://www.inksmith.ca/" },
  ];
  const Gold = [
    { name: "deepai.png", url: "https://deepai.org/" },
    { name: "dominos.PNG", url: "https://www.dominos.ca/" },
    { name: "brave.png", url: "https://brave.com/" },
  ];
  const Emerald = [
    { name: "sidefx.png", url: "https://www.sidefx.com/" },
    { name: "vidyard.png", url: "http://vidyard.ca/" },
    { name: "snappea.png", url: "https://snappeadesign.com/" },
    { name: "imc.png", url: "https://www.imc.com/us/" },
  ];
  const Ruby = [
    { name: "bisecthosting.png", url: "https://www.bisecthosting.com/" },
    { name: "learngap.png", url: "https://www.leangap.org/" },
    { name: "postman.png", url: "https://www.postman.com/" },
    { name: "rstudio.png", url: "https://posit.co/" },
    { name: "sticker.png", url: "https://www.stickergiant.com/" },
  ];

  const toggleTier = (
    setterFunction: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    return () => setterFunction((prev) => !prev);
  };

  return (
    <section id="sponsors" className="h-4screen/5 w-full bg-gray-900">
      <h2 className="text-white text-4xl font-bold py-12 text-center">
        Sponsors
      </h2>
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleTier(setShowDiamond)}
      >
        <div className="flex-grow border-t border-gray-500 w-1/2"></div>
        <h2 className="text-xl font-semibold mx-5 text-[#65BEFF]">Diamond</h2>
        <div className="flex-grow border-t border-gray-500 w-1/2"></div>
      </div>
      {showDiamond && (
        <div className="flex flex-wrap items-center justify-center py-4">
          {Diamond.map((v, i) => (
            <a
              href={v.url}
              className="flex justify-center items-center bg-white h-24 mx-2 my-2 px-4 rounded-md"
              key={i}
            >
              <Image
                src={v.name}
                alt="logo"
                width={200}
                height={200}
                unoptimized
              />
            </a>
          ))}
        </div>
      )}
      {!showDiamond && (
        <div className="flex justify-center items-center py-4">
          <Image
            src="diamond.png"
            alt="diamond"
            width={175}
            height={175}
            unoptimized
          />
        </div>
      )}
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleTier(setShowGold)}
      >
        <div className="flex-grow border-t border-gray-500 w-1/2"></div>
        <h2 className="text-xl font-semibold mx-5 text-[#FFF965]">Gold</h2>
        <div className="flex-grow border-t border-gray-500 w-1/2"></div>
      </div>
      {showGold && (
        <div className="flex flex-wrap items-center justify-center py-4 pb-6">
          {Gold.map((v, i) => (
            <a
              href={v.url}
              className="flex justify-center items-center bg-white h-24 mx-2 my-2 px-4 rounded-md"
              key={i}
            >
              <Image
                src={v.name}
                alt="logo"
                width={175}
                height={175}
                unoptimized
              />
            </a>
          ))}
        </div>
      )}
      {!showGold && (
        <div className="flex justify-center items-center py-4">
          <Image
            src="gold.png"
            alt="gold"
            width={175}
            height={175}
            unoptimized
          />
        </div>
      )}
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleTier(setShowEmerald)}
      >
        <div className="flex-grow border-t border-gray-500 w-1/2"></div>
        <h2 className="text-xl font-semibold mx-5 text-[#65FF7E]">Emerald</h2>
        <div className="flex-grow border-t border-gray-500 w-1/2"></div>
      </div>
      {showEmerald && (
        <div className="flex flex-wrap items-center justify-center py-4 pb-6">
          {Emerald.map((v, i) => (
            <a
              href={v.url}
              className="flex justify-center items-center bg-white h-24 mx-2 my-2 px-4 rounded-md"
              key={i}
            >
              <Image
                src={v.name}
                alt="logo"
                width={150}
                height={150}
                unoptimized
              />
            </a>
          ))}
        </div>
      )}
      {!showEmerald && (
        <div className="flex justify-center items-center py-4">
          <Image
            src="emerald.png"
            alt="emerald"
            width={175}
            height={175}
            unoptimized
          />
        </div>
      )}
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleTier(setShowRuby)}
      >
        <div className="flex-grow border-t border-gray-500 w-1/2"></div>
        <h2 className="text-xl font-semibold mx-5 text-[#FF6565]">Ruby</h2>
        <div className="flex-grow border-t border-gray-500 w-1/2"></div>
      </div>
      {showRuby && (
        <div className="flex flex-wrap items-center justify-center py-4 pb-6">
          {Ruby.map((v, i) => (
            <a
              href={v.url}
              className="flex justify-center items-center bg-white h-24 mx-2 my-2 px-4 rounded-md"
              key={i}
            >
              <Image
                src={v.name}
                alt="logo"
                width={125}
                height={125}
                unoptimized
              />
            </a>
          ))}
        </div>
      )}
      {!showRuby && (
        <div className="flex justify-center items-center py-4">
          <Image
            src="ruby.png"
            alt="ruby"
            width={175}
            height={175}
            unoptimized
          />
        </div>
      )}
    </section>
  );
}
