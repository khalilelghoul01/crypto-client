import { useTranslator } from "@/lib/use-translator";
import React from "react";
import { BorderBeam } from "./magicui/border-beam";

function Tokenomics() {
  const tr = useTranslator();
  return (
    <div
      id="tokenomics"
      className="max-w-[1200px] mx-auto px-2 lg:px-0 rounded-2xl bg-black relative my-10"
    >
      <BorderBeam />
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <h3
          className="text-3xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          Tokenomics
        </h3>
      </div>
      {/* 
      grid col1 col2 col3
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <h3 className="text-3xl font-bold text-white text-left md:text-left col-span-3">
          {tr("tokenomicsSubtitle")}
        </h3>
        {tr("tokenomicsTitles").map((e) => {
          return (
            <div className="relative bg-white/10 p-8 rounded-lg flex gap-2 flex-col shadow-md backdrop-blur-md ease-in-out">
              <h5 className="text-xl font-bold text-white">{e.title}</h5>
              <p className="text-base font-bold text-white">{e.description}</p>
              <BorderBeam />
            </div>
          );
        })}
        <div className="col-span-3 flex justify-end">
          <h3 className="text-3xl font-bold text-white text-right md:text-left col-span-3">
            {tr("tokenomicsFooter")}
          </h3>
        </div>
        <h3 className="text-xl font-bold text-white text-left md:text-left col-span-3">
          {tr("tokenomicsReadMore")}
        </h3>
      </div>
    </div>
  );
}

export default Tokenomics;
