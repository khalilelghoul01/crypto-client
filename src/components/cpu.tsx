"use client";

import React, { forwardRef, use, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { useTranslator } from "@/lib/use-translator";
import { BorderBeam } from "./magicui/border-beam";

const Box = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; border?: boolean }
>(({ className, children, border = true }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative text-center z-10 flex h-12 items-center justify-center rounded-3xl w-fit bg-white/30 backdrop-blur-md p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-sm ",
        className
      )}
    >
      {children}
      {border && <BorderBeam />}
    </div>
  );
});

Box.displayName = "Circle";

export function CPU() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const tr = useTranslator();

  return (
    <div
      className="relative flex h-[500px] w-full  justify-center overflow-hidden rounded-lg  p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="grid grid-cols-3">
          <div className="col-span-3 flex items-center justify-center">
            <Box ref={div5Ref} className="">
              {tr("cpu")[1]}
            </Box>
          </div>
          <Box ref={div1Ref}>{tr("cpu")[0]}</Box>
          <div></div>
          <Box ref={div5Ref}>{tr("cpu")[2]}</Box>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Box
            className=" rounded-sm  bg-transparent border-none"
            ref={div4Ref}
            border={false}
          >
            <img src="/images/logo.png" alt="" className="w-24 h-24" />
          </Box>
        </div>
        <div className="grid grid-cols-3">
          <Box ref={div6Ref}>{tr("cpu")[3]}</Box>
          <div></div>
          <Box ref={div7Ref}>{tr("cpu")[4]}</Box>
          <div className="col-span-3 flex items-center justify-center">
            <Box ref={div2Ref}>{tr("cpu")[5]}</Box>
          </div>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-8}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
