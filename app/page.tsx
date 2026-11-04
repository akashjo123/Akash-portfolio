import React from "react";
import IntroCover from "@/components/IntroCover";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      {/* 01: Architectural Cover (Shown first on website load) */}
      <IntroCover />

      {/* 02: Editorial Banner Section */}
      <Hero />

      {/* 03: About Me Section (placed directly below the banner) */}
      <About />

      {/* 04: Selected Work */}
      <SelectedWork />
    </>
  );
}
