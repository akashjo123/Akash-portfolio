"use client";

import React from "react";
import { motion } from "framer-motion";

interface SignatureProps {
  name?: "akash" | "claudia";
  className?: string;
}

export default function AboutPosterSignature({
  name = "akash",
  className = "",
}: SignatureProps) {
  if (name === "claudia") {
    // Exact recreation of the "Claudia" signature from the reference poster
    return (
      <div className={`relative inline-block select-none ${className}`}>
        <svg
          viewBox="0 0 240 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-44 sm:w-56 md:w-64 h-auto -rotate-6 transform transition-transform hover:scale-105 duration-300"
          aria-label="Claudia handwritten signature"
        >
          {/* Main cursive stroke for Claudia */}
          <path
            d="M 38 68 C 30 52 35 22 55 18 C 72 15 82 28 80 44 C 76 66 50 98 28 98 C 15 98 12 85 24 64 C 36 43 54 36 68 40"
            stroke="#171717"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* 'l' ascender */}
          <path
            d="M 68 40 C 78 30 88 18 92 25 C 96 34 88 58 84 72 C 86 64 92 50 102 50 C 112 50 108 66 106 72"
            stroke="#171717"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* 'a-u' connection */}
          <path
            d="M 106 72 C 114 62 124 50 134 52 C 142 54 138 68 136 74 C 142 66 150 54 160 56 C 168 58 162 72 160 76"
            stroke="#171717"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* 'd-i-a' and flourish */}
          <path
            d="M 160 76 C 166 64 176 34 182 30 C 186 34 180 60 178 76 C 186 66 196 58 204 60 C 210 62 206 72 208 76 C 216 70 224 68 232 70"
            stroke="#171717"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Dot for i */}
          <circle cx="202" cy="46" r="2.2" fill="#171717" />
        </svg>
      </div>
    );
  }

  // Elegant bespoke cursive signature for Akash Joseph
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <motion.svg
        viewBox="0 0 280 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 sm:w-60 md:w-72 h-auto -rotate-3 transform transition-transform hover:scale-105 duration-300"
        aria-label="Akash Joseph handwritten signature"
      >
        {/* Capital 'A' with grand swooping ascender & loop */}
        <motion.path
          d="M 32 92 C 40 70 58 26 74 16 C 88 8 98 18 92 38 C 84 62 58 88 42 86 C 32 85 46 62 76 56 C 96 52 110 54 120 58"
          stroke="#171717"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0.2, opacity: 0.8 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {/* 'k' with elegant tall loop and kick */}
        <motion.path
          d="M 120 58 C 128 42 136 24 138 28 C 140 38 132 64 128 78 C 132 68 140 56 148 56 C 154 56 150 64 144 70 C 148 70 156 74 162 78"
          stroke="#171717"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0.2, opacity: 0.8 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
        />
        {/* 'a-s-h' connected flow */}
        <motion.path
          d="M 162 78 C 168 68 178 56 186 58 C 192 60 188 72 186 76 C 192 66 200 58 208 60 C 214 62 210 74 208 78 C 214 62 222 36 226 34 C 230 38 224 64 222 78 C 228 68 238 64 246 66 C 254 68 250 76 256 76"
          stroke="#171717"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0.2, opacity: 0.8 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
        />
        {/* Expressive underline flourish */}
        <motion.path
          d="M 44 102 C 90 98 160 92 230 96 C 255 97 270 94 274 88"
          stroke="#171717"
          strokeWidth="2.4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        />
      </motion.svg>
    </div>
  );
}

