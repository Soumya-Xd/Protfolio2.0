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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,

  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bwu,
  bms,
  wbhs,
  redalpha,
  pr1,
  pr2,
  pr3
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "Burdwan Model School",
    icon: bms,  // Add an appropriate icon for PHS
    iconBg: "#FF5733",  // Choose a color for PHS
    date: "2013 - 2018",
    points: [
      "Completed  education with a focus on science and mathematics.",
      "Engaged in extracurricular activities like coding clubs and sports.",
      "Developed a strong foundation in problem-solving and teamwork.",
    ],
  },
  {
    title: "Student",
    company_name: "Parbatpur High School",
    icon: wbhs,
    iconBg: "#383E56",
    date: "Jan 2018 - Jan 2022",
    points: [
      "Completed secondary education with a focus on science and mathematics.",
      "Participated in extracurricular activities such as coding clubs and sports.",
      "Developed a strong foundation in problem-solving, teamwork, and leadership skills.",
      "Engaged in school-wide projects and community service activities.",
    ],
  },
  {
    title: "Student",
    company_name: "Brainware University",
    icon: bwu,  // Add an appropriate icon for Brainware University
    iconBg: "#C70039",  // Choose a color for Brainware University
    date: "2022 - 2026",
    points: [
      "Pursued B.Tech in Artificial Intelligence and Machine Learning.",
      "Participated in various hackathons and programming competitions.",
      "Worked on several projects, including a Tic Tac Toe game and a Pneumonia Classifier.",
    ],
  },
 
  {
    title: "Developer",
    company_name: "Redalpha",
    icon: redalpha,  // Add an appropriate icon for Redalpha
    iconBg: "#900C3F",  // Choose a color for Redalpha
    date: "2025 - Present",
    points: [
      "Led the development of web and mobile applications for clients.",
      "Collaborated with clients to understand project requirements and deliver optimal solutions.",
      "Managed end-to-end development, from conceptualization to deployment.",
      "Worked with technologies like React, Node.js, and Python.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Soumya proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Soumya does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Soumya optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Medicine Information Finder",
    description:
      "A web app that allows users to search for medicines and display their uses, side effects, and substitutes based on a dataset. Built using Python.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: pr1, // Update with appropriate image for the app
    source_code_link: "https://github.com/Soumya-Xd/testapp", // Provide the correct GitHub link
  },
  {
    name: "Pneumonia Classifier",
    description:
      "A machine learning model that classifies images to detect pneumonia. Built using Python and TensorFlow.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "keras",
        color: "pink-text-gradient",
      },
    ],
    image: pr2, // Update with appropriate image for the app
    source_code_link: "https://github.com/Soumya-Xd/Pneumonia_Classifier", // Provide the correct GitHub link
  },
  {
    name: "KrishakBuddy",
    description:
      "A web app built for the agricultural industry that provides farming assistance, crop disease detection, and related services.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: pr3, // Update with appropriate image for the app
    source_code_link: "https://github.com/Soumya-Xd/Krishakbuddy", // Provide the correct GitHub link
  },
];


export { services, technologies, experiences, testimonials, projects };