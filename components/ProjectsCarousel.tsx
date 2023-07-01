import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "@/constants/projects";

export const ProjectsCarousal = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex flex-row gap-5 mt-8 xl:mt-0">
        {projects?.map((project, i) => (
          <a
            key={i}
            href={project?.link}
            className="embla__slide"
            target="blank"
          >
            <div
              className={`${
                i === 0 && "ml-5"
              }  rounded-lg h-72 w-48 sm:h-96 sm:w-64 2xl:h-[512px] 2xl:w-96 relative`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(29, 40, 57, 0) 0%, 
                rgba(29, 40, 57, 0.49) 55.57%, #080F1B 98.32%), url(${project?.cover})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="flex flex-col gap-3 absolute bottom-0 p-6 xl:p-10">
                <span className="text-xl font-semibold">{project?.title}</span>

                <span className="text-xs font-medium">
                  {project?.description}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
