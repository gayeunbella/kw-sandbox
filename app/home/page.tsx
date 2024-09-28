'use client'
import Navbar from "../navbar";
import About from '../about';
// import Sponsors from './sponsors';

// color palette (from brightest to darkest): (118, 201, 255) (101,77,228) (61, 23, 132) (37, 22, 56) (17, 23, 27)

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <Navbar/>
      <div className="z-30">
        <About/>
        {/* <Sponsors/> */}
      </div>
    </main>
  );
}
