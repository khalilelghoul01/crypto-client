"use client";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { useTranslator } from "@/lib/use-translator";
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
      <div className="h-[200vh]"></div>
    </>
  );
}

export default page;
