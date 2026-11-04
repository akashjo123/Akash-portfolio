import React from "react";
import IntroCover from "@/components/IntroCover";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      {/* 01: Architectural Cover (Shown first on website load) */}
      <IntroCover />

      {/* 02: Editorial Banner Section (Revealed on scroll with animation) */}
      <Hero />

      {/* 03: Selected Work */}
      <SelectedWork />

      {/* 04: About Me Section */}
      <About />
    </>
  );
}
