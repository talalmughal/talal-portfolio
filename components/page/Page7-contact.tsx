/* eslint-disable @next/next/no-img-element */
import { description, headline, options } from "@/constants/contact";
import { useState } from "react";
import { HelloModal, WorkModal } from "../helper/Modal";

export const Page7 = () => {
  const [index, setIndex] = useState<any>(null);
  const [showHelloModal, setShowHelloModal] = useState(false);
  const [showWorkModal, setShowWorkModal] = useState(false);

  return (
    <div className="sm:h-screen p-8 sm:p-20 flex flex-col gap-8 max-w-3xl">
      <span className="text-3xl font-semibold">Contact me</span>

      <div className="flex flex-col gap-2">
        <span className="text-2xl leading-8 font-medium">{headline}</span>

        <span className="text-gray-400 text-base">{description}</span>
      </div>

      <button
        className="mt-8 flex flex-row gap-8 items-center"
        onClick={() => {
          setIndex(0);
          setShowWorkModal(true);
        }}
      >
        <img
          src={options[0]?.icon}
          alt="icon"
          className="p-2 w-16 h-16 rounded-full bg-gray-400"
        />

        <span className="text-lg font-medium">{options[0]?.description}</span>
      </button>

      <button
        className="flex flex-row gap-8 items-center"
        onClick={() => {
          setIndex(1);
          setShowWorkModal(true);
        }}
      >
        <img
          src={options[1]?.icon}
          alt="icon"
          className="p-2 w-16 h-16 rounded-full bg-gray-400"
        />

        <span className="text-lg font-medium">{options[1]?.description}</span>
      </button>

      <button
        className="flex flex-row gap-8 items-center"
        onClick={() => setShowHelloModal(true)}
      >
        <img
          src={options[2]?.icon}
          alt="icon"
          className="p-2 w-16 h-16 rounded-full bg-gray-400"
        />

        <span className="text-lg font-medium">{options[2]?.description}</span>
      </button>

      {showHelloModal && (
        <HelloModal
          open={showHelloModal}
          setOpen={() => setShowHelloModal(false)}
        />
      )}

      {showWorkModal && (
        <WorkModal
          open={showWorkModal}
          setOpen={() => setShowWorkModal(false)}
          index={index}
        />
      )}
    </div>
  );
};
