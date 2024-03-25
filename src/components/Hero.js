"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export function Hero({ count }) {
  const words = ["Software Engineer", "DevOps Engineer", "Cloud Engineer"];
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    setCurrentWord(words[i]);
    const timer = setTimeout(() => {
      if (isDeleting) {
        setJ(j - 1);
        if (j === 0) {
          setIsDeleting(false);
          setI(i === words.length - 1 ? 0 : i + 1);
        }
      } else {
        setJ(j + 1);
        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [i, j, isDeleting, currentWord]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setIsCursorVisible(!isCursorVisible);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, [isCursorVisible]);

  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-25 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Portfolio</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                Markus Eisl, MSc.
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              <span id="typewriter">
                I am a {currentWord.substring(0, j)}
                {isCursorVisible && "|"}{" "}
              </span>
            </p>
            <br></br>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/in/markus-eisl-b541671a0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={{ marginRight: "3%" }}
                  width={50}
                  height={50}
                  className="rounded-full"
                  src={"/linkedin-logo.webp"}
                  alt="LinkedIn Icon"
                />
              </a>
              <a
                href="https://github.com/EislM0203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={{ marginRight: "3%" }}
                  width={40}
                  height={40}
                  className="rounded-full"
                  href="https://github.com/EislM0203"
                  src={"/github-mark.svg"}
                  alt="Github Icon"
                />
              </a>
              <a
                href="https://github.com/EislM0203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={50}
                  height={50}
                  className="rounded-full"
                  href="https://www.instagram.com/markuseisl/"
                  src={"/instagram-logo.jpeg"}
                  alt="Instagram Icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/markuseisl.png"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
