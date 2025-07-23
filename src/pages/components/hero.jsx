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
          className="px-16 font-inter text-center  bg-white/30 backdrop-blur-sm p-6 md:p-10 rounded-xl shadow-lg max-w-3xl py-8   mb-6 text-fluid-h1  text-[#133c5e] leading-tight font-semibold"
        >
          <p className="bg-opacity-75 gradient">
            Discover{" "}
            <span className="underline-offset-4 opacity-100 underline underline-[#133c5e]">
              Tranquility
            </span>{" "}
            and{" "}
            <span className="underline-offset-4 opacity-100 underline underline-[#133c5e]">
              Care
            </span>{" "}
            in the Heart of Nepal’s{" "}
            <span className="opacity-100 font-poppins">Himalayan Paradise</span>
          </p>
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
