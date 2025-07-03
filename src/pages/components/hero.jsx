import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./hero.css";

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    let animationFrameId = null;

    const handleScroll = () => {
      if (animationFrameId) return; // already scheduled

      animationFrameId = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
        animationFrameId = null; // reset for next frame
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="relative h-[91vh] overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 parallax-bg will-change-transform"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full container-margin mb-6 text-fluid-h1  text-[#fff] leading-tight font-semibold"
        >
          Begin Your Journey to <br /> Health and Healing <br />
          in the Heart of Nepal
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="max-w-sm font-thin md:max-w-3xl md:leading-normal mx-auto mb-8 text-[#F5F5F5] text-lg md:text-[26px]  sm:text-xl"
        >
          Discover affordable, world-class treatment in Nepal —
          <br className="hidden sm:block" /> where healing meets serenity.
        </motion.p> */}
        {/* 
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.4 }}
          className="px-7 py-4 font-medium text-white transition-all bg-[#AEA800] rounded-full shadow-lg hover:bg-yellow-500"
        >
          Get A Free Quote
        </motion.button> */}
      </div>
    </section>
  );
}
