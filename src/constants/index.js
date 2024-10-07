import project1 from "../assets/projects/Space-Shot2.png";
import project2 from "../assets/projects/Movie-App.png";
import project3 from "../assets/projects/Code-Pen.png";
import project4 from "../assets/projects/Shopping.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Space-VR",
    image: project1,
    description:
      "A Modern space exploration experience built with React, tailwind Css.",
    technologies: ["tailwind", "CSS", "React", " React Router"],
    LinkTo: "https://space-vr-xi.vercel.app/",
  },
  {
    title: "Movie App",
    image: project2,
    description:
      "A-Movie App 🎬 A-Movie is a web application that allows users to discover, search for, and explore movies. Users can browse through a vast collection of movies, view details such as ratings, release date, and synopsis, and even watch trailers..",
    technologies: ["Axios Styling", "Tailwind", "React", " React Router"],
    LinkTo: "https://movie-nine-zeta.vercel.app/",
  },
  {
    title: "Code pen Website",
    image: project3,
    description:
      "A Codepen Website 🌐 A Codepen Website is a web application that allows users It's a flexible, responsive web application that adapts to different screen sizes",
    technologies: ["Tailwind", "Codemiror", "React", "React Router"],
    LinkTo: "https://code-pen-clone-pied.vercel.app/",
  },
  {
    title: "Shopping search",
    image: project4,
    description:
      "A Shopping search 🛍️ A Shopping search is a web application that allows users to search for products and view product details .",
    technologies: ["Tailwind", "CSS", "React", "mySQL"],
    LinkTo: "https://shopping-search.vercel.app/",
  },
];

export const CONTACT = {
  address: "Hay Rjafellah Cym Rabat ",
  phoneNo: "+212 0720-881237",
  email: "abdo.bouzekri123@gmail.com",
};

export const CarrerP = [
  {
    id: 1,
    year: 2020,
    title: "Baccalaureate in Life and Earth Sciences (SVT)",
    description:
      "Obtained my baccalaureate degree in SVT (Sciences de la Vie et de la Terre).",
    type: "education",
  },
  {
    id: 2,
    year: 2023,
    title: "Internship at Redal",
    description:
      "Completed a two-month internship at Redal, gaining practical experience in the field.",
    duration: "2 months",
    type: "experience",
  },
  {
    id: 3,
    year: 2024,
    title: "Specialized Technician Diploma in Digital Development",
    description:
      "Earned a diploma as a Specialized Technician in Digital Development.",
    type: "education",
  },
];
