import React from "react";
import { BorderBeam } from "./magicui/border-beam";
import { useLocale, useTranslator } from "@/lib/use-translator";

const steps = [
  {
    title: { en: "The Big Bang", fr: "The Big Bang" },
    description: {
      en: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
      fr: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
    },
  },
  {
    title: { en: "The Big Bang", fr: "The Big Bang" },
    description: {
      en: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
      fr: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
    },
  },
  {
    title: { en: "The Big Bang", fr: "The Big Bang" },
    description: {
      en: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
      fr: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
    },
  },
  {
    title: { en: "The Big Bang", fr: "The Big Bang" },
    description: {
      en: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
      fr: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
    },
  },
  {
    title: { en: "The Big Bang", fr: "The Big Bang" },
    description: {
      en: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
      fr: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
    },
  },
  {
    title: { en: "The Big Bang", fr: "The Big Bang" },
    description: {
      en: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
      fr: `Website Goes Live
        Contract Gets Written
        Social Channels Are Born`,
    },
  },
];

function RoadMap() {
  const locale = useLocale();
  const tr = useTranslator();
  return (
    <div
      className="pt-10 md:pt-20 max-w-[1200px] mx-auto px-2 lg:px-0"
      id="roadmap"
    >
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <h3
          className="text-3xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          {tr("roadmapTitle")}
        </h3>
      </div>
      <div
        className="w-full grid relative scale-75 md:scale-100"
        style={{ gridTemplateColumns: "1fr 8px 1fr" }}
      >
        <div>
          {steps.map((step, index) => {
            const even = index % 2 === 0;
            return (
              <div
                key={index}
                className="relative flex items-center justify-center min-h-[80px]"
              >
                {even && (
                  <>
                    <div className="absolute right-[-4px] top-1/2 w-1/2 h-[2px] bg-white/100 transform translate-y-[-50%]"></div>
                    {/* circle  */}
                    <div className="absolute right-[-12px] top-1/2 w-6 h-6 bg-white/100 rounded-full transform translate-y-[-50%]"></div>
                    {/* line */}
                    <div className="flex flex-col items-center p-5 min-h-[80px] max-w-[350px] bg-black  relative rounded-lg shadow-md backdrop-blur-md ease-in-out">
                      <BorderBeam />
                      <h4 className="text-white text-lg font-bold text-center">
                        {step.title[locale]}
                      </h4>
                      <p className="text-white text-sm font-light text-center">
                        {step.description[locale]}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div
          style={{
            minHeight: steps.length * 100,
          }}
          className="w-2 bg-white/10 rounded-lg h-full"
        ></div>
        <div>
          {steps.map((step, index) => {
            const odd = index % 2 !== 0;
            return (
              <div
                key={index}
                className="relative flex items-center justify-center min-h-[80px]"
              >
                {odd && (
                  <>
                    <div className="absolute left-[-4px] top-1/2 w-1/2 h-[2px] bg-white/100 transform translate-y-[-50%]"></div>
                    {/* circle  */}
                    <div className="absolute left-[-12px] top-1/2 w-6 h-6 bg-white/100 rounded-full transform translate-y-[-50%]"></div>
                    {/* line */}
                    <div className="flex flex-col items-center p-5 min-h-[80px] max-w-[350px] bg-black  relative rounded-lg shadow-md backdrop-blur-md ease-in-out">
                      <BorderBeam />
                      <h4 className="text-white text-lg font-bold text-center">
                        {step.title[locale]}
                      </h4>
                      <p className="text-white text-sm font-light text-center">
                        {step.description[locale]}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
