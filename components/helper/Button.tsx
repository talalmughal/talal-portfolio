import { useEffect, useState } from "react";

interface Props {
  text: string;
  secondaryColor: string;
  primaryText: string;
  secondaryText: string;
  inverted?: boolean;
}

export const Button = ({
  text,
  secondaryColor,
  primaryText,
  secondaryText,
  inverted,
}: Props) => {
  const [primaryBorder, setPrimaryBorder] = useState("border-[#EEA47F]");
  const [hoverStyles, setHoverStyles] = useState(
    "hover:text-[#00539C] hover:bg-[#EEA47F] transition duration-300 ease-in-out"
  );

  useEffect(() => {
    if (inverted) {
      setPrimaryBorder(
        `${
          secondaryColor === "#EEA47F"
            ? "border-[#00539C]"
            : secondaryColor === "#FEE715"
            ? "border-[#101820]"
            : secondaryColor === "#FBEAEB"
            ? "border-[#2F3C7E]"
            : secondaryColor === "#FCF6F5"
            ? "border-[#990011]"
            : "border-[#00539C]"
        }`
      );

      setHoverStyles(
        `${
          secondaryColor === "#EEA47F"
            ? "hover:text-[#EEA47F] hover:bg-[#00539C] transition duration-300 ease-in-out"
            : secondaryColor === "#FEE715"
            ? "hover:text-[#FEE715] hover:bg-[#101820] transition duration-300 ease-in-out"
            : secondaryColor === "#FCF6F5"
            ? "hover:text-[#FCF6F5] hover:bg-[#990011] transition duration-300 ease-in-out"
            : secondaryColor === "#FBEAEB"
            ? "hover:text-[#FBEAEB] hover:bg-[#2F3C7E] transition duration-300 ease-in-out"
            : "hover:text-[#EEA47F] hover:bg-[#00539C] transition duration-300 ease-in-out"
        }`
      );
    } else {
      setPrimaryBorder(
        `${
          secondaryColor === "#EEA47F"
            ? "border-[#EEA47F]"
            : secondaryColor === "#FEE715"
            ? "border-[#FEE715]"
            : secondaryColor === "#FCF6F5"
            ? "border-[#FCF6F5]"
            : secondaryColor === "#FBEAEB"
            ? "border-[#FBEAEB]"
            : "border-[#EEA47F]"
        }`
      );

      setHoverStyles(
        `${
          secondaryColor === "#EEA47F"
            ? "hover:text-[#00539C] hover:bg-[#EEA47F] transition duration-300 ease-in-out"
            : secondaryColor === "#FEE715"
            ? "hover:text-[#101820] hover:bg-[#FEE715] transition duration-300 ease-in-out"
            : secondaryColor === "#FCF6F5"
            ? "hover:text-[#990011] hover:bg-[#FCF6F5] transition duration-300 ease-in-out"
            : secondaryColor === "#FBEAEB"
            ? "hover:text-[#2F3C7E] hover:bg-[#FBEAEB] transition duration-300 ease-in-out"
            : "hover:text-[#00539C] hover:bg-[#EEA47F] transition duration-300 ease-in-out"
        }`
      );
    }
  }, [inverted, secondaryColor]);

  return (
    <div>
      <button
        className={`${
          inverted ? primaryText : secondaryText
        } border-2 ${primaryBorder} ${hoverStyles} rounded-full mt-4 py-3.5 px-8`}
      >
        <span className="text-lg font-bold">{text}</span>
      </button>
    </div>
  );
};
