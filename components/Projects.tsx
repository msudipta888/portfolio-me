"use client";


import { projects } from "@/data";
import { PinContainer } from "./3d-pin";

const Projects = () => {
  return (
    <div className="py-16 mt-24 lg:mt-52 w-full h-full" id="projects">
      <h1 className="heading text-white">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20  mt-7">
        {projects.map((item) => (
          <div
            className="lg:min-h-[35.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[85vw] overflow-hidden h-[30vh]  mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 bg-cover"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-white text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-[14px] lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  ↗️
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;