/* eslint-disable @next/next/no-img-element */
import { Page1, Page2, Page3, Page4, Page5 } from "@/components";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row w-full">
      {/* page-01 intro and contact */}
      <Page1 />

      <div className="xl:w-1/2">
        {/* page-02 profile picture */}
        <Page2 />

        {/* page-03 about me */}
        <Page3 />

        {/* page-04 my experience */}
        <Page4 />

        {/* page-05 my reviews */}
        <Page5 />
      </div>
    </div>
  );
}
