import { jobs } from "@/constants/jobs";
import { Job } from "../helper/Job";

interface Props {
  primaryBG: string;
  primaryText: string;
}

export const Page4 = ({ primaryText, primaryBG }: Props) => {
  return (
    <div
      id="experience"
      className={`grid md:grid-cols-2 md:grid-rows-2 p-2 xl:px-0 fhd:py-4 gap-2 fhd:gap-4 h-auto min-h-screen ${primaryText}`}
    >
      {jobs?.map((job, i) => (
        <Job
          key={i}
          title={job?.title}
          company={job?.company}
          level={job?.level}
          location={job?.level}
          timePeriod={job?.timePeriod}
          description={job?.description}
          projects={job?.projects}
          techs={job?.techs}
          primaryBG={primaryBG}
        />
      ))}
    </div>
  );
};
