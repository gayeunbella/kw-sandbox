import Image from "next/image";
import NextNavbar
 from "./components/navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black p-24">
      <div className="z-10 w-full items-center justify-between font-mono lg:flex top-0 left-0">

        <NextNavbar>

        </NextNavbar>
      </div>

      <div className="absolute inset-y-1/2">
        <Image
          src="/designAssets.png"
          alt="KW Sandbox"
          width={500}
          height={100}
          priority
        />
      </div>
    </main>
  );
}


