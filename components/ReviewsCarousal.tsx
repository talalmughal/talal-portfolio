import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { reviews } from "@/constants/reviews";

export const ReviewsCarousal = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (typeof window !== "undefined")
      document.onkeydown = function (event) {
        switch (event.keyCode) {
          case 37:
            console.log("Left key");
            emblaApi?.scrollPrev(true);
            break;
          case 39:
            console.log("Right key");
            emblaApi?.scrollNext(true);
            break;
        }
      };
  });

  return (
    <>
      <button
        className="absolute -left-14 w-10 h-10 rounded-full hover:bg-white/40 flex items-center justify-center"
        onClick={() => emblaApi?.scrollPrev(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 -ml-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row gap-5 mt-8 xl:mt-0">
          {reviews?.map((review, i) => (
            <div
              key={i}
              className="embla1__slide flex flex-col justify-center h-full gap-2 relative"
            >
              <span className="text-2xl leading-9 font-medium">
                {review?.comment}
              </span>

              <span className="mt-8 text-lg font-medium">{review?.person}</span>

              <div className="flex flex-row gap-2">
                {review?.Icon && <span>{review?.Icon}</span>}

                <span>{review?.origin}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute -right-14 w-10 h-10 rounded-full hover:bg-white/40 flex items-center justify-center"
        onClick={() => emblaApi?.scrollNext(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 -mr-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
};
