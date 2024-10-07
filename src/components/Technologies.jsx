import { motion } from "framer-motion";
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconVariants = (duration = 1) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-26 text-center text-4xl ">
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap  items-center justify-center gap-4 py-3">
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}>
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4">
          <TbBrandNextjs className=" text-7xl " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4">
          <SiJavascript className=" text-7xl text-yellow-300 " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4">
          <SiTailwindcss className=" text-7xl text-sky-400 " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4">
          <SiLaravel className=" text-7xl text-red-500 " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4">
          <SiMongodb className=" text-7xl text-green-500 " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-">
          <SiNodedotjs className=" text-7xl text-purple-500 " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
