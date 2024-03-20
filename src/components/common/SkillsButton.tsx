import React, { FC } from "react";

type Props = {
  name: string;
};

const SkillsButton: FC<Props> = ({ name }) => {
  return (
    <button className=" bg-skin-primary text-skin-light px-2 py-1 rounded-lg text-xs">
      {name}
    </button>
  );
};

export default SkillsButton;
