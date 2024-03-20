import React, { FC } from "react";

type Props = {
  name: string;
  description: string;
};

export const Header: FC<Props> = ({ name, description }) => {
  return (
    <>
      <h2 className="mb-2 md:text-2xl text-center font-medium uppercase text-skin-accent">
        {name}
      </h2>
      <h3 className="md:text-3xl text-center text-skin-primary font-bold w-2/5 mx-auto">
        {description}
      </h3>
    </>
  );
};
