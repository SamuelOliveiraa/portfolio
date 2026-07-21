"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FramerProviderProps {
  children: ReactNode;
  className?: string;
}

export default function FramerProvider({
  children,
  className = ""
}: FramerProviderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: "transform, opacity" }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}
