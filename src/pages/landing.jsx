import React from "react";
import Hero from "./components/hero";
import WhyNepal from "./components/whyNepal";
import WhyMediConnect from "./components/whyMediConnect";
import CommitmentToNepal from "./components/commitmentToNepal";
import ContactUs from "./components/contactUs";
import Footer from "../layouts/footer";

export default function Landing() {
  return (
    <div className="">
      <section className="pt-[64px] -mt-[64px] " id="hero">
        <Hero />
      </section>

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
