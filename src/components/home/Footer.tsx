import React from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const icons = [
  { icon: <FaGithub />, path: "https://github.com/Tyler-Wiz" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/tyler-duncan-sotubo-b2372724a/",
  },
  { icon: <FaCodepen />, path: "https://codepen.io/tyler-wiz" },
  { icon: <FaTwitter />, path: "/" },
];

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col md:flex-row gap-6 items-center justify-between px-20 mb-20 mt-28">
      <div className="flex gap-5 items-center">
        {icons.map((item, index) => (
          <Link href={item.path} key={index} target="_blank">
            <motion.li
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="list-none text-skin-accent md:text-xl text-xl cursor-pointer">
              {item.icon}
            </motion.li>
          </Link>
        ))}
      </div>
      <p className="text-sm text-skin-primary text-center">
        © designed & built by Tyler Duncan Sotubo
      </p>
    </footer>
  );
};
