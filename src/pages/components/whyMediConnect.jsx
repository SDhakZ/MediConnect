import { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
const hexImages = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
];

const services = [
  {
    title: "Hospitals & Health Services",
    description:
      "We connect you with accredited hospitals and skilled doctors across specialties — ensuring top-quality care at globally recognized standards.",
  },
  {
    title: "Hotels & Hospitality",
    description:
      "Stay in carefully selected accommodations near your treatment center — from comfort stays to luxury wellness resorts.",
  },
  {
    title: "Wellness & Healing Centers",
    description:
      "Enhance your recovery with yoga, naturopathy, Ayurvedic treatments, and clean, locally sourced nutrition support.",
  },
  {
    title: "Travel & Adventure Support",
    description:
      "We help you plan your journey, including flights, visa coordination, airport pickup, and optional sightseeing or treks tailored to your health needs.",
  },
];

const AnimatedPoint = ({ title, description, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    }
  }, [inView, controls, delay]);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex flex-col gap-3"
    >
      <h4 className="text-xl font-semibold text-primary-black">{title}</h4>
      <p className="text-sm max-w-[440px] leading-relaxed text-secondary-black">
        {description}
      </p>
    </motion.li>
  );
};

export default function WhyMediConnect() {
  const whyMediconnect = [
    {
      title: "One-Door Access to All Services",
      description:
        "From medical treatment to wellness activities and travel arrangements, everything is coordinated by a dedicated officer — for a smooth, stress-free experience.",
    },
    {
      title: "International Quality Standards",
      description:
        "We adhere to globally recognized healthcare protocols, including JCI standards, with regular internal and external audits to ensure safe, high-quality services.",
    },
    {
      title: "Covered by Global Medical Insurance",
      description:
        "Our services are recognized by leading international insurers. We assist in verifying eligibility and handling documentation before you arrive.",
    },
  ];

  const starRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: starRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      className="py-12 "
      style={{
        background: "linear-gradient(to bottom, #EBF8FF 0%, white 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-[112px] gap-12 mx-auto justify-items-center container-margin md:grid-cols-2">
        {/* Text Points */}
        <div>
          <h2 className="mb-10 md:mb-20 text-3xl md:text-[48px] font-semibold leading-tight text-primary-black">
            Why <br />
            MediConnect?
          </h2>
          <div className="relative flex items-center mt-2 mb-10 md:hidden">
            <img
              src="/globe.webp"
              alt="Globe with stethoscope"
              className="w-full  max-w-[500px]"
            />

            <motion.img
              ref={starRef}
              style={{ rotate }}
              src="/star.png"
              alt="Spinning Star"
              className="absolute max-w-[60px] top-[-24px] right-[-20px]"
            />
          </div>
          <ul className="space-y-10">
            {whyMediconnect.map((point, idx) => (
              <AnimatedPoint
                key={idx}
                title={point.title}
                description={point.description}
                delay={idx * 0.2}
              />
            ))}
          </ul>
        </div>

        {/* Image + rotating star */}
        <div className="relative items-center hidden mt-40 md:flex">
          <img
            src="/globe.webp"
            alt="Globe with stethoscope"
            className="w-full  max-w-[500px]"
          />

          <motion.img
            ref={starRef}
            style={{ rotate }}
            src="/star.png"
            alt="Spinning Star"
            className="absolute  top-[-74px] right-[-74px]"
          />
        </div>
      </div>

      {/* <section className="flex flex-col gap-5 items-center justify-center py-12 bg-[#f1f0eb]">
        <div className="flex flex-col items-center justify-center gap-5 container-margin">
          <h2 className="text-xl font-semibold text-primary-black">
            About MediConnect
          </h2>
          <p className="text-lg max-w-[800px] font-medium leading-snug text-center text-secondary-black">
            MediConnect Pokhara is a private-sector organization uniting
            hospitals, hotels, wellness centers, and adventure agencies to
            create Nepal’s first integrated medical tourism ecosystem. Backed by
            public-private partnerships and strict quality monitoring, we ensure
            every visitor receives safe, comfortable, and rewarding care.
          </p>
        </div>
      </section> */}
      <section className="pt-16 md:py-24">
        <h2 className="px-10 mb-20 text-4xl font-semibold text-center text-primary-black">
          Program Sectors
        </h2>
        <div className="flex flex-col items-center gap-20 mx-auto md:flex md:flex-row container-margin">
          {/* Hex Grid */}
          <div className="max-w-[600px]">
            <img className="w-full" src="/hexagon.webp" />
          </div>
          {/* Text Column */}
          <div className="max-w-[400px] space-y-10">
            <ul className="flex flex-col gap-10">
              {services.map((item, idx) => (
                <AnimatedPoint
                  key={idx}
                  title={item.title}
                  description={item.description}
                  delay={idx * 0.2}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
