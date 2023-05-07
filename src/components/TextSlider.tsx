import Link from "next/link";

export default function TextSlider({
  items,
  currentIndex,
  setIndex,
}: {
  items: string[];
  currentIndex: number;
  setIndex: (index: number) => void;
}) {
  return (
    <div className="flex gap-[2.1875rem] uppercase text-white nav-text">
      {items.map((item, i) => {
        return (
          <Link
            key={i}
            href="#"
            className={`${
              i === currentIndex
                ? "underline decoration-[0.1875rem] underline-offset-[0.75rem] decoration-white"
                : ""
            }`}
            onClick={() => setIndex(i)}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
