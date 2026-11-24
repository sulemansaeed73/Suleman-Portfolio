import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "./MotionVariants";

export default function Reveal({
  children,
  variants = fadeInUp,
  className = "",
  style = {},
  delay = 0,
  viewport = defaultViewport,
  ...props
}) {
  const customVariants = delay
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible?.transition,
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={customVariants}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}
