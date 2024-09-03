/* eslint-disable @next/next/no-img-element */
import { description, headline, options } from "@/constants/contact";
import { useState } from "react";
import { ContactModal } from "../helper/Modal";
import { Contact } from "../helper/Contact";

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
    <div id="contact" className={`bg-gray-200 -mt-0.5 ${primaryText}`}>
      <div className="h-auto min-h-screen p-8 sm:p-20 flex flex-col gap-8 max-w-3xl">
        <span className="text-3xl font-semibold">Contact me</span>

        <div className="flex flex-col gap-2 mb-8">
          <span className="text-2xl leading-8 font-medium">{headline}</span>

          <span className="text-base">{description}</span>
        </div>

        {options?.map((item, idx) => (
          <Contact
            key={idx}
            index={idx}
            option={item}
            primaryBG={primaryBG}
            setIndex={setIndex}
            setShowModal={setShowModal}
          />
        ))}

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
