import React from "react";
import profilPic from "../assets/raviKumarProfile.webp";
import Portfolio from "../assets/Portfolio.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-7xl">
              Abdellah
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter ">
              I'm a full-stack developer with a passion for building scalable
              and efficient web applications. With a strong foundation in
              computer science and a keen eye for design, I strive to create
              user-centered experiences that exceed expectations.
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-16 hover:bg-indigo-600 hover:text-yellow-50"
              download>
              Download Resume
            </motion.a>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end lg:p-8">
            <motion.img
              src={Portfolio}
              width={650}
              height={650}
              alt="Abdellah"
              className="border border-stone-500 rounded-3xl backdrop-brightness-75 "
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
