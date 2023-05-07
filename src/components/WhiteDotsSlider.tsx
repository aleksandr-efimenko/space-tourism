import { motion } from "framer-motion";


export default function WhiteDotsSlider({
  dotsNumber,
  index,
  setIndex,
}: {
  dotsNumber: number;
  index: number;
  setIndex: (index: number) => void;
}) {
  return (
    <div className="flex gap-6 justify-center items-center">
      {Array.from(Array(dotsNumber).keys()).map((i) => (
        <motion.div
        whileHover={{ scale: 1.5}}
          key={i}
          className={`w-[15px] h-[15px] rounded-full bg-white cursor-pointer ] ${
            index === i ? " opacity-1" : "opacity-[0.17]"
          }`}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  );
}
