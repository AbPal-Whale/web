"use client";

import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import { motion, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  background?: string;
  className?: string;
  padding?: string;
  appearOnScroll?: boolean;
}

const SectionWrapper = ({
  children,
  background,
  className,
  padding,
  appearOnScroll = false,
}: Props) => {
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
    <>
      {appearOnScroll ? (
        <motion.section
          className={background}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          <div
            className={cx(
              "w-full max-w-[1480px] m-auto md:px-8 px-2 overflow-hidden",
              padding ? padding : "lg:py-36 md:py-28 py-20",
              className
            )}
          >
            {children}
          </div>
        </motion.section>
      ) : (
        <section className={background}>
          <div
            className={cx(
              "w-full max-w-[1480px] m-auto md:px-8 px-2 overflow-hidden",
              padding ? padding : "lg:py-36 md:py-28 py-20",
              className
            )}
          >
            {children}
          </div>
        </section>
      )}
    </>
  );
};

export default SectionWrapper;
