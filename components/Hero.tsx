"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/Textgenerate";
import {MagicButton} from "./ui/MagicButton";
import { Download } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/type-writer";
import { BackgroundBeams } from "./ui/background-box";
import Link from "next/link";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setShow(true);
    }, 500);
    return () => clearTimeout(time);
  }, []);

  const words = [
    { text: "Full Stack Developer" },
    { text: "Competitive Programmer" },
    { text: "Blockchain Enthusiast" },
    { text: "Next.js Developer" },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden mt-28  lg:h-screen lg:mt-24">
    
      <div className="flex flex-col-reverse gap-y-8 md:flex-row items-center justify-between w-full max-w-6xl px-4">
       
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <TextGenerateEffect
            className="text-[16px] md:text-3xl lg:-ml-4 lg:text-4xl text-white font-bold"
            words="Transform Concept Into Seamless Experience"
          />
          <p className="text-white text-sm md:text-lg lg:text-2xl gap-y-3">
            {show && <span>Hi, I am Sudipta Mondal</span>} {" "} 
            <TypewriterEffectSmooth words={words} className="lg:text-2xl"/>
          </p>
          {show && (
            <div className="py-4 relative z-20">
              <a href="https://drive.google.com/file/d/1zpHI3C-j3kEhiYLmXOQ-6M8zmqE9YtP4/view">
              <MagicButton title="Download CV" Icon={<Download />}/>
              </a>
            </div>
          )}
        </div>

            <div className="relative flex-shrink-0   lg:mr-11">
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-64 lg:w-64">
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-10 z-0">
                <div className="absolute inset-0 animate-blob-spin">
                  <div className="absolute inset-0 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] bg-purple-500/25 blur-md"></div>
                </div>
                
                <div className="absolute inset-0 animate-blob-spin-reverse">
                  <div className="absolute inset-0 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-pink-500/20 blur-md"></div>
                </div>
                
                <div className="absolute inset-0 animate-pulse-slow">
                  <div className="absolute inset-0 rounded-[45%_55%_55%_45%/45%_45%_55%_55%] bg-blue-500/20 blur-md"></div>
                </div>

                <div className="absolute inset-0 animate-wave-slow opacity-50">
                  <div className="absolute inset-0 rounded-[40%_60%_50%_50%/50%_40%_60%_50%] bg-cyan-500/20 blur-md"></div>
                </div>
              </div>

              <div className="relative z-10 h-full w-full rounded-full border-4 border-purple-500/50 overflow-hidden shadow-lg shadow-purple-500/20 bg-gray-900">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
      </div>
      <BackgroundBeams/>

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

    </div>

  );
}
