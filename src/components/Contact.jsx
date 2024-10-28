import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { HeartIcon, Loader2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="pb-20 border-t border-stone-900 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-4xl text-center">
        Get in Touch
      </motion.h2>
      <div className="tracking-wider text-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4">
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4">
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=abdo.bouzekri123@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b">
          {CONTACT.email}
        </a>
      </div>
      <div className="flex items-center justify-center mt-4 ">
        <HeartIcon className="w-12 h-12 text-indigo-900 animate-pulse " />
      </div>
    </div>
  );
};

export default Contact;
