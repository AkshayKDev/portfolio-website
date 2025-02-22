"use client";

import Image from "next/image";
import computerImage from "@/assets/images/memoji-computer.png";
import { Button } from "@/components/ui/button";
import { Phone, Wrench } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { people } from "./data";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";

const Hero = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      <div className="lg:size-[620px] hero-ring" />
      <div className="lg:size-[820px] hero-ring" />
      <div className="lg:size-[1020px] hero-ring" />
      <div className="lg:size-[1220px] hero-ring" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-red-500">
        <StarIcon className="text-emerald-300" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <Image src={computerImage} className="size-[100px]" alt="" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg">
            <div className="relative">
              <div className="absolute bg-green-500 size-2.5 rounded-full opacity-75 animate-ping" />
              <div className="bg-green-500 size-2.5 rounded-full relative" />
            </div>
            <div className="font-medium text-sm">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming desings into functional,
            high-performing web applications. Let&apos;s discuss your next
            project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-3 gap-4">
          <Button className="inline-flex items-center gap-2 px-6 h-12 rounded-xl border border-white/15">
            <span className="font-semibold">Explore my services</span>
            <Wrench className="h-10 w-10" />
          </Button>
          <Button className="inline-flex items-center gap-2 px-14 h-12 rounded-xl border border-white bg-white text-gray-900">
            <Phone className="h-10 w-10" />
            <span className="font-semibold">Book a call</span>
          </Button>
        </div>
        <div className="flex items-center justify-center my-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// "AI Development",
// "Front End Development",
// "Back End Development",
// "Full Stack Development",
// "Mobile App Development",
// "DevOps",
// "Blockchain Development",
