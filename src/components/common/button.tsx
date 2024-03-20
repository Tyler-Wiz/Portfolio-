import React, { FC } from "react";
import { ReactElement } from "react";
import { motion } from "framer-motion";

type Props = {
  name: string;
  color: string;
  icon: ReactElement | string;
};

const Button: FC<Props> = ({ name, color, icon }) => {
  return (
    <motion.button
      data-testid="buttonComponent"
      initial={{ y: 5 }}
      whileHover={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-2 items-center md:text-sm text-xs text-white px-8 py-4 rounded-full font-bold uppercase ${color}`}>
      {icon}
      {name}
    </motion.button>
  );
};

export default Button;
