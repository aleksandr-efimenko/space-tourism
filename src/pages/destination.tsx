import BackgroundImage from "@/components/BackgroundImage";
import backgroundImage from "~/assets/destination/background-destination-desktop.jpg";

export default function Destination() {
  return (
    <>
      <BackgroundImage
        backgroundImage={backgroundImage}
        alt="background image"
      />
      <main className="flex flex-col items-center justify-between p-24">
      <h1 className="flex gap-6">
            <span className="heading5 font-bold opacity-25 text-white">01</span>
            <p className="heading5 text-white">Pick your destination</p>
          </h1>
      </main>
    </>
  );
}
