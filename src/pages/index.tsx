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

      <div className="flex flex-col text-white ">
        <p className="heading5">SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="heading1">Space</h1>
        <p className="body-text">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
    </main>
  );
}
