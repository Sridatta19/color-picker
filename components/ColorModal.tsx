import React from "react";
import { motion } from "framer-motion";
import { COLORS, MAPPINGS } from "../utils/constants";

const ColorModal = ({
  color,
  setColor,
}: {
  color: COLORS;
  setColor: React.Dispatch<React.SetStateAction<COLORS>>;
}) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.445, 0.05, 0.55, 0.95],
      }}
      layoutId={color}
      onClick={() => setColor("default")}
      className={`absolute inset-0 m-auto px-6 rounded-[0.875rem] w-[27rem] h-[7.25rem] focus:outline-none ${MAPPINGS[color]["bg"]} focus:ring-2 ${MAPPINGS[color]["ring"]} focus:ring-opacity-50`}
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl font-serif leading-6">
          {MAPPINGS[color]["label"]}
        </span>
        <span className="text-lg tracking-wide">
          {MAPPINGS[color]["colorCode"]}
        </span>
      </div>
    </motion.button>
  );
};

export default ColorModal;
