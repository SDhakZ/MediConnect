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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 text-[64px] leading-tight font-semibold"
        >
          Your Healing Journey <br /> Starts in Nepal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="max-w-xl mx-auto mb-8 text-[#F5F5F5] text-[26px] sm:text-xl"
        >
          Discover affordable, world-class treatment in Nepal —
          <br className="hidden sm:block" /> where healing meets serenity.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.4 }}
          className="px-7 py-4 font-semibold text-white transition-all bg-[#AEA800] rounded-full shadow-lg hover:bg-yellow-500"
        >
          Get A Free Quote
        </motion.button>
      </div>
    </section>
  );
}
