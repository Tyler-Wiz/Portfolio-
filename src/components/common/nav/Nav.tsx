/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import { navData } from "@/data/data";
import { Link } from "react-scroll/modules";

export const Nav = () => {
  const [color, setColor] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState();
  const [toggle, setToggle] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeNavBarColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBarColor);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between md:px-20 px-6 py-8 md:text-sm text-skin-primary items-center font-medium sticky top-0  ${
          color
            ? " bg-skin-primary py-6 z-40 duration-300"
            : "bg-skin-background"
        }`}>
        <a href="/">
          <p
            className={`text-skin-primary text-md md:text-sm ${
              color ? "text-skin-background" : ""
            }`}>
            Tyler Duncan Sotubo
          </p>
        </a>
        <div className="flex md:gap-10 gap-6 items-center">
          <ul
            className={`hidden md:flex gap-14 capitalize cursor-pointer z-50 text-skin-primary ${
              color ? "text-skin-background" : ""
            }`}>
            {navData.map((item, index: any) => {
              return (
                <Link
                  key={index}
                  activeClass="active"
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}>
                  <li>
                    <p
                      onClick={() => {
                        setActiveIndex(index);
                      }}
                      data-testid="desktop nav"
                      className={`hover:scale-125 duration-300 hover:text-skin-accent ${
                        activeIndex === index
                          ? "text-skin-accent scale-105"
                          : ""
                      }`}>
                      {item.name}
                    </p>
                  </li>
                </Link>
              );
            })}
          </ul>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer relative md:hidden">
            <div
              className={`after:content-[''] after:block w-6 h-[2px] bg-orange-700 mb-2 duration-700 relative ${
                isOpen ? "rotate-[-45deg] top-[8px]" : "top-0"
              } ${color && " bg-gray-200"}`}></div>
            <div
              className={`before:content-[''] before:block w-6 h-[2px] bg-orange-700 mt-2 duration-700 relative ${
                isOpen ? " rotate-[45deg] bottom-[2px] " : ""
              } ${color && " bg-gray-200"}`}></div>
          </div>
        </div>
      </nav>
      <ul
        className={`fixed md:hidden px-10 py-10 z-[9999] h-1/3 w-full duration-700 shadow-lg bg-skin-white cursor-pointer bg-skin-light ${
          isOpen ? "right-0" : "right-[-400px] opacity-0"
        }`}>
        {navData.map((item, index: any) => {
          return (
            <Link
              key={index}
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              onClick={() => setIsOpen(false)}>
              <li className="mt-5 text-center uppercase font-bold">
                <p
                  onClick={() => setActiveIndex(index)}
                  className={`duration-300 hover:text-skin-accent ${
                    activeIndex === index ? "text-skin-accent" : ""
                  }`}>
                  {item.name}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};
