"use client";
import React from 'react'
import { LayoutGrid } from './ui/aboutt-ui'

const About = () => {

const SkeletonOne = () => {

  return (
    <div className="p-6  rounded-lg shadow-md">
    <p className="font-bold font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white  pt-5">
      Passionate Full-Stack <span className="text-purple-300">Developer</span>
    </p>
    <p className="font-mono text-lg text-gray-300 mt-2"></p>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl my-4 max-w-lg leading-relaxed text-neutral-200">
      I thrive on crafting{" "}
      <span className="text-pink-300 font-semibold">
        innovative, scalable, and user-centric solutions
      </span>. From{" "}
      <span className="text-purple-400">frontend finesse</span> to{" "}
      <span className="text-indigo-300">backend brilliance</span>, I bring{" "}
      <span className="text-blue-300">ideas to life</span>.
    </p>
  </div>
  
  );
};
 
const SkeletonTwo = () => {
  return (
    <div className="p-6 rounded-lg shadow-md">
  <p className="font-bold font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl  text-white pt-3">
    Flexible <span className="text-white">Communicator</span>
  </p>
  <p className="font-mono text-base text-gray-300"></p>
  <p className="font-light text-sm sm:text-base md:text-lg lg:text-xl my-4 max-w-lg leading-relaxed text-neutral-200">
    I ensure <span className="text-purple-300 font-semibold">seamless collaboration</span> 
    across global time zones, enabling effective communication with{" "}
    <span className="text-white-200">teams and clients worldwide</span>.
  </p>
</div>

  );
};
const SkeletonSix = () => {
  return (
    <div>
    <p className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 pt-3 font-extrabold tracking-tight">
      Competitive {" "}
      <span className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
        Programmer
      </span>
    </p>
    <p className="font-mono text-base text-white" />
    <p className="font-code text-sm sm:text-base md:text-lg lg:text-xl my-4 max-w-lg text-emerald-200 leading-relaxed">
      Love to solve DSA problems including easy, medium and hard level of problems and participate in various coding contests. solve {" "}
      <span className="text-cyan-300 font-semibold">200+ Leetcode</span> and {" "}
      <span className="text-fuchsia-300 font-semibold">GFG problems</span>.
    </p>
  </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="p-6  shadow-lg">
    <p className="font-extrabold font-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white pt-3">
      Tech <span className="text-indigo-500">Enthusiast</span>
    </p>
    <p className="font-mono text-sm sm:text-base md:text-lg lg:text-xl mt-2 text-gray-300">
      Always exploring, always innovating.
    </p>
    <p className="font-light font-sans text-base sm:text-lg md:text-xl lg:text-2xl my-4 max-w-xl text-gray-400 leading-relaxed">
      I am always eager to learn new technologies and explore the tech world. I love contributing to the tech community and applying cutting-edge technologies to solve real-world problems and make projects more efficient.
    </p>
  </div>
  
  );
};
const SkeletonFour = () => {
  return (
    <div className="p-6  rounded-lg shadow-lg">
    <p className="font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl pt-3">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
        Collaboration{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
        Focused
      </span>
    </p>
    <p className="font-light text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 leading-relaxed">
      <span className="text-amber-300">I prioritize</span>{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 font-semibold">
        client collaboration
      </span>, fostering{" "}
      <span className="text-rose-300">open communication</span> to deliver{" "}
      <span className="text-orange-300">solutions</span> that meet{" "}
      <span className="text-amber-400">expectations</span> and add value.
    </p>
  </div>
  
  );
};

const SkeletonFive = () => {
  return (
    <div className="p-6  rounded-lg shadow-md">
    <p className="font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl pt-3">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
        Future{" "}
      </span>
      <span className="text-white">
        Innovator
      </span>
    </p>
    <p className="font-light text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 leading-relaxed">
      <span className="text-indigo-300">Beyond learning</span>, I aspire to{" "}
      <span className="text-sky-300 font-semibold">pioneer</span> and{" "}
      <span className="text-purple-300 font-semibold">implement</span> new{" "}
      technologies,{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
        contributing meaningfully
      </span>{" "}
      to the tech ecosystem.
    </p>
  </div>
  
  );
};


   const Cards = [
    
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:      "https://static.vecteezy.com/system/resources/previews/021/192/395/non_2x/full-stack-development-structure-full-stack-mind-map-programming-coding-developer-website-application-illustration-vector.jpg",

    },
    {
      id: 2,
      content: <SkeletonTwo/>,
      className: "col-span-1",
      thumbnail:       "https://cbx-prod.b-cdn.net/COLOURBOX9508663.jpg?width=800&height=800&quality=70",

    },
    {
      id: 6,
      content: <SkeletonSix/>,
      className: "md:col-span-1",
      thumbnail:       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn3tNRbMr1ZnqbWne_dJtqMnOB4JuukkToQ&s",

    },
    {
      id: 3,
      content: <SkeletonThree/>,
      className: "md:col-span-1",
      thumbnail:       "https://market-resized.envatousercontent.com/previews/files/461861673/preview-graphicriver.jpg?w=590&h=590&cf_fit=crop&crop=top&format=auto&q=85&s=ca5c8d994f3225b5ef62452fca4f8409769e335902ab8a9daf36b9600a699fbd",

    },
    {
      id: 4,
      content: <SkeletonFour/>,

      className: "col-span-1",
      thumbnail:       "https://www.creatopy.com/blog/wp-content/uploads/2020/11/collaboration-in-design-600x308.png",

    },
    {
      id: 5,
      content: <SkeletonFive/>,

      className: "md:col-span-1",
      thumbnail:       "https://img.freepik.com/premium-photo/innovate-future-technological-design-graphic_663277-49402.jpg?w=360",

    },
];

  return (
    <div 
      className="h-screen w-full -mt-8 lg:mt-44"
      id="about"
    >
  <h1 className="text-center text-white font-serif text-5xl mb-8">
    About <span className="text-purple">Me</span>
  </h1>
  <div className="h-full w-full gap-11 px-8">
    <LayoutGrid cards={Cards}/>
  </div>
</div>
  )
}

export default About
