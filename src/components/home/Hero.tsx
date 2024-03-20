/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaTwitter,
  FaArrowDown,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Skills } from "./Skills";

const icons = [
  { icon: <FaGithub />, path: "https://github.com/Tyler-Wiz" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/tyler-duncan-sotubo-b2372724a/",
  },
  { icon: <FaCodepen />, path: "https://codepen.io/tyler-wiz" },
  { icon: <FaTwitter />, path: "/" },
];

const arrowTransition = {
  duration: 2,
  repeatType: "reverse",
  repeat: Infinity,
  ease: "easeInOut",
};

export const Hero = () => {
  return (
    <section className="text-skin-primary py-12 bg-skin-background 2xl ">
      <div className="relative mt-36 w-[90%] mx-auto lg:w-[75%] flex items-center flex-col">
        <motion.div
          animate={{ scale: 3 }}
          transition={{ scale: arrowTransition }}
          className="absolute top-16 right-[30%] w-2 h-2">
          <Image src="/assets/img/circle.png" alt="" fill />
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-10">
          {icons.map((item, index) => (
            <Link href={item.path} key={index} target="_blank">
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="list-none text-skin-accent md:text-4xl text-2xl cursor-pointer">
                {item.icon}
              </motion.li>
            </Link>
          ))}
        </motion.div>
        <div className="mt-12 max-w-screen-lg">
          <h1 className="text-2xl md:text-5xl text-center font-medium leading-20 capitalize">
            CS graduate and Adept Full Stack developer, With Focusing responsive
            design, accessibility and pleasing aesthetics.
          </h1>
        </div>
        <Skills />
      </div>
    </section>
  );
};
