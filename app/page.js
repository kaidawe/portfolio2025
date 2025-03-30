"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import { cormorant, Space_Mono_Regular } from "./layout";
import goldfishBackground from "../public/goldfishBackground.jpg";

export default function Home() {
  // Use a boolean state to toggle the background
  const [isGoldfishHovered, setIsGoldfishHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsGoldfishHovered(true);
  };
  const handleMouseLeave = () => {
    setIsGoldfishHovered(false);
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      <Header 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <main
        className={`${Space_Mono_Regular.className} bg-cover bg-center h-screen w-full`}
        style={
          isGoldfishHovered
            ? { backgroundImage: `url(${goldfishBackground.src})`, backgroundSize: "cover" }
            : { backgroundColor: "white" }
        }
      >
        <section className="absolute bottom-10 left-[50vw] translate-x-[-50%]">
          <h1 className="text-4xl text-red-600">
            Haley Dawe is a designer and software developer in Vancouver, BC
            specializing in web and product design. She is the creative
            director for Wild Coat Perfumery and lead frontend engineer at Secur3D.
          </h1>
        </section>
      </main>
    </div>
  );
}
