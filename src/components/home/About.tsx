import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "../common/button";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";

const aboutVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};
export const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section id="about">
      <motion.div
        ref={ref}
        variants={aboutVariant}
        initial="hidden"
        animate={control}
        className="pt-24 w-[90%] mx-auto lg:w-[60%]">
        <div className="flex items-center gap-3">
          <h2 className="md:text-4xl text-2xl font-semibold my-3 text-skin-primary">
            Hello, I&apos;m Tyler Duncan Sotubo
          </h2>
          <motion.div
            animate={{ rotate: ["15deg", "-10deg"] }}
            transition={{
              delay: 1,
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            className="relative w-8 h-8 hidden md:block">
            <Image src="/assets/img/hand.webp" alt="" fill />
          </motion.div>
        </div>
        <p className="text-2xl text-skin-primary my-3">
          A software developer based in London. I develop full-blown web
          applications using the PERN & MERN Stack. I&apos;ve been building
          websites since 2020 with a focus on responsive design, accessibility
          and pleasing aesthetics.
        </p>
        <p className="text-2xl text-skin-primary my-3">
          I have worked with a number of clients, ranging from small startups to
          FMCG, creating websites and web applications. I have developed web
          apps across multiple industries including e-commerce, education, and
          finance.
        </p>
      </motion.div>
      <div className="py-16 flex justify-center items-center">
        <Link
          href="https://drive.google.com/file/d/1RU5krTpgk9raDz4W_c7K1VAOLwbmpvyt/view?usp=sharing"
          target="_blank">
          <Button
            name="Download CV"
            color="bg-skin-primary"
            icon={<BsDownload size={24} />}
          />
        </Link>
      </div>
    </section>
  );
};
