import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { services } from "../data/services";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import ContactUs from "./components/contactUs";

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

const SectionGroup = ({ items, id }) => (
  <div id={id} className="mb-20 scroll-mt-28">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.items.map((item, index) => (
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
export default function ProgramSectors() {
  const { category } = useParams(); // e.g. "hospitals", "hotels", etc.
  const sectionRef = useRef(null);

  const sectionTitles = {
    hospitals: "Hospitals & Health Services",
    hotels: "Hotels & Hospitality",
    wellness: "Wellness & Healing Centers",
    adventure: "Adventure Tourism",
  };

  const selectedData = services[category];
  const title = services[category]?.title || "Program Sectors";

  if (!selectedData) {
    return (
      <div className="p-10 text-xl text-center text-gray-600">
        Invalid category. Please select a valid sector.
      </div>
    );
  }

  return (
    <div className="py-16" ref={sectionRef}>
      <section className="px-4 container-margin">
        <h2 className="relative mb-20 text-3xl font-bold text-center md:text-4xl text-primary-black">
          <span>{title}</span>
        </h2>

        <SectionGroup id={category} title={title} items={selectedData} />
      </section>
      <ContactUs />
    </div>
  );
}
