import BackgroundImage from "@/components/BackgroundImage";
import WhiteDotsSlider from "@/components/WhiteDotsSlider";
import data from "@/data/data.json";
import Image from "next/image";
import { useState } from "react";
import backgroundImage from "~/assets/crew/background-crew-desktop.jpg";

export default function Crew() {
  const { crew } = data;
  const [crewMemberIndex, setCrewMemberIndex] = useState(0);

  return (
    <>
      <BackgroundImage
        backgroundImage={backgroundImage}
        alt="background image"
      />
      <div className="pt-32 flex">
        <div className="">
          <h1 className="flex gap-6">
            <span className="heading5 font-bold opacity-25 text-white">02</span>
            <p className="heading5 text-white"> Meet your crew</p>
          </h1>
          <p className="heading4 opacity-50 text-white">
            {crew[crewMemberIndex].role}
          </p>
          <h3 className="heading3 text-white">{crew[crewMemberIndex].name}</h3>
          <p className="text-paleblue">{crew[crewMemberIndex].bio}</p>
          <WhiteDotsSlider
            setIndex={setCrewMemberIndex}
            index={crewMemberIndex}
            dotsNumber={crew.length}
          />
        </div>
        <div className="">
          <Image
            src={crew[crewMemberIndex].images.webp}
            alt="crew member"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
}
