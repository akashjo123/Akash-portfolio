import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      {/* Editorial Hero Banner */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Selected Work */}
      <SelectedWork />
    </>
  );
}
