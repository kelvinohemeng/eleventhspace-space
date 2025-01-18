import React, { useEffect } from "react";
import { useApiData } from "../../lib/zustand/store";
import { urlForImage } from "../../lib/sanity/urlForImage";

const LoadProject = () => {
  const { fetchData, projects, isLoading } = useApiData();
  useEffect(() => {
    fetchData();
    console.log(projects);
  }, [fetchData]);

  return (
    <div>
      {isLoading ? (
        <div className="flex gap-4">
          {projects.map((project) => (
            <a href={`/projects/${project.slug?.current}`}>
              <div className="w-[400px] aspect-square bg-slate-300">
                {project.image && (
                  <picture>
                    <source
                      srcSet={urlForImage(project.image)
                        .width(220)
                        .height(225)
                        .url()}
                    />
                    <img
                      src={urlForImage(project.image)
                        .width(220)
                        .height(225)
                        .url()}
                      alt=""
                    />
                  </picture>
                )}
              </div>
              <h6>{project.name}</h6>
            </a>
          ))}
        </div>
      ) : (
        <div>Data not ready</div>
      )}
    </div>
  );
};

export default LoadProject;
