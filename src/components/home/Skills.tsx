import {
  programmingSkills,
  backendSkills,
  frontendSkills,
  otherSkills,
} from "@/data/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const Skills = () => {
  const RenderSkills = ({ skills }: any) => {
    return (
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.2 }}
        className="flex mx-4 gap-1">
        {skills.map((item: any, index: number) => (
          <div key={index}>
            <div className="relative h-14 w-14 group-hover:scale-50 ">
              <Image src={item.img} alt="" fill className="rounded-xl " />
            </div>
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="my-24">
      <div className="flex flex-col lg:flex-row lg:gap-2 items-center gap-10">
        <RenderSkills skills={programmingSkills} />
        <RenderSkills skills={backendSkills} />
        <RenderSkills skills={frontendSkills} />
        <RenderSkills skills={otherSkills} />
      </div>
    </div>
  );
};
