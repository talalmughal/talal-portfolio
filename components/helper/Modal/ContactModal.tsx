import { options } from "@/constants/contact";
import { Button } from "../Button";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  setOpen: () => void;
  index: number;
  secondaryColor: string;
  primaryText: string;
  secondaryText: string;
}

export const ContactModal = ({
  open,
  setOpen,
  index,
  secondaryColor,
  primaryText,
  secondaryText,
}: Props) => {
  const [focusStyles, setFocusStyles] = useState(
    "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#EEA47F] transition duration-300"
  );

  useEffect(() => {
    setFocusStyles(
      `${
        secondaryColor === "#EEA47F"
          ? "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#EEA47F] transition duration-300"
          : secondaryColor === "#FEE715"
          ? "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FEE715] transition duration-300"
          : secondaryColor === "#FCF6F5"
          ? "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FCF6F5] transition duration-300"
          : secondaryColor === "#FBEAEB"
          ? "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FBEAEB] transition duration-300"
          : "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#EEA47F] transition duration-300"
      }`
    );
  }, [secondaryColor]);

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className={`flex flex-col gap-6 ${primaryText}`}>
        <div className="flex flex-row gap-8 items-center mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={options[index]?.icon}
            alt="icon"
            className="p-2 w-16 h-16 rounded-full bg-gray-400"
          />

          <span className="text-lg font-medium">
            {options[index]?.description}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium">Name</span>

          <input
            type="text"
            className={`rounded-lg p-4 placeholder:text-gray-400 ${focusStyles}`}
            placeholder="Tim Berners-Lee"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium">Email</span>

          <input
            type="email"
            className={`rounded-lg p-4 placeholder:text-gray-400 ${focusStyles}`}
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium">Company</span>

          <input
            type="text"
            className={`rounded-lg p-4 placeholder:text-gray-400 ${focusStyles}`}
            placeholder="Google Inc."
          />
        </div>

        {index !== 2 && (
          <>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-medium">Budget</span>

              <input
                type="text"
                className={`rounded-lg p-4 placeholder:text-gray-400 ${focusStyles}`}
                placeholder="$2,000 - $5,000"
              />
            </div>

            <div className="grid grid-flow-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-lg font-medium">Start date</span>

                <input
                  type="date"
                  className={`rounded-lg p-4 placeholder:text-gray-400 ${focusStyles}`}
                  placeholder="$2,000 - $5,000"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-medium">End date</span>

                <input
                  type="date"
                  className={`rounded-lg p-4 placeholder:text-gray-400 ${focusStyles}`}
                  placeholder="$2,000 - $5,000"
                />
              </div>
            </div>
          </>
        )}

        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium">Message</span>

          <textarea
            className={`rounded-lg p-4 placeholder:text-gray-400 ${focusStyles}`}
            placeholder="I heard you were the best!"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium">How did you find me?</span>

          <select
            className={`rounded-lg p-4 placeholder:text-gray-400 ${focusStyles}`}
            placeholder="How did you find me?"
          >
            <option>How did you find me?</option>
            <option>We have worked together before</option>
            <option>I was recommended by someone</option>
            <option>I found you through a search engine</option>
            <option>I found you on social media</option>
          </select>
        </div>

        <div className="flex mt-4 gap-4 items-center">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />

          <span className="text-gray-500 text-base font-medium">
            I agree to be a nice and kind person!
          </span>
        </div>

        <Button
          text="Send message"
          secondaryColor={secondaryColor}
          primaryText={primaryText}
          secondaryText={secondaryText}
          inverted={true}
        />
      </div>
    </Modal>
  );
};
