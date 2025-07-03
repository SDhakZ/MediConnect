import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useRef } from "react";
const AnimatedCard = ({ icon, title, description, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-5 hover:bg-[#E1EBDD] cursor-default transition-all bg-white border-[#A8BCA1] border-2 shadow-sm rounded-xl hover:shadow-md"
    >
      <div className="mb-2 text-xl">{icon}</div>
      <h4 className="mb-1 text-lg font-semibold text-primary-black">{title}</h4>
      <p className="text-sm leading-relaxed text-secondary-black">
        {description}
      </p>
    </motion.div>
  );
};

export default function CommitmentToNepal() {
  const points = [
    {
      title: "Community Development",
      description:
        "We collaborate with rural health centers, local tourism businesses, and wellness practitioners to uplift communities across Gandaki Province.",
      icon: "🤝",
    },
    {
      title: "Climate-Positive Tourism",
      description:
        "We promote green practices through eco-friendly recovery lodges, low-impact travel plans, and support for herbal agriculture.",
      icon: "🌿",
    },
    {
      title: "Income Generation",
      description:
        "By creating employment in healthcare, hospitality, and eco-tourism, we boost local livelihoods and support small business networks.",
      icon: "💼",
    },
    {
      title: "Integrated Medical Excellence",
      description:
        "We blend modern allopathic care with Nepal’s wellness traditions, offering advanced treatments in a culturally rooted, supportive environment.",
      icon: "🏥",
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
      className="py-16 md:py-24 bg-gradient-to-b w-full flex justify-center from-[#E1EBDD] to-white"
      id="commitment"
    >
      <div className="max-w-screen-2xl">
        {/* Left image + text */}
        <div className="flex flex-col items-center gap-20 md:flex-row">
          <div className="hidden md:block overflow-hidden rounded-xl w-full max-w-[400px] md:max-w-[790px]">
            <img src="/hero.webp" alt="Lake & Mountain" className="w-full" />
          </div>

          <div className="flex flex-col items-center gap-2 px-10 md:items-start md:px-0">
            <h2 className="mb-3 text-3xl text-center md:text-left md:text-[48px] leading-tight  md:max-w-[480px] font-semibold text-primary-black">
              Beyond Healthcare: Our Commitment to Nepal
            </h2>
            <div className="mt-6 md:hidden w-full  md:max-w-[790px]">
              <img src="/hero.webp" alt="Lake & Mountain" className="w-full" />
            </div>
            <p className="mt-6 text-xl leading-relaxed text-center md:text-left md:mt-2 md:max-w-lg text-secondary-black">
              We promote green practices through eco-friendly recovery lodges,
              low-impact travel plans, and support for herbal agriculture.
            </p>
          </div>
        </div>

        {/*  Cards */}

        <div className="grid px-10 md:grid-cols-[1fr_1fr] mt-16 md:mt-24 lg:grid-cols-[1fr_2fr] gap-6 ">
          {/* Blue Feature Card */}
          <div className="bg-[#dce9d7] shadow-md flex flex-col overflow-hidden px-6 py-8 rounded-xl relative h-full">
            <h4 className="mb-2 text-3xl font-semibold text-primary-black">
              Let Your Recovery Take You Further
            </h4>
            <p className="mt-6 mb-4 text-secondary-black">
              Share your needs — we’ll match you with the right treatment, plan,
              and travel support.
            </p>
            <a
              href="#contact"
              className="mt-auto text-[#657660] font-medium py-4 border-2 border-[#657660] rounded-full w-full max-w-[170px] flex items-center justify-center"
            >
              Contact Us
            </a>
            <motion.img
              ref={starRef}
              style={{ rotate }}
              src="/star-white.png"
              alt="Spinning Star"
              className="absolute w-[180px]  bottom-[-64px] right-[-54px]"
            />
          </div>

          {/* Grid of 4 Animated Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((point, idx) => (
              <AnimatedCard
                key={idx}
                title={point.title}
                description={point.description}
                icon={point.icon}
                delay={0.2 + idx * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
