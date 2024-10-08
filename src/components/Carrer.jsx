import React from "react";
import { CarrerP } from "../constants";
import { motion } from "framer-motion";

function Carrer() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl font-bold text-center mb-16 text-stone-100">
        My Journey
      </motion.h2>
      <div className="relative">
        {/* Vertical line - hidden on mobile, visible on larger screens */}
        <motion.div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-stone-100"></motion.div>

        {CarrerP.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            key={item.id}
            className="mb-8 lg:mb-16">
            <div
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}>
              <div className="lg:w-1/2"></div>
              <div className="lg:w-1/2 relative px-6">
                {/* Timeline dot - hidden on mobile, visible on larger screens */}
                <div className="hidden lg:block absolute top-5 w-6 h-6 rounded-full bg-blue-950 shadow left-0 transform -translate-x-1/2"></div>

                <div className="bg-transparent rounded-lg p-6 shadow-xl">
                  <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 mb-2">{item.year}</p>
                  <p className="text-slate-200">{item.description}</p>
                  {item.duration && (
                    <p className="text-slate-400 mt-2">
                      Duration: {item.duration}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Carrer;
