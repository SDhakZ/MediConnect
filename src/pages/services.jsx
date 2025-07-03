import { useEffect } from "react";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { treatments } from "../../data/treatment";

import { useInView } from "react-intersection-observer";
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
  }, [controls, inView, delay]);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex flex-col gap-2 md:gap-4"
    >
      <h4 className="text-xl font-semibold text-primary-black">{title}</h4>
      <p className="text-base leading-relaxed text-secondary-black">
        {description}
      </p>
    </motion.li>
  );
};

const AnimatedCard = ({ children, delay = 0 }) => {
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
      className="relative flex flex-col gap-4 bg-[#f9f7f2] px-8 py-6 rounded-xl shadow-sm"
    >
      {children}
    </motion.div>
  );
};

export default function WhyNepal() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // triggers while this section is in view
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const whyNepal = [
    {
      title: "Globally Trained",
      description:
        "Many specialists in Nepal are trained internationally and fluent in English, ensuring you receive world-class, personalized care.",
    },
    {
      title: "Accredited Hospitals & Clinics",
      description:
        "Nepal offers internationally certified medical facilities with advanced equipment and clean, patient-friendly environments.",
    },
    {
      title: "Affordability Yet High-Quality Treatment",
      description:
        "Get the same level of expertise and technology as Western countries — at a fraction of the cost.",
    },
    {
      title: "Easy Travel & Visa Support",
      description:
        "Short medical visa process with dedicated travel coordination — we make your journey smooth from airport to hospital.",
    },
    {
      title: "Healing Meets Hospitality",
      description:
        "Stay in hand-picked hotels and wellness resorts in peaceful natural surroundings ideal for recovery.",
    },
    {
      title: "Gateway to Adventure",
      description:
        "Explore treks, yoga retreats, Ayurveda centers, or simply unwind by the lakeside — all coordinated around your care.",
    },
  ];

  return (
    <div className="pt-20 pb-16 md:pb-24 md:pt-36">
      <section ref={sectionRef} className=" container-margin">
        <div className="flex flex-col items-center justify-between gap-16 md:items-start md:flex-row">
          {/* Left Image */}
          <div className="relative">
            <div className="w-full max-w-[400px] md:max-w-[650px]">
              <img
                src="/doctor-patient.webp"
                className="w-full"
                alt="Doctor and Patient"
              />
            </div>
            <motion.img
              style={{ rotate }}
              className="absolute max-w-[80px] md:max-w-none -right-[38px] -bottom-[40px] md:-right-[71px] md:-bottom-16 "
              src="/Rectangle.png"
              alt="Rotating Accent"
            />
          </div>

          {/* Right Text Content */}
          <div>
            <h2 className="text-2xl md:text-4xl leading-tight text-primary-black max-w-[423px] font-semibold">
              Why Choose Nepal for Your Medical Journey?
            </h2>
            <ul className="space-y-9  md:space-y-10 mt-8 md:mt-10 max-w-[450px] text-gray-700">
              {whyNepal.slice(0, 4).map((data, idx) => (
                <AnimatedPoint
                  key={idx}
                  title={data.title}
                  description={data.description}
                  delay={idx * 0.2}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col-reverse items-center justify-center mt-14 gap-14 md:mt-24 md:flex-row">
          <div className="space-y-6">
            <ul className="space-y-9 md:space-y-10 max-w-[450px] text-gray-700">
              {whyNepal.slice(4, 6).map((data, idx) => (
                <AnimatedPoint
                  key={idx}
                  title={data.title}
                  description={data.description}
                  delay={idx * 0.2}
                />
              ))}
            </ul>
          </div>

          {/* Circle image collage */}
          <div className="relative flex items-center justify-center">
            <div className="overflow-hidden max-w-[500px]">
              <img
                src="/Stupa.webp"
                alt="Nepal Temple"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 container-margin">
        <h2 className="mb-16 text-3xl font-semibold text-center md:text-4xl text-primary-black">
          Medical Services in Nepal
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              {/* Popular Badge */}
              {item.highlight && (
                <div className="absolute right-0 px-3 py-1 text-xs font-medium text-white bg-yellow-400 rounded-md shadow-sm -top-3">
                  Popular Choice
                </div>
              )}

              {/* Icon & Title */}
              <div className="flex items-center gap-4">
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-12 h-12 p-1 border-2 border-[#CECBBE] rounded-md"
                />
                <h4 className="text-lg font-semibold text-primary-black">
                  {item.title}
                </h4>
              </div>

              {/* Bullets */}
              <ul className="pl-0 space-y-3 text-base list-disc list-outside text-secondary-black">
                <li>{item.bullet1}</li>
                <li>{item.bullet2}</li>
              </ul>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </div>
  );
}
