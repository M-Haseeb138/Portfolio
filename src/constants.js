// Experience Section Logo's
import webverseLogo from './assets/company_logo/Kawiish.jpg';
import agcLogo from './assets/company_logo/kawiish.jpg';
import Codematics from './assets/svg/skills/codelog.jpeg';

// Education Section Logo's
import glaLogo from './assets/education_logo/aust.png';
 

// Project Section Logo's
import githubdetLogo from './assets/work_logo/truck-logistic.jpg';
import csprepLogo from './assets/work_logo/web-realstate.png';
import movierecLogo from './assets/work_logo/divine1.jpg';
import gamerzhost from './assets/work_logo/web-gamerzhost.png';
import ECommurz from './assets/work_logo/web-ECommurz.png';
import aceAuthentics from './assets/work_logo/web-ace.png';
import fsi from './assets/work_logo/web-fsi.png';

//skills
import bootstrap from '../src/assets/svg/skills/bootstrap.svg';
import canva from '../src/assets/svg/skills/canva.svg';
import css from '../src/assets/svg/skills/css.svg';
import gcp from '../src/assets/svg/skills/gcp.svg';
import git from '../src/assets/svg/skills/git.svg';
import graphql from '../src/assets/svg/skills/graphql.svg';
import html from '../src/assets/svg/skills/html.svg';
import illustrator from '../src/assets/svg/skills/illustrator.svg';
import javascript from '../src/assets/svg/skills/javascript.svg';
import materialui from '../src/assets/svg/skills/materialui.svg';
import mysql from '../src/assets/svg/skills/mysql.svg';
import nextJS from '../src/assets/svg/skills/nextJS.svg';
import photoshop from '../src/assets/svg/skills/photoshop.svg';
import react from '../src/assets/svg/skills/react.svg';
import svelte from '../src/assets/svg/skills/svelte.svg';
import tailwind from '../src/assets/svg/skills/tailwind.svg';
import typescript from '../src/assets/svg/skills/typescript.svg';
import vitejs from '../src/assets/svg/skills/vitejs.svg';
import fastapi from '../src/assets/svg/skills/fastapi.svg'
import nodeJS from '../src/assets/svg/skills/node-js.svg'
import mongoDB from '../src/assets/svg/skills/mongoDB.svg'
import jwt from '../src/assets/svg/skills/jwt.png'
import express from '../src/assets/svg/skills/express.png'
import postmen from '../src/assets/svg/skills/postmen.png'
import Restapis from '../src/assets/svg/skills/restapis.png'
 
//skills section
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'node.js':
      return nodeJS;
    case 'express.js':
      return express;
    case 'mongodb':
      return mongoDB;
    case 'jwt':
      return jwt;
    case 'postman':
      return postmen;
    case 'rest apis':
      return Restapis;
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'materialui':
      return materialui;
    case 'canva':
      return canva;
    case 'fastapi':
      return fastapi;
    default:
      return null;
  }
};


export const skillsData = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT",
  "Postman",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
   "React",
  "Tailwind",
  "MaterialUI"
];

 //Experience
