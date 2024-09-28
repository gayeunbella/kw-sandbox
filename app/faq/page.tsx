"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/accordion";
import { Loader2 } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is KW Sandbox?",
    answer:
      "KW Sandbox is Waterloo's largest high school engineering community, providing an innovative platform for students to experiment with cutting-edge technologies and strategies in a risk-free environment.",
  },
  {
    question: "How can I join KW Sandbox?",
    answer:
      "To join KW Sandbox, you need to be a high school student in the Kitchener-Waterloo area. Check our instagram for upcoming events and registration details.",
  },
  {
    question: "What kind of activities does KW Sandbox offer?",
    answer:
      "KW Sandbox offers a wide range of activities including workshops on AI, robotics, and software development, hackathons, guest speaker sessions, and collaborative engineering projects.",
  },
  {
    question: "Is there a cost associated with KW Sandbox events?",
    answer:
      "All KW Sandbox events are free for members. We are committed to keeping our activities accessible to all students.",
  },
  {
    question: "Can I participate in KW Sandbox events remotely?",
    answer:
      "While we encourage in-person participation for the best experience, we do offer some virtual events and online resources. Check our event calendar for both in-person and online opportunities.",
  },
];

export default function FAQPage() {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full relative min-h-screen flex flex-col justify-center items-center p-8 overflow-hidden">
      <div
        className="fixed w-full min-h-screen flex flex-col justify-center items-center p-8"
        style={{ backgroundColor: "rgb(37, 22, 56)" }}
      >
        {/* Background blobs */}
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

        <div className="absolute top-0 right-0 flex justify-content flex-end">
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

        <Navbar />
        <div className="z-30 w-full max-w-4xl px-4 py-24">
          <AnimatePresence>
            {isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-[60vh]"
              >
                <Loader2 className="h-16 w-16 animate-spin text-[#76C9FF]" />
                <p className="mt-4 text-lg font-medium text-[#76C9FF]">
                  Loading FAQs...
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <h1
                  className="text-5xl md:text-7xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#76C9FF] to-[#6549E4]"
                >Frequently Asked Questions</h1>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-6"
                >
                  {faqData.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className="border border-[#6549E4] rounded-lg overflow-hidden shadow-lg shadow-[#6549E4]/20"
                      >
                        <AccordionTrigger className="text-lg font-medium text-white hover:text-[#76C9FF] transition-all duration-300 px-8 py-6 bg-[#251638]">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white bg-[#372151] px-8 py-6">
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-lg leading-relaxed"
                          >
                            {faq.answer}
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
