import React from "react";
import { projectData } from "@/data/data";
import Image from "next/image";
import SkillsButton from "../common/SkillsButton";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import { Header } from "../common/header";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-skin-background">
      <div className="w-[90%] mx-auto lg:w-[80%]">
        <Header
          name="My Projects"
          description="Take a look some of my featured projects"
        />
        <div className="mt-10">
          {projectData.map((item, index) => (
            <div
              key={index}
              className={`py-16 flex ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-col items-center gap-10 ${
                index === projectData.length - 1
                  ? ""
                  : "border-b-[.2px]  border-skin-accent"
              }`}>
              <div className="relative w-full h-[270px] md:h-[330px] md:w-1/2 ">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className=" shadow-2xl rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2 mt-7">
                <p className=" text-xl uppercase font-semibold text-skin-primary">
                  {item.name}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap ">
                  {item.tech.map((item: any, index: number) => (
                    <div key={index}>
                      <SkillsButton name={item.name} />
                    </div>
                  ))}
                </div>
                <p className="text-lg text-black mt-6 my-10">{item.desc}</p>
                <div className="flex gap-10">
                  <Link
                    href={item.source}
                    target="_blank"
                    className="flex items-center gap-2">
                    <FaGithub className=" text-skin-accent" />
                    <p className=" text-skin-accent font-semibold hover:scale-90">
                      View Code
                    </p>
                  </Link>
                  <Link
                    href={item.web}
                    target="_blank"
                    className="flex items-center gap-2">
                    <FaLink className=" text-skin-accent" />
                    <p className=" text-skin-accent font-semibold hover:scale-90">
                      Visit Website
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