export const experiences = [
  {
    id: 0,
    img: webverseLogo, // You can change this to your actual logo if available
    role: "Backend Developer",
    company: "Kawiish IT Services",
    date: "Jan 2025 – Present",
    desc: "Building and maintaining scalable backend systems using Node.js and Express.js. Implemented RESTful APIs, integrated MongoDB for data storage, and secured endpoints with JWT. Also contributed to frontend tasks occasionally using React, Tailwind CSS, and Material UI when required.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "React.js",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    id: 1,
    img: Codematics, // Replace this with a real Urrann Codematics logo if you get it
    role: "Web Development Intern",
    company: "Codematics lnc",
    date: "Nov 2024 – Dec 2024",
    desc: "Completed a 2-month internship where I practiced building responsive web pages and enhanced my foundational frontend skills using HTML, CSS, JavaScript, and React.js.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Tailwind"
    ],
  },
];

  // Education
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Abbottabad University Of Science And Technology",
      date: "Sept 2020 - Aug 2024",
      desc: "I completed my Bachelor's degree in Computer Science (BSCS) from AUST, Abbottabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at AUST allowed me to work on projects that srclied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science In Computer Science - (BSCS)",
    }  
  ];
  // Projects
  export const projects = [
    {
      id: 0,
      title: "Trukza - Logistics Platform",
      description:
        "Building a logistics platform in Next.js that connects truck drivers with customers. Features include driver profiles, a shipping cost calculator, real-time shipment tracking, and a mobile-responsive, scalable interface for efficient goods transport.",
      image: githubdetLogo,
      tags: ["HTML", "Tailwind Css", "JavaScript", "Next Js", "API"],
      github: "https://github.com/ismail-90",
      webapp: "https://trukza.com/",
    },
    {
      id: 1,
      title: "Real-Estate Project",
      description:
        "Built a feature-rich real estate web srclication with two main interfaces: an Admin Panel for managing users and listings, and a User Panel that enables users to create property ads, manage wishlists, and post properties for auction. Implemented dynamic bidding functionality, allowing users to participate in live property auctions. Integrated property creation, real-time updates, and listing management using React.js, Zustand/Redux Toolkit for state management, and Firebase/srcwrite for backend services. Focused on delivering a secure, responsive, and scalable user experience with interactive map views and advanced filtering.",
      image: csprepLogo,
      tags: ["React JS", "Saas", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ismail-90",
      webapp: "https://elaborate-sunshine-816064.netlify.app/",
    },
    {
      id: 2,
      title: "Divine Management Sysytem",
      description:
        "Divine is a custom-built platform aimed at enhancing care coordination within the disability support sector. The system streamlines scheduling, secures patient data, and supports role-based functionalities for Owners, Managers, and Employees with tailored operational capabilities. I led the design-to-codetransformation, creating a fully responsive, real-time interface to ensure scalability, usability, and performance.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ismail-90",
      webapp: "https://divinesoftwares.com.au/",
    },
    {
      id: 3,
      title: "Gamerz Host",
      description:
        "Developed for a German client, this platform allows users to host game servers, buy games, and select from various hosting plans. Delivered a responsive, secure, and performance-optimized user experience tailored for gamers.",
      image: gamerzhost,
      tags: ["HTML", "CSS", "JavaScript", "BootStrap"],
      github: "https://github.com/ismail-90",
      webapp: "https://gamerzhost.com/",
    },
     {
      id: 4,
      title: "E-Commurz System",
      description:
        "Developed a responsive e-commerce website with features like product listing, cart, and secure checkout using Next.js and Tailwind CSS. Focused on delivering a smooth user experience with clean UI and efficient state management.",
      image: ECommurz,
      tags: ["Next.js", "Tailwind Css", "Javascript", "Api" ],
      github: "https://github.com/ismail-90",
      webapp: "https://ecommurz.netlify.app/",
    },
       {
      id: 5,
      title: "ACE Authentics – Sports Collectibles",
      description:
        "Developed a responsive e-commerce platform for selling authenticated sports memorabilia. Focused on clean UI, seamless shopping experience, and product showcase using modern frontend technologies.",
      image: aceAuthentics,
      tags: ["HTML", "CSS", "JavaScript", "Php", "mysql" ],
      github: "https://github.com/ismail-90",
      webapp: "https://aceauthentics.com/",
    },
{
      id: 6,
      title: "Centerice Coa",
      description:
        "Developed a responsive Collectibles website for Centerice Coa, showcasing authenticated sports memorabilia. Focused on clean UI, seamless shopping experience, and product showcase using modern frontend technologies.",
      image: aceAuthentics,
      tags: ["HTML", "CSS", "JavaScript", "BootStrap"],
      github: "https://github.com/ismail-90",
      webapp: "https://centericecoa.com/",
    },
  {
      id: 7,
      title: "Future Skillage Institute",
      description:
        "Developed a responsive website using HTML, CSS, JavaScript, and PHP for an educational institute to showcase courses, manage student inquiries, and provide institute information. Focused on clean UI, smooth navigation, and dynamic form handling for a better user experience.",
      image: fsi,
      tags: ["HTML", "CSS", "JavaScript", "Php", "mysql" ],
      github: "https://github.com/ismail-90",
      webapp: "https://futureskillage.com/",
    },

  ];