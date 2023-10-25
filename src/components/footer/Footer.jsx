import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="">
      <div className="h- flex w-full flex-col items-center bg-slate-950 px-12 py-12">
        <div className="flex w-full max-w-md justify-between">
          <div className="cursor-pointer text-sm capitalize text-zinc-100 hover:text-pink-500">
            terms of use
          </div>
          <div className="cursor-pointer text-sm capitalize text-zinc-100 hover:text-pink-500">
            privacy policy
          </div>
          <div className="cursor-pointer text-sm capitalize text-zinc-100 hover:text-pink-500">
            about
          </div>
          <div className="cursor-pointer text-sm capitalize text-zinc-100 hover:text-pink-500">
            blog
          </div>
          <div className="cursor-pointer text-sm uppercase text-zinc-100 hover:text-pink-500">
            faq
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-zinc-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quasi
          repellendus magnam, voluptate, ut eligendi odit sunt delectus officia
          numquam soluta itaque debitis sit dolorem animi, neque assumenda
          molestias natus? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Magni quasi repellendus magnam?
        </div>
        <div className="mt-10 flex w-full max-w-[250px] justify-between">
          <div className="cursor-pointer rounded-full bg-slate-900 p-3 hover:scale-110 hover:outline hover:outline-2 hover:outline-pink-500">
            <FaFacebook color="white" size={20} />
          </div>
          <div className="cursor-pointer rounded-full bg-slate-900 p-3 hover:scale-110 hover:outline hover:outline-2 hover:outline-pink-500">
            <FaInstagram color="white" size={20} />
          </div>
          <div className="cursor-pointer rounded-full bg-slate-900 p-3 hover:scale-110 hover:outline hover:outline-2 hover:outline-pink-500">
            <FaLinkedin color="white" size={20} />
          </div>
          <div className="cursor-pointer rounded-full bg-slate-900 p-3 hover:scale-110 hover:outline hover:outline-2 hover:outline-pink-500">
            <FaWhatsapp color="white" size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
