"use client";
import Navbar from "../navbar";
import About from "../about";
import Footer from "../footer";
// import Sponsors from './sponsors';

// color palette (from brightest to darkest): (118, 201, 255) (101,77,228) (61, 23, 132) (37, 22, 56) (17, 23, 27)

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <About />
        {/* <Sponsors/> */}
      </main>
      <Footer />
    </div>
  );
}
