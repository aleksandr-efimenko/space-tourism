import BackgroundImage from "@/components/BackgroundImage";
import backgroundImage from "~/assets/technology/background-technology-desktop.jpg";

export default function technology() {
  return (
    <>
      <BackgroundImage
        backgroundImage={backgroundImage}
        alt="background image"
      />
      <main className="flex flex-col items-center justify-between p-24">
      <h1 className="flex gap-6">
            <span className="heading5 font-bold opacity-25 text-white">03</span>
            <p className="heading5 text-white">SPACE LAUNCH 101</p>
          </h1>
      </main>
    </>
  );
}
