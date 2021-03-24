import { useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import ColorTile from "../components/ColorTile";
import Layout from "../components/Layout";
import { COLORS, MAPPINGS } from "../utils/constants";
import ColorModal from "../components/ColorModal";

export default function Home() {
  const [selectedColor, setColor] = useState<COLORS>("default");
  return (
    <Layout>
      <div
        className={`transition-colors duration-1000 min-h-screen center ${MAPPINGS[selectedColor]["lightBg"]}`}
      >
        <AnimateSharedLayout>
          <div className="relative w-[28rem] h-32 center shadow-2xl bg-white rounded-[1.25rem]">
            <div className="flex-1 flex justify-evenly">
              <AnimatePresence>
                {selectedColor === "default" &&
                  Object.keys(MAPPINGS).map((colorKey: string) => {
                    if (colorKey === "default") return;
                    const color = colorKey as COLORS;
                    return (
                      <ColorTile
                        key={color}
                        color={color}
                        setColor={setColor}
                      />
                    );
                  })}
              </AnimatePresence>
            </div>
            {selectedColor !== "default" && (
              <ColorModal color={selectedColor} setColor={setColor} />
            )}
          </div>
        </AnimateSharedLayout>
      </div>
    </Layout>
  );
}
