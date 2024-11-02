// import React from "react";
// import { motion } from "framer-motion";
// import { InView } from "react-intersection-observer";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./accordion";

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     question: "What is KW Sandbox?",
//     answer:
//       "KW Sandbox is Waterloo's largest high school engineering community, providing an innovative platform for students to experiment with cutting-edge technologies and strategies in a risk-free environment.",
//   },
//   {
//     question: "How can I join KW Sandbox?",
//     answer:
//       "To join KW Sandbox, you need to be a high school student in the Kitchener-Waterloo area. Check our instagram for upcoming events and registration details.",
//   },
//   {
//     question: "What kind of activities does KW Sandbox offer?",
//     answer:
//       "KW Sandbox offers a wide range of activities including workshops on AI, robotics, and software development, hackathons, guest speaker sessions, and collaborative engineering projects.",
//   },
//   {
//     question: "Is there a cost associated with KW Sandbox events?",
//     answer:
//       "All KW Sandbox events are free for members. We are committed to keeping our activities accessible to all students.",
//   },
//   {
//     question: "Can I participate in KW Sandbox events remotely?",
//     answer:
//       "While we encourage in-person participation for the best experience, we do offer some virtual events and online resources. Check our event calendar for both in-person and online opportunities.",
//   },
// ];

// const FadeInWhenVisible: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   return (
//     <InView triggerOnce threshold={0.1}>
//       {({ inView, ref }) => (
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.div>
//       )}
//     </InView>
//   );
// };


// export default function FAQ() {
//   return (
//     <div
//       id="faq"
//       className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto py-16"
//     >
//       <FadeInWhenVisible>
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text pb-4 text-transparent bg-gradient-to-r from-[#654DE4] to-[#6549E4]">
//           Frequently Asked Questions
//         </h2>
//       </FadeInWhenVisible>
//       <Accordion type="single" collapsible className="w-full space-y-6">
//         {faqData.map((faq, index) => (
//           <FadeInWhenVisible key={index}>
//             <AccordionItem
//               value={`item-${index}`}
//               className="border border-[#6549E4] rounded-lg overflow-hidden shadow-lg shadow-[#6549E4]/20 backdrop-blur-sm bg-[#251638]/80"
//             >
//               <AccordionTrigger className="text-lg font-medium text-white hover:text-[#76C9FF] transition-all duration-300 px-8 py-6">
//                 {faq.question}
//               </AccordionTrigger>
//               <AccordionContent className="text-white bg-[#372151]/80 px-8 py-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-lg leading-relaxed"
//                 >
//                   {faq.answer}
//                 </motion.div>
//               </AccordionContent>
//             </AccordionItem>
//           </FadeInWhenVisible>
//         ))}
//       </Accordion>
//     </div>
//   );
// }
