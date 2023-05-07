import Link from "next/link";

export default function NumberedSlider({
  itemsNumber,
  index,
  setIndex,
}: {
  itemsNumber: number;
  index: number;
  setIndex: (index: number) => void;
}) {
  return (
    <div className="flex flex-col gap-8">
      {Array.from(Array(itemsNumber).keys()).map((i) => (
        <Link
          href="#"
          key={i}
          className={`heading4 cursor-pointer hover:border-opacity-1 hover:border-white
          flex justify-center items-center w-20 h-20 border border-white border-opacity-25 rounded-full
          ${i === index ? " bg-white text-darkspace " : ""}`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
}
