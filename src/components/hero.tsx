"use client";
import { useTranslator } from "@/lib/use-translator";
import React from "react";
import TypingAnimation from "./magicui/typing-animation";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./magicui/border-beam";
import { CPU } from "./cpu";

function Hero() {
  const tr = useTranslator();
  return (
    <main className="flex  flex-col items-center justify-center min-h-screen pt-40">
      <h1 className="text-2xl md:text-4xl font-bold text-center max-w-2xl">
        <span>{tr("title")[0]}</span>
      </h1>
      <TypingAnimation
        className={cn(
          "text-3xl md:text-6xl font-bold",
          // gradient text purple to pink to blue
          "bg-clip-text text-transparent bg-gradient-to-br from-[#9b5de5] via-[#f15bb5] to-[#fee440]",
          // add neon text effect
          "drop-shadow-md"
        )}
        text={tr("title")[1]}
      />
      <div
        className={cn(
          "relative grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 ",
          // center everything
          "place-items-center"
        )}
      >
        <div className="sticky h-fit">
          <CPU />
        </div>
        <div className="sticky flex gap-4 flex-col items-stretch px-3 md:px-0">
          {tr("features").map((feature, idx) => (
            <div
              className="relative bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-md fade-in ease-in-out"
              style={{
                // delay each feature by 0.2s
                animationDelay: `${idx * 0.4}s`,
              }}
            >
              <BorderBeam delay={idx * 1} />

              {feature}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center w-full scale-75">
          <iframe
            className=" w-full h-[700px]"
            allow="clipboard-write"
            // style="outline: 0; border: 0; width: 450px; height: 700px;"
            style={{ outline: 0, border: 0 }}
            src="https://pay.radom.com/presale/806ea959-b589-4964-aa76-b5549a53ebcb"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default Hero;
