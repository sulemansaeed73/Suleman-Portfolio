import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "linear-gradient(90deg, #1e90ff, #00d2ff, #7928ca)",
        transformOrigin: "0%",
        zIndex: 9999,
        boxShadow: "0 0 10px rgba(30, 144, 255, 0.7)",
      }}
    />
  );
}
