import { ProjectsCarousal } from "../helper/ProjectsCarousel";
interface Props {
  primaryText: string;
  secondaryText: string;
}

export const Page6 = ({ primaryText, secondaryText }: Props) => {
  return (
    <div
      id="projects"
      className={`h-auto min-h-screen p-10 sm:p-24 w-full flex flex-col bg-gray-100 ${primaryText}`}
    >
      <span className="text-3xl font-semibold">Projects</span>

      <span className="text-base mt-4">
        Swipe or drag to see a small selection of featured projects I&#8217;ve
        worked on. Click on any to experience it yourself.
      </span>

      <div className="flex flex-col justify-center h-full w-full my-auto gap-2 relative">
        <ProjectsCarousal secondaryText={secondaryText} />
      </div>
    </div>
  );
};
