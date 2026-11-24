import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function SpinningBadge({
  text = "• FULL-STACK DEVELOPER • SOFTWARE ENGINEER ",
  size = 110,
}) {
  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Spinning Outer Text */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <path
            id="textCircle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text
          fontSize="9"
          fontWeight="bold"
          letterSpacing="2.2"
          fill="#1e90ff"
          style={{ textTransform: "uppercase" }}
        >
          <textPath href="#textCircle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>

      {/* Center Icon Circle */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 10 }}
        style={{
          width: `${size * 0.44}px`,
          height: `${size * 0.44}px`,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1e90ff, #0056b3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          boxShadow: "0 0 15px rgba(30, 144, 255, 0.6)",
          zIndex: 2,
          fontSize: `${size * 0.2}px`,
        }}
      >
        <FaCode />
      </motion.div>
    </div>
  );
}
