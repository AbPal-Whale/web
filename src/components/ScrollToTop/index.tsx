"use client";

import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@radix-ui/react-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 100vh
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 flex justify-center items-center p-4 bg-gray-800 text-white rounded-full focus:outline-none hover:bg-gray-700"
        >
          <ChevronUpIcon />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
