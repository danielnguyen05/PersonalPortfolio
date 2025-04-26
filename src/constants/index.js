import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  python,
  java,
  Csharp,
  Cpp,
  mbest,
  monash,
  wired,
  monsec,
  privatetutor,
  finova,
  facerecog,
  portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: Cpp,
  },
  {
    name: "C#",
    icon: Csharp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Private Tutor",
    company_name: "Self Employed",
    icon: privatetutor,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Provided personalized tutoring in Mathematics and English for students from primary to high school levels.",
      "Developed custom lesson plans tailored to individual learning styles and academic goals.",
      "Helped students improve problem-solving, critical thinking, and essay writing skills.",
      "Achieved consistent improvements in student performance and confidence across key curriculum areas.",
    ],
  },
  {
    title: "Python Programming Bootcamp Tutor",
    company_name: "Monash University",
    icon: monash,
    iconBg: "#383E56",
    date: "July 2024 - March 2025",
    points: [
      "Delivered hands-on Python programming tutorials to beginner and intermediate students.",
      "Designed exercises and mini-projects to reinforce core concepts like loops, functions, and data structures.",
      "Provided one-on-one support to help students debug code and understand programming logic.",
      "Helped students build foundational skills for further study in software development and data science.",
    ],
  },
  {
    title: "Marketing Officer",
    company_name: "MonSec",
    icon: monsec,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Created and managed social media campaigns to boost club awareness and event engagement.",
      "Produced marketing materials, including flyers, newsletters, and digital content, tailored to target audiences.",
      "Collaborated with other teams within the Faculty of Information Technology to support event promotions and communication initiatives.",
      "Tracked and analyzed campaign performance metrics to optimize future marketing initiatives.",
    ],
  },
  {
    title: "Infrastructure Officer",
    company_name: "MBEST",
    icon: mbest,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Managed internal platforms such as Notion, Discord, Canva, and Google Workspace, maintaining access controls and permissions.",
      "Designed and maintained automation scripts and integrations to streamline workflows and operations.",
      "Implemented productivity tools and automated processes, significantly reducing manual workload and improving response times.",
      "Supported sub-teams by optimizing digital infrastructure for collaboration, communication, and knowledge management.",
    ],
  },
  {
    title: "Events and Marketing Officer",
    company_name: "WIRED",
    icon: wired,
    iconBg: "#E6DEDD",
    date: "March 2025 - Present",
    points: [
      "Produced and edited short-form video content to drive digital engagement and promote club initiatives.",
      "Boosted community participation online and in-person through targeted content strategies and interactive campaigns.",
      "Organized and executed industry nights, workshops, and social events, strengthening member engagement and networking opportunities.",
      "Collaborated with executive teams to align marketing efforts with club goals and event outcomes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Finova Investment Platform",
    description:
      "A full-stack investment platform that allows users to create and manage personalized portfolios, analyze real-time and historical market data, and receive AI-powered insights and portfolio optimization recommendations to support smarter investment decisions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "red-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },

    ],
    image: finova,
    source_code_link: "https://github.com/danielnguyen05/Finova-Investment-Platform/tree/main",
  },
  {
    name: "Face Recognition Authentication System",
    description:
      "A facial recognition authentication platform which captures and verifies user identities using advanced facial recognition algorithms, then enables secure digital signature capture through real-time gesture-based input.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openCV",
        color: "green-text-gradient",
      },
    ],
    image: facerecog,
    source_code_link: "https://github.com/danielnguyen05/FaceRecognitionProject",
  },
  {
    name: "Personal Portfolio",
    description:
      "A personal portfolio website that showcases my skills, projects, and experiences, built with React, Three.js, and Tailwind CSS. It features a responsive design, smooth animations, and a user-friendly interface to highlight my work effectively.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "red-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
