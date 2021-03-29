import React from "react";
import { motion } from "framer-motion";
import { COLORS, MAPPINGS } from "../utils/constants";

const ColorTile = ({
  color,
  setColor,
  selectedColor,
}: {
  color: COLORS;
  selectedColor: COLORS;
  setColor: React.Dispatch<React.SetStateAction<COLORS>>;
}) => {
  return (
    <motion.button
      layoutId={color}
      initial={false}
      animate={{ ...(color !== selectedColor && { scale: 1 }), opacity: 1 }}
      exit={{ ...(color !== selectedColor && { scale: 0.5 }), opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: [0.445, 0.05, 0.55, 0.95],
      }}
      onClick={() => setColor(color)}
      className={`focus:outline-none rounded-md w-[4.5rem] h-[4.5rem] ${MAPPINGS[color]["bg"]} hover:ring-8 ${MAPPINGS[color]["ring"]} hover:ring-opacity-25`}
    ></motion.button>
  );
};

export default ColorTile;
