/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const sections = [
  {
    name: "About",
    description: "Delicately tender with a slice of cheese.",
    href: "#",
  },
  {
    name: "Experience",
    description: "Our great selection from best in town.",
    href: "#",
  },
  {
    name: "References",
    description: "Hear what our happy customers say.",
    href: "#",
  },
  {
    name: "Projects",
    description: "Served on a bed of delicious tech.",
    href: "#",
  },
  {
    name: "Contact",
    description: "A superb choice to finish the day.",
    href: "#",
  },
];

export default function Menu() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex focus-within:outline-none">
        <img
          src="img/burger.png"
          alt="burger"
          className="p-2 w-16 h-16 rounded-full bg-gray-400 z-20 hover:animate-pulse"
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
          <div className="w-screen max-w-md flex flex-col gap-8 overflow-hidden rounded-xl bg-gray-100">
            <div className="mt-9">
              <span className="ml-28 text-2xl font-medium text-black">
                Burger menu
              </span>
            </div>

            <div className="px-4">
              {sections.map((section) => (
                <div
                  key={section.name}
                  className="group relative flex items-center rounded-lg px-4 py-3 hover:bg-gray-50"
                >
                  <a
                    href={section.href}
                    className="flex flex-col gap-1 text-black"
                  >
                    <span className="text-lg font-semibold">
                      {section?.name}
                    </span>

                    <span className="text-base font-medium text-gray-500">
                      {section?.description}
                    </span>
                  </a>
                </div>
              ))}
            </div>

            <div className="-mt-4 pt-4 pb-6 px-8 flex flex-col gap-3 divide-x divide-gray-900/5 bg-gray-300">
              <span className="text-lg font-semibold text-black">Themes</span>

              <div className="flex flex-row gap-5">
                <button onClick={() => {}}>
                  <img
                    src="img/themes/black-yellow.jpg"
                    alt="theme1"
                    className="w-8 h-8 rounded-full"
                  />
                </button>

                <button onClick={() => {}}>
                  <img
                    src="img/themes/red-white.jpg"
                    alt="theme2"
                    className="w-8 h-8 rounded-full"
                  />
                </button>

                <button onClick={() => {}}>
                  <img
                    src="img/themes/blue-peach.jpg"
                    alt="theme3"
                    className="w-8 h-8 rounded-full"
                  />
                </button>

                <button onClick={() => {}}>
                  <img
                    src="img/themes/blue-pink.jpg"
                    alt="theme4"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
