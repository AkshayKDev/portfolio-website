"use client";

import Image from "next/image";
import computerImage from "../assets/images/memoji-computer.png";
import { Button } from "@/components/ui/button";
import { Phone, Wrench } from "lucide-react";
import Typewriter from "typewriter-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Hero = () => {
  return (
    <div className="py-32">
      <div className="container">
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
        <h1 className="font-serif text-4xl text-center mt-8 tracking-wide">
          <Typewriter
            options={{
              strings: [
                "Front End Development",
                "Back End Development",
                "Full Stack Development",
                "DevOps",
                "Blockchain Development",
                "AI Development",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="mt-4 text-center text-white/60">
          I specialize in transforming desings into functional, high-performing
          web applications. Let&apos;s discuss your next project
        </p>
        <div className="flex flex-col items-center mt-3 gap-4">
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
