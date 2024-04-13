import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./Spotlight";
import { Spacer } from "@nextui-org/react";


export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden" style={{paddingTop:"8%"}}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-40 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          One Banko
        </h1>
        <Spacer x={1} />
        <h2 className="text-4xl md:text-6xl  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          {" "}
          Track your cash, make it a splash!
        </h2>
        <Spacer x={1} />
        <h2 style={{lineHeight:"1.3"}} className="text-4xl md:text-6xl  text-center bg-clip-text  bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          🚀💰📈
        </h2>
        <Spacer x={1} />
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Introducing <b>ONE BANKO </b> – your ultimate financial companion! Simplify
          your <b>money management</b> by effortlessly uploading multiple bank
          statements. Our app automatically translates your data
          into intuitive charts, providing a visual representation of your
          spending habits across different categories and months.
        </p>

      </div>
     
    </div>

    
  );
}
