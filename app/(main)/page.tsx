"use client"
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { HoverBorderGradientDemo } from "@/components/global/LigButton/page";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'; // Import useRouter

export default function Home() {
const router = useRouter(); // Initialize useRouter
const loginPage =()=>{
  router.push("/auth/login")
}
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-5xl md:text-[200px] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          EXE RAG
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          A subtle yet effective spotlight effect, because the previous version
          is used a bit too much these days.
        </p>
        <div className="flex flex-row justify-center mt-5 w-[80%] md:w-[100%] " >
        <div         onClick={loginPage} >
        <HoverBorderGradientDemo/>
        </div>
        <Button
        variant="secondary"
        className="m-5 flex px-12 py-6 border-white border-2 justify-center text-center text-xl rounded-full">
          Documentation
        </Button>
      </div>
      </div>
    </div>
  );
}
