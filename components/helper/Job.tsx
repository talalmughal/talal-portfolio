interface Props {
  title?: string;
  company?: string;
  level?: string;
  location?: string;
  timePeriod?: string;
  description?: string;
  projects?: any[];
  techs?: string[];
  primaryBG: string;
}

export const Job = ({
  title,
  company,
  level,
  location,
  timePeriod,
  description,
  projects,
  techs,
  primaryBG,
}: Props) => {
  return (
    <div className="bg-gray-200 p-4 2xl:p-6 fhd:p-10 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-lg">
          {title} {company && "."} {company}
        </span>

        <span className="">
          {level} {location && `(${location})`}
        </span>

        <span className="">{timePeriod}</span>
      </div>

      <span className="text-sm text-gray-600 -mt-1">{description}</span>

      {projects && projects?.length > 0 && (
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          {projects?.map((project, i) => (
            <div className="flex items-center gap-1" key={i}>
              <div className={`w-2 h-2 rounded-full ${primaryBG}`} />
              <span>{project?.name}</span>
            </div>
          ))}
        </div>
      )}

      {techs && techs?.length > 0 && (
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          {techs?.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      )}
    </div>
  );
};
