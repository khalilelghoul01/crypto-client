"use client";

import Hero from "@/components/hero";
import LogoMarquee from "@/components/logomarquee";
import Navbar from "@/components/navbar";
import TextImageSection from "@/components/pargraphText";
import { inter } from "@/fonts";
import { useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";
import React from "react";

function page() {
  const tr = useTranslator();
  return (
    <>
      <Navbar />
      {/* 
      2 screen h div
      */}
      <Hero />
      <LogoMarquee />
      <TextImageSection
        images={[
          "/images/carosel/P (1).png",
          "/images/carosel/P (2).png",
          "/images/carosel/P (3).png",
          "/images/carosel/P (4).png",
        ]}
        invert={false}
      >
        <div className="flex flex-col justify-center  gap-4 p-5">
          <div className="action-btn w-fit py-2 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
            <span
              // text gradient text clip
              className="text-lg md:text-xl font-semibold text-balance"
              style={{
                background:
                  "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {tr("section1")("head")}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            {tr("section1")("title")}
          </h2>
          <p
            className={cn(
              "text-base md:text-lg leading-7 text-balance",
              inter.className
            )}
          >
            {tr("section1")("description").map((value, idx) => (
              <span key={idx}>
                {value}
                {idx != tr("section1")("description").length - 1 && <br />}
              </span>
            ))}
          </p>
          <button className="action-btn w-fit p-1 border rounded-2xl backdrop-blur-md border-gray-100/20">
            <span
              className="rounded-xl p-2 text-white font-bold text-lg"
              style={{
                background:
                  "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",
              }}
            >
              {tr("section1")("action")}
            </span>
          </button>
        </div>
      </TextImageSection>
      <div className="h-[200vh]"></div>
    </>
  );
}

export default page;
