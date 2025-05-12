import React from "react";
import Hero from "./components/hero";
import WhyNepal from "./components/whyNepal";
import WhyMediConnect from "./components/whyMediConnect";
import CommitmentToNepal from "./components/commitmentToNepal";

export default function Landing() {
  return (
    <div className="h-[1000svh]">
      <Hero />
      <WhyNepal />
      <WhyMediConnect />
      <CommitmentToNepal />
    </div>
  );
}
