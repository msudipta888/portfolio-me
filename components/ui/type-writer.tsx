"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  
   words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100; 
  const deletingSpeed = 50; 
  const pauseDuration = 1000; 

  useEffect(() => {
    const currentWord = words[currentWordIndex].text;
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText !== currentWord) {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText !== "") {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, words, currentWordIndex]);

 

  return (
    <div
    className={cn(
      "text-base sm:text-xl md:text-xl lg:text-xl font-mono ",
      className
    )}
  >
    <span className="inline-block dark:text-purple text-black">
      {currentText}
    </span>
    <motion.span
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={cn(
        "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-5 bg-blue-500",
        cursorClassName
      )}
    ></motion.span>
  </div>
);
};
