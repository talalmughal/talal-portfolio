import { ProjectsCarousal } from "../helper/ProjectsCarousel";

export const Page6 = () => {
  return (
    <div className="h-screen p-8 sm:p-20 flex flex-col justify-center w-full relative">
      <div className="flex flex-col gap-4 absolute top-20">
        <span className="text-3xl font-semibold">Projects</span>

        <span className="text-gray-400 text-base">
          Swipe or drag to see a small selection of featured projects I&#8217;ve
          worked on.
        </span>
      </div>

      <ProjectsCarousal />
    </div>
  );
};
