"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import React from "react";

const HomePage = () => {
  const words = [
    {
      text: "Provide",
    },
    {
      text: "top",
    },
    {
      text: "service",
    },
    {
      text: "with",
    },
    {
      text: ".EXE ",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex relative left-0">
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center gap-8 rounded-lg p-8 pt-52 ">
          <TypewriterEffect words={words} />
          <div className="w-[56vw]">
            <div className="relative z-10"> </div>
            <form className="rounded-md">
              <div id="slash-command"></div>
              <div className="flex justify-between">
                <div className="flex ml-[1.5em]"></div>
              </div>
              <div className="absolute flex gap-2 bottom-[calc(100%+1rem)]">
                <img className="h-10" />
                <div className="text-sm flex items-center gap-2">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      className="h-4 w-4"
                    ></svg>
                  </button>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                </div>
              </div>
              <div className="relative w-full grow flex flex-col overflow-hidden bg-background dark:bg-bgDarkSecondary md:rounded-md border rounded-lg border-white">
                <div className="flex-grow">
                  <div className="absolute left-0 top-4 md:left-4">
                    <div className="flex gap-1">
                      <input
                        className="hidden"
                        id="file-input"
                        accept="image/*, .txt, .py, .js, .ts, .tsx, .html, .css,  .md, .mp4, .pdf, .heic, .heif"
                        type="file"
                      />
                      <div className="items-center justify-center text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full bg-background p-0 cursor-pointer dark:bg-bgDarkMain dark:hover:bg-bgDarkSidebarHover dark:text-gray-300 hidden">
                        <label className="flex h-8 cursor-pointer items-center justify-center rounded-md transition-all">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-github size-4"
                          ></svg>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="ml-0 items-center gap-1 text-area-send-space px-6">
                    <textarea
                      placeholder="Ask your query"
                      id="chat-input-box"
                      className="min-h-[60px] w-full resize-none bg-transparent pr-4 py-[1.3rem] focus-within:outline-none text-base sm:text-base break-words pb-1 placeholder:text-black dark:placeholder:text-white"
                    ></textarea>
                  </div>
                  <div className="absolute right-2 top-4">
                    <button
                      className="bg-primary text-primary-foreground inline-flex items-center justify-center text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full p-0"
                      type="submit"
                      data-state="closed"
                    >
                      <span className="md:flex">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                      </span>
                    </button>
                  </div>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
