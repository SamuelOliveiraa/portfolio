"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ReactNode, useState } from "react";

interface FramerProviderProps {
  children: ReactNode;
  className?: string;
}

export default function FramerProvider({
  children,
  className = ""
}: FramerProviderProps) {
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", current =>
    setIsScrollingDown(current > (scrollY.getPrevious() ?? 0))
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      transition={{ duration: isScrollingDown ? 0.6 : 0, ease: "easeOut" }}
      style={{ willChange: "transform, opacity" }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}
