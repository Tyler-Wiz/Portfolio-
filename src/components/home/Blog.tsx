import React from "react";
import { Header } from "../common/header";
import { blogData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import SkillsButton from "../common/SkillsButton";

const Blog = () => {
  return (
    <section
      id="blog"
      className="w-[90%] mx-auto mt-16 mb-36 lg:w-[80%] lg:mb-28">
      <Header name="Blog" description="Latest Blog posts" />
      <ul className="flex flex-col lg:flex-row gap-5">
        {blogData.map((blog, index) => (
          <li key={index} className="mt-10 lg:w-1/3">
            <Link href={blog.link} key={index} target="_blank">
              <div className="relative w-full h-[250px] ">
                <Image
                  src={blog.img}
                  alt="blog post"
                  fill
                  className=" shadow-xl rounded-xl"
                />
              </div>
            </Link>
            <div className="my-3 flex justify-between px-1 items-center">
              <Link href={blog.github} target="_blank">
                <SkillsButton name="Github Link" />
              </Link>
              <h2 className="text-xs text-skin-accent font-bold ">
                {blog.date}
              </h2>
            </div>
            <h2 className="text-3xl font-bold text-skin-primary mt-8">
              {blog.title}
            </h2>
            <p className="mt-2 text-md text-black">{blog.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
