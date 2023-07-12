import { ReviewsCarousal } from "../helper/ReviewsCarousal";

interface Props {
  primaryText: string;
  secondaryBG: string;
}

export const Page5 = ({ primaryText, secondaryBG }: Props) => {
  return (
    <div id="reviews" className={`${secondaryBG} ${primaryText}`}>
      <div className="h-auto min-h-screen p-10 sm:p-24 max-w-2xl flex flex-col">
        <span className="text-3xl font-semibold">References</span>

        <span className="text-base mt-4">
          Swipe or use buttons to view what people say.
        </span>

        <div className="flex flex-col justify-center h-full w-full my-auto gap-2 relative">
          <ReviewsCarousal />
        </div>
      </div>
    </div>
  );
};
