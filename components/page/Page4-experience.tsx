import { jobs } from "@/constants/jobs";
import { Job } from "../helper/Job";

export const Page4 = () => {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-2 p-2 xl:pl-0 gap-2 h-auto 1.5xl:h-screen">
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
