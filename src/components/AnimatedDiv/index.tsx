"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedDiv = ({ children, className }: AnimatedDivProps) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const offset = 350;
        if (top <= window.innerHeight - offset && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref, isVisible]);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isVisible]);

  return (
    <motion.div
      className={className}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
