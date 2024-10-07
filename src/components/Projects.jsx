import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index";
import { ExternalLink } from "lucide-react";
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8 overflow-hidden rounded-lg bg-transparent shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="flex h-full items-center justify-center">
            <a
              href={project.LinkTo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-200 p-2 text-black transition-transform duration-300 hover:scale-110">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold text-gray-100">
          {project.title}
        </h3>
        <p className="mb-3 text-sm text-gray-600 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="rounded-full bg-gray-900 px-2 py-1 text-xs font-medium text-gray-100">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="mb-12 text-center text-4xl font-bold text-stone-400">
          My Projects
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
