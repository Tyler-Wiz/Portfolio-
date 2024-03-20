/* eslint-disable @next/next/no-img-element */
import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../common/header";
import Button from "../common/button";
import { IoLocation, IoMailOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

interface IFormInput {
  name: String;
  email: String;
  message: String;
}

const inputStyle =
  "bg-gray-100 px-4 py-2 w-full rounded-lg outline-orange-300 my-2 placeholder:capitalize font-semibold";
const errorStyle = "text-red-700 my-1 text-sm capitalize";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: any, e: any) => {
    emailjs
      .send("service_hsvsftt", "template_brr0qvb", data, "CyMbXRk8pnr8YsgLJ")
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Message sent", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="w-[90%] lg:w-[75%] mx-auto mt-16" id="contact">
      <Header name="Contact Me" description="Lets Talk Ideas" />
      <div className="md:flex flex md:flex-row flex-col items-center md:gap-10 gap-1 mt-20">
        {/* <div className="md:w-[55%] mb-8 w-full ">
          <p className="text-lg">
            I&apos;d love if you reached out to me. Tell me a little bit about
            your project, drop me a line and I’ll get back to you ASAP!
          </p>
          <div className="flex gap-2 items-center mt-10">
            <IoMailOutline size={30} className="text-skin-accent" />
            <p className="text-lg">tylertooxclusive@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center my-3">
            <IoLocation size={30} className="text-skin-accent" />
            <p className="text-lg">London, UK</p>
          </div>
        </div> */}
        <form
          data-testid="form"
          onSubmit={handleSubmit(onSubmit)}
          className="font-Lato md:w-[90%] w-full mx-auto">
          <p className=" text-xl font-semibold my-3">Write me a message👇</p>
          <div className="flex flex-col">
            <label>Name</label>
            <input
              placeholder="name"
              {...register("name", { required: true })}
              className={`${inputStyle}`}
            />
            {errors.name && (
              <span className={`${errorStyle}`}>Your name is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              placeholder="email"
              {...register("email", { required: true })}
              className={`${inputStyle}`}
            />
            {errors.email && (
              <span className={`${errorStyle}`}>Your email is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label>Your Message</label>
            <textarea
              placeholder="message"
              {...register("message", { required: true })}
              className={`${inputStyle} h-52`}></textarea>
            {errors.message && (
              <span className={`${errorStyle}`}>Please leave a message</span>
            )}
          </div>
          <div className="my-4 flex justify-end">
            <Button
              name="Send Message"
              color="bg-skin-accent"
              icon={<FiSend size={24} />}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
