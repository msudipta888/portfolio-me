import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/beam-collison";

export function Skills() {
  const skills = [
    { id: 1, img: "/js.svg", name: "JavaScript" },
    { id: 2, img: "/bs.svg", name: "Bootstrap" },
    { id: 3, img: "/react.svg", name: "React" },
    { id: 4, img: "/redux.svg", name: "Redux" },
    { id: 5, img: "/next.svg", name: "Next.js" },
    { id: 6, img: "/tal.svg", name: "Tailwind CSS" },
    { id: 7, img: "/node.svg", name: "Node.js" },
    { id: 8, img: "/mn.svg", name: "MongoDB" },
    { id: 9, img: "/post.svg", name: "PostgreSQL" },
    { id: 10, img: "/pri.svg", name: "Prisma" },
    { id: 11, img: "/api.svg", name: "API Integration" },
    { id: 12, img: "/git.svg", name: "Git" },
    { id: 13, img: "/dok.svg", name: "Docker" },
    { id: 14, img: "/re.svg", name: "Redis" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full  text-white bg-gradient-to-bl lg:mt-44" id="skills">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
        My  <span className="text-purple">Skills</span>
      </h1>
      <BackgroundBeamsWithCollision >
      <div className="w-full max-w-6xl overflow-y-auto lg:max-h-[500px] max-h-[410px] py-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-col-3 lg:gap-14 gap-8  lg:pl-32 pl-5 item-center max-w-7xl w-full">
          {skills.map((item) => (
            <div
              key={item.id}
             className="group flex flex-col items-center justify-center rounded-full w-24 h-24 p-2 transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-600 shadow-lg hover:shadow-indigo-700"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-12 w-12 mb-2 group-hover:animate-bounce "
                  />
              </div>
              <p className="mt-3 text-sm md:text-base font-semibold group-hover:text-white-100 transition-colors duration-300">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
