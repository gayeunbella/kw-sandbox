"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// Import CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample event data
const events = [
  {
    id: 1,
    title: "AI x Biotech Summer Fest",
    image: "/AIBiotech.png",
    description:
      "The AI x Biotech Summer Fest was a two-day event where students experienced the latest developments in AI technology through a workshop by DeepAI, a leading startup AI company in San Francisco. In addition, students also learned how to build their own soil moisture sensor and explore electronics, sensors, and programming by competing in a hardware relay.",
  },
  {
    id: 2,
    title: "Highlander Engineering Pet Workshop!",
    image: "/PetWorkshop.jpg",
    description:
      "We invited high school students to join us for an exciting web development workshop where they learned how to build a pet-themed Pomodoro timer! Participants also had the opportunity to interact with therapy dogs, who provided a calm and supportive presence throughout the entire workshop.",
  },
  {
    id: 3,
    title: "Highlander Engineering Spooky Workshop!",
    image: "/SpookyWorkshop.jpg",
    description:
      "This thrilling workshop gave students the opportunity to use Arduino hardware and circuitry, such as motion sensors and voice modules, to create a jumpscare device!",
  },
];

export default function Events() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-screen w-full bg-gray-800 flex flex-col">
      <h1 className="text-4xl font-bold text-center py-8">Events</h1>
      <div className="flex-grow">
        <Slider {...settings} className="h-full">
          {events.map((event) => (
            <div key={event.id} className="h-full px-4">
              <div className="bg-gray-600 rounded-lg shadow-lg overflow-hidden h-full flex flex-col py-3">
                <div className="relative h-64 sm:h-80 rounded-lg">
                  <Image
                    src={event.image}
                    alt={event.title}
                    layout="fill"
                    objectFit="scale-down"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
