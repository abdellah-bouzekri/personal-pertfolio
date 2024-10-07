import React from "react";
import logo from "../assets/raviKumarLogo.webp";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
function Nav() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" height={33} width={50} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/abdellah-bouzekri-97a177243/ "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin">
          <FaLinkedinIn className="hover:text-blue-500" />
        </a>
        <a
          href="https://github.com/abdellah-bouzekri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github">
          <FaGithub className="hover:text-indigo-800" />
        </a>
        <a
          href="https://discord.com/users/1149068303143272539"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord">
          <FaDiscord className="hover:text-violet-800" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
