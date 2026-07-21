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

  // Monitora a direção do scroll em tempo real
  useMotionValueEvent(scrollY, "change", current => {
    const previous = scrollY.getPrevious() ?? 0;
    // Se o scroll atual for maior que o anterior, o usuário está DESCENDO
    setIsScrollingDown(current > previous);
  });
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
