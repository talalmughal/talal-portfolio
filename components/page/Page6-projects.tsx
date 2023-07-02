import { ProjectsCarousal } from "../helper/ProjectsCarousel";
interface Props {
  primaryText: string;
  secondaryText: string;
}

export const Page6 = ({ primaryText, secondaryText }: Props) => {
  return (
    <div
      className={`h-screen p-8 sm:p-20 flex flex-col justify-center w-full relative bg-gray-100 ${primaryText}`}
    >
      <div className="flex flex-col gap-4 absolute top-20">
        <span className="text-3xl font-semibold">Projects</span>

        <span className="text-base">
          Swipe or drag to see a small selection of featured projects I&#8217;ve
          worked on.
        </span>
      </div>

      <ProjectsCarousal secondaryText={secondaryText} />
    </div>
  );
};
