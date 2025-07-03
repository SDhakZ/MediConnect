import { useEffect, useRef } from "react";
import { useScroll, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "../data/services";
import { useLocation } from "react-router-dom";

const AnimatedCard = ({ children, delay = 0 }) => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="relative flex flex-col gap-4 bg-[#e1ebdd] px-9 py-6 rounded-xl shadow-sm"
    >
      {children}
    </motion.div>
  );
};

const SectionGroup = ({ title, items, id }) => (
  <div id={id} className="mb-20 scroll-mt-28">
    <h3 className="mb-10 text-2xl font-semibold text-left text-primary-black md:text-3xl">
      {title}
    </h3>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <AnimatedCard key={item.id} delay={index * 0.1}>
          {/* Popular Badge */}
          {item.highlight && (
            <div className="absolute right-0 px-3 py-1 text-xs font-medium text-white bg-[#7dbe65] rounded-md shadow-sm -top-3">
              Popular Choice
            </div>
          )}

          {/* Icon & Title */}
          <div className="flex items-center gap-4">
            <img
              src={item.icon}
              alt={`${item.title} Icon`}
              className="w-12 h-12 p-1 rounded-md "
            />
            <h4 className="text-lg font-semibold text-primary-black">
              {item.title}
            </h4>
          </div>

          {/* Bullets */}
          <ul className="pl-0 space-y-3 text-base list-outside text-secondary-black">
            <li>{item.description}</li>
          </ul>
        </AnimatedCard>
      ))}
    </div>
  </div>
);

export default function Services() {
  const sectionRef = useRef(null);

  return (
    <div className="py-16">
      <section className="px-4 container-margin" ref={sectionRef}>
        <h2 className="relative mb-10 text-3xl font-bold text-center md:text-4xl text-primary-black">
          Our{" "}
          <span className="underline underline-offset-8 decoration-[#7dbe65]">
            Services
          </span>
        </h2>

        <SectionGroup
          id="hospitals"
          title="Hospitals & Health Services"
          items={services.hospitals}
        />
        <SectionGroup
          id="hotels"
          title="Hotels & Hospitality"
          items={services.hotels}
        />
        <SectionGroup
          id="healing"
          title="Wellness & Healing Centers"
          items={services.healingCenters}
        />
        <SectionGroup
          id="adventure"
          title="Adventure Tourism"
          items={services.adventure}
        />
      </section>
    </div>
  );
}
