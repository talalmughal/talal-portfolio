import { ReviewsCarousal } from "../helper/ReviewsCarousal";

interface Props {
  primaryText: string;
  secondaryBG: string;
}

export const Page5 = ({ primaryText, secondaryBG }: Props) => {
  return (
    <div className={`${secondaryBG} ${primaryText}`}>
      <div className="h-screen p-10 sm:p-24 max-w-2xl">
        <div className="flex flex-col justify-center h-full gap-2 relative">
          <ReviewsCarousal />
        </div>
      </div>
    </div>
  );
};
