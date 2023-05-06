import Image, { StaticImageData } from "next/image";

export default function BackgroundImage({
  backgroundImage,
  alt,
}: {
  backgroundImage: StaticImageData;
  alt: string;
}) {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={backgroundImage}
        alt="background image"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        fill
      />
    </div>
  );
}
