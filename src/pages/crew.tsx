import BackgroundImage from "@/components/BackgroundImage";
import data from "@/data/data.json";
import Image from "next/image";
import { useState } from "react";
import backgroundImage from "~/assets/crew/background-crew-desktop.jpg";

export default function crew() {
  const { crew } = data;
  const [crewMember, setCrewMember] = useState(crew[0]);

  const crewImage = crewMember.images.webp.slice(1);
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
            {crewMember.role}
          </p>
          <h3 className="heading3 text-white">
            {crewMember.name}
          </h3>
          <p className="text-paleblue">
            {crewMember.bio}
          </p>
        </div>
        <div className="">
          <Image src={crewImage} alt="crew member" width={400} height={400} />
        </div>
      </div>
    </>
  );
}
