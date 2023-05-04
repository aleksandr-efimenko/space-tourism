import Image from "next/image";
import backgroundImage from "~/assets/home/background-home-desktop.jpg"

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="absolute inset-0 -z-10">
        <Image src={backgroundImage} alt='background image' fill/>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">SpaceX Launches</h1>
        <p className="text-xl text-center uppercase font-bellfair">
          A list of launches from SpaceX
        </p>
      </div>
    </main>
  );
}
