import { reviews } from "@/constants/reviews";
import { useState } from "react";

export const Page5 = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="h-screen p-10 sm:p-24 max-w-2xl">
      <div className="flex flex-col justify-center h-full gap-2 relative">
        <span className="text-2xl leading-9 font-medium">
          {reviews[active]?.comment}
        </span>

        <span className="mt-8 text-lg font-medium">
          {reviews[active]?.person}
        </span>

        <div className="flex flex-row gap-2">
          {reviews[active]?.Icon && <span>{reviews[active]?.Icon}</span>}

          <span>{reviews[active]?.origin}</span>
        </div>

        <div className="flex flex-row gap-4 mt-4 absolute bottom-14 xl:bottom-20 2xl:bottom-32">
          {reviews?.map((review, i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                active === i &&
                "transition-all duration-1000 ease-in-out bg-white"
              }`}
              onClick={() => setActive(i)}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  active !== i && " bg-gray-500"
                } `}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
