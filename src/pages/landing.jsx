import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./components/hero";
import WhyNepal from "./components/whyNepal";
import WhyMediConnect from "./components/whyMediConnect";
import CommitmentToNepal from "./components/commitmentToNepal";
import ContactUs from "./components/contactUs";
import Footer from "../layouts/footer";
import AboutNepal from "./components/aboutNepal";

export default function Landing() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove '#'
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div className="">
      <section className="pt-[64px] -mt-[64px] " id="hero">
        <Hero />
      </section>

      <section className="pt-[64px] -mt-[64px] " id="hero"></section>
      <AboutNepal />
      <section className="pt-[64px] -mt-[64px] " id="why-nepal">
        <WhyNepal />
      </section>

      <section className="pt-[64px] -mt-[64px] " id="why-mediconnect">
        <WhyMediConnect />
      </section>

      <section className="pt-[64px] -mt-[64px] " id="commitment">
        <CommitmentToNepal />
      </section>

      <section className="pt-[64px] -mt-[64px] " id="contact">
        <ContactUs />
      </section>
    </div>
  );
}
