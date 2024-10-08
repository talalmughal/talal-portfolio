import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ThemeSelector } from "./ThemeSelector";
import Image from "next/image";

const sections = [
  {
    name: "About",
    description: "Delicately tender with a slice of cheese.",
    id: "about",
  },
  {
    name: "Experience",
    description: "Our great selection from best in town.",
    id: "experience",
  },
  {
    name: "References",
    description: "Hear what our happy customers say.",
    id: "reviews",
  },
  {
    name: "Projects",
    description: "Served on a bed of delicious tech.",
    id: "projects",
  },
  {
    name: "Contact",
    description: "A superb choice to finish the day.",
    id: "contact",
  },
];

interface Props {
  secondaryColor: string;
  primaryText: string;
  secondaryText: string;
  primaryBG: string;
  secondaryBG: string;
  setPrimaryColor: (args0: string) => void;
  setSecondaryColor: (args0: string) => void;
}

export default function Menu({
  secondaryColor,
  primaryText,
  secondaryText,
  primaryBG,
  secondaryBG,
  setPrimaryColor,
  setSecondaryColor,
}: Props) {
  const [borderColor, setBorderColor] = useState("border-[#FEE715]");

  useEffect(() => {
    setBorderColor(
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
  }, [secondaryColor]);

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex focus-within:outline-none">
        <Image
          src="/img/burger.png"
          width={64}
          height={64}
          className={`p-2 w-16 h-16 rounded-full ${secondaryBG} z-20 hover:animate-pulse`}
          alt="burger"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -left-10 -top-10 z-10 mt-5 flex w-96 max-w-max px-4">
          <div
            className={`w-screen max-w-md flex flex-col gap-8 overflow-hidden rounded-xl ${secondaryBG} ${primaryText}`}
          >
            <div className="mt-9">
              <span className="ml-28 text-2xl font-medium">Burger menu</span>
            </div>

            <div className="px-4">
              {sections.map((section) => (
                <div
                  key={section.name}
                  className="group relative flex items-center rounded-lg px-4 py-3 hover:bg-gray-50"
                >
                  <button
                    className="flex flex-col gap-1"
                    onClick={() => {
                      // @ts-ignore
                      document
                        .getElementById(section.id)
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="text-lg font-semibold">
                      {section?.name}
                    </span>

                    <span
                      className={`text-base font-medium text-left ${primaryText}`}
                    >
                      {section?.description}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            <div
              className={`-mt-4 pt-4 pb-6 px-8 flex flex-col gap-3 divide-x divide-gray-900/5 rounded-b-xl border-2 ${borderColor} ${primaryBG}`}
            >
              <span className={`text-lg font-semibold ${secondaryText}`}>
                Themes
              </span>

              <div className="flex flex-row gap-5">
                <ThemeSelector
                  alt="theme1"
                  primaryColor="#00539C"
                  secondaryColor="#EEA47F"
                  themeName="blue-peach"
                  setPrimaryColor={setPrimaryColor}
                  setSecondaryColor={setSecondaryColor}
                />

                <ThemeSelector
                  alt="theme2"
                  primaryColor="#101820"
                  secondaryColor="#FEE715"
                  themeName="black-yellow"
                  setPrimaryColor={setPrimaryColor}
                  setSecondaryColor={setSecondaryColor}
                />

                <ThemeSelector
                  alt="theme3"
                  primaryColor="#2F3C7E"
                  secondaryColor="#FBEAEB"
                  themeName="blue-pink"
                  setPrimaryColor={setPrimaryColor}
                  setSecondaryColor={setSecondaryColor}
                />

                <ThemeSelector
                  alt="theme4"
                  primaryColor="#990011"
                  secondaryColor="#FCF6F5"
                  themeName="red-white"
                  setPrimaryColor={setPrimaryColor}
                  setSecondaryColor={setSecondaryColor}
                />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
