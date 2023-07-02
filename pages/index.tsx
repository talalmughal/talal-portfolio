/* eslint-disable @next/next/no-img-element */
import {
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
} from "@/components/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [primaryColor, setPrimaryColor] = useState("#00539C");
  const [secondaryColor, setSecondaryColor] = useState("#EEA47F");

  const [primaryText, setPrimaryText] = useState("text-[#00539C]");
  const [secondaryText, setSecondaryText] = useState("text-[#EEA47F]");

  const [primaryBG, setPrimaryBG] = useState("bg-[#00539C]");
  const [secondaryBG, setSecondaryBG] = useState("bg-[#EEA47F]");

  useEffect(() => {
    setPrimaryText(
      `${
        primaryColor === "#00539C"
          ? "text-[#00539C]"
          : primaryColor === "#101820"
          ? "text-[#101820]"
          : primaryColor === "#2F3C7E"
          ? "text-[#2F3C7E]"
          : primaryColor === "#990011"
          ? "text-[#990011]"
          : "text-[#00539C]"
      }`
    );

    setSecondaryText(
      `${
        secondaryColor === "#EEA47F"
          ? "text-[#EEA47F]"
          : secondaryColor === "#FEE715"
          ? "text-[#FEE715]"
          : secondaryColor === "#FCF6F5"
          ? "text-[#FCF6F5]"
          : secondaryColor === "#FBEAEB"
          ? "text-[#FBEAEB]"
          : "text-[#EEA47F]"
      }`
    );

    setPrimaryBG(
      `${
        primaryColor === "#00539C"
          ? "bg-[#00539C]"
          : primaryColor === "#101820"
          ? "bg-[#101820]"
          : primaryColor === "#2F3C7E"
          ? "bg-[#2F3C7E]"
          : primaryColor === "#990011"
          ? "bg-[#990011]"
          : "bg-[#00539C]"
      }`
    );

    setSecondaryBG(
      `${
        secondaryColor === "#EEA47F"
          ? "bg-[#EEA47F]"
          : secondaryColor === "#FEE715"
          ? "bg-[#FEE715]"
          : secondaryColor === "#FCF6F5"
          ? "bg-[#FCF6F5]"
          : secondaryColor === "#FBEAEB"
          ? "bg-[#FBEAEB]"
          : "bg-[#EEA47F]"
      }`
    );
  }, [primaryColor, secondaryColor]);

  return (
    <div className={`flex flex-col xl:flex-row w-full ${primaryBG}`}>
      {/* page-01 intro and contact */}
      <Page1
        secondaryColor={secondaryColor}
        primaryText={primaryText}
        secondaryText={secondaryText}
        primaryBG={primaryBG}
        secondaryBG={secondaryBG}
        setPrimaryColor={setPrimaryColor}
        setSecondaryColor={setSecondaryColor}
      />

      <div className="xl:w-1/2">
        {/* page-02 profile picture */}
        <Page2 />

        {/* page-03 about me */}
        <Page3 primaryText={primaryText} />

        {/* page-04 my experience */}
        <Page4 primaryText={primaryText} />

        {/* page-05 my reviews */}
        <Page5 primaryText={primaryText} secondaryBG={secondaryBG} />

        {/* page-06 my projects */}
        <Page6 primaryText={primaryText} secondaryText={secondaryText} />

        {/* page-07 contact me */}
        <Page7
          secondaryColor={secondaryColor}
          primaryText={primaryText}
          secondaryText={secondaryText}
          primaryBG={primaryBG}
        />
      </div>
    </div>
  );
}
