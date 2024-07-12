"use client";
import { useTranslator } from "@/lib/use-translator";
import React from "react";
import TypingAnimation from "./magicui/typing-animation";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./magicui/border-beam";
import { CPU } from "./cpu";
import { ConnectWallet } from "@thirdweb-dev/react";

function Hero() {
  const tr = useTranslator();
  return (
    <main className="flex  flex-col items-center justify-center min-h-screen pt-40">
      <div className={cn("flex flex-col gap-4 items-center justify-center")}>
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
        <h1 className="text-2xl md:text-4xl font-bold text-center max-w-2xl">
          <span>{tr("title")[0]}</span>
        </h1>
        <ConnectWallet />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto place-items-center px-2 lg:px-0">
        <div className="sticky h-fit">
          <CPU />
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
      <div
        className={cn(
          "relative flex flex-col pt-5 pb-20 max-w-[1200px] mx-auto"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 px-3 lg:px-0 my-5 gap-3">
          {tr("features")
            .slice(0, 3)
            .map((feature, idx) => (
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
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_350px_350px_1fr_1fr] px-3 lg:px-0 mt-5 gap-3 mb-16">
          <div></div>
          <div></div>
          {tr("features")
            .slice(3)
            .map((feature, idx) => (
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
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
