import React from "react";
import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiLaravel,
  SiDjango,
  SiAmazonaws,
  SiNuxtdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

const marqueeItems = [
  { name: "React.js", icon: <DiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <DiNodejs /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "AWS Cloud", icon: <SiAmazonaws /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Nuxt.js", icon: <SiNuxtdotjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Docker", icon: <SiDocker /> },
];

export default function Marquee() {
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "18px 0",
        position: "relative",
        background: "rgba(10, 15, 30, 0.75)",
        borderTop: "1px solid rgba(30, 144, 255, 0.25)",
        borderBottom: "1px solid rgba(30, 144, 255, 0.25)",
        backdropFilter: "blur(8px)",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
        whileHover={{ animationPlayState: "paused" }}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          width: "max-content",
          gap: "24px",
          alignItems: "center",
        }}
      >
        {repeatedItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.12, y: -2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "30px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(30, 144, 255, 0.3)",
              color: "#e6f1ff",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "border-color 0.2s, background 0.2s",
            }}
          >
            <span style={{ fontSize: "1.3rem", color: "#1e90ff", display: "flex" }}>
              {item.icon}
            </span>
            <span>{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
