import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}

    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          SpaceX Launches
        </h1>
        <p className="text-xl text-center"> 
          A list of launches from SpaceX
        </p>
      </div>
    </main>
  );
}
