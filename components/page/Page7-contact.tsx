/* eslint-disable @next/next/no-img-element */
import { description, headline, options } from "@/constants/contact";
import { useState } from "react";
import { ContactModal } from "../helper/Modal";

interface Props {
  secondaryColor: string;
  primaryText: string;
  secondaryText: string;
  primaryBG: string;
}

export const Page7 = ({
  secondaryColor,
  primaryText,
  secondaryText,
  primaryBG,
}: Props) => {
  const [index, setIndex] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`bg-gray-200 -mt-0.5 ${primaryText}`}>
      <div className="sm:h-screen p-8 sm:p-20 flex flex-col gap-8 max-w-3xl">
        <span className="text-3xl font-semibold">Contact me</span>

        <div className="flex flex-col gap-2">
          <span className="text-2xl leading-8 font-medium">{headline}</span>

          <span className="text-base">{description}</span>
        </div>

        <button
          className="mt-8 flex flex-row gap-8 items-center"
          onClick={() => {
            setIndex(0);
            setShowModal(true);
          }}
        >
          <img
            src={options[0]?.icon}
            alt="icon"
            className={`p-2 w-16 h-16 rounded-full ${primaryBG}`}
          />

          <span className="text-lg font-medium">{options[0]?.description}</span>
        </button>

        <button
          className="flex flex-row gap-8 items-center"
          onClick={() => {
            setIndex(1);
            setShowModal(true);
          }}
        >
          <img
            src={options[1]?.icon}
            alt="icon"
            className={`p-2 w-16 h-16 rounded-full ${primaryBG}`}
          />

          <span className="text-lg font-medium">{options[1]?.description}</span>
        </button>

        <button
          className="flex flex-row gap-8 items-center"
          onClick={() => {
            setIndex(2);
            setShowModal(true);
          }}
        >
          <img
            src={options[2]?.icon}
            alt="icon"
            className={`p-2 w-16 h-16 rounded-full ${primaryBG}`}
          />

          <span className="text-lg font-medium">{options[2]?.description}</span>
        </button>

        {showModal && (
          <ContactModal
            open={showModal}
            setOpen={() => setShowModal(false)}
            index={index}
            secondaryColor={secondaryColor}
            primaryText={primaryText}
            secondaryText={secondaryText}
          />
        )}
      </div>
    </div>
  );
};
