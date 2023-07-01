import { description, headline, options } from "@/constants/contact";

export const Page7 = () => {
  return (
    <div className="sm:h-screen p-8 sm:p-20 flex flex-col gap-8 max-w-3xl">
      <span className="text-3xl font-semibold">Contact me</span>

      <div className="flex flex-col gap-2">
        <span className="text-2xl leading-8 font-medium">{headline}</span>

        <span className="text-gray-400 text-base">{description}</span>
      </div>

      <div className="flex flex-col mt-4 gap-8">
        {options?.map((option, i) => (
          <div key={i} className="flex flex-row gap-8 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={option?.icon}
              alt="icon"
              className="p-2 w-16 h-16 rounded-full bg-gray-400"
            />

            <span className="text-lg font-medium">{option?.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
