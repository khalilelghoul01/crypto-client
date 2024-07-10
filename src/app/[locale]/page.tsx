"use client";

import BgSVG from "@/components/bg-svg";
import Hero from "@/components/hero";
import HowToBuy from "@/components/howToBuy";
import LogoMarquee from "@/components/logomarquee";
import MarqueeGames from "@/components/MarqueeGames";
import Navbar from "@/components/navbar";
import TextImageSection from "@/components/pargraphText";
import Qna from "@/components/Qna";
import QnaSection from "@/components/QnaSection";
import TextImagesSection from "@/components/textImagesSection";
import { inter } from "@/fonts";
import { useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";
import React from "react";

function page() {
  const tr = useTranslator();
  return (
    <>
      <BgSVG />
      <Navbar />
      {/* 
      2 screen h div
      */}
      <Hero />
      <LogoMarquee />
      <TextImagesSection />
      <MarqueeGames />
      <HowToBuy />
      <QnaSection />
      <div className="h-[200vh]"></div>
    </>
  );
}

export default page;
