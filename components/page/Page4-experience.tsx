import { jobs } from "@/constants/jobs";
import { Job } from "../helper/Job";

interface Props {
  primaryText: string;
}

export const Page4 = ({ primaryText }: Props) => {
  return (
    <div
      className={`grid md:grid-cols-2 md:grid-rows-2 p-2 xl:px-0 gap-2 h-auto 1.5xl:h-screen ${primaryText}`}
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
        />
      ))}
    </div>
  );
};
