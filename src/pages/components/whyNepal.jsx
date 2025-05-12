import { useEffect } from "react";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import { useRef } from "react";

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
      className="flex flex-col gap-4"
    >
      <h4 className="text-xl font-semibold text-primary-black">{title}</h4>
      <p className="text-sm leading-relaxed text-secondary-black">
        {description}
      </p>
    </motion.li>
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
    <section ref={sectionRef} className="py-24 container-margin">
      <div className="flex justify-start gap-16">
        {/* Left Image */}
        <div className="relative mt-[146px]">
          <img
            src="/doctor-patient.webp"
            className="max-w-[650px]"
            alt="Doctor and Patient"
          />
          <motion.img
            style={{ rotate }}
            className="absolute -right-[71px] -bottom-16 "
            src="/Rectangle.png"
            alt="Rotating Accent"
          />
        </div>

        {/* Right Text Content */}
        <div>
          <h2 className="text-4xl leading-tight text-primary-black max-w-[423px] font-semibold">
            Why Choose Nepal for Your Medical Journey?
          </h2>
          <ul className="space-y-10 mt-14 max-w-[400px] text-gray-700">
            {whyNepal.slice(0, 4).map((data, idx) => (
              <AnimatedPoint
                key={idx}
                title={data.title}
                description={data.description}
                delay={idx * 0.2} // adds a staggered delay
              />
            ))}
          </ul>{" "}
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between gap-10 mt-28">
        <div className="space-y-6">
          <ul className="space-y-10 max-w-[450px] text-gray-700">
            {whyNepal.slice(4, 6).map((data, idx) => (
              <AnimatedPoint
                key={idx}
                title={data.title}
                description={data.description}
                delay={idx * 0.2} // adds a staggered delay
              />
            ))}
          </ul>
        </div>

        {/* Circle image collage */}
        <div className="relative flex items-center justify-center">
          <div className="overflow-hidden max-w-[600px]">
            <img
              src="/stupa-mountain.webp"
              alt="Nepal Temple"
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
