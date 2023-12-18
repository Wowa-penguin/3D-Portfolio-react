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
  nodejs,
  git,
  htmllogo,
  jslogo,
  reactlogo,
  // todo: add images from my projects
  carrent,
  jobit,
  tripguide,
// ======================== 
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Um mig",
  },
  {
    id: "work",
    title: "Tímalína",
  },
  {
    id: "contact",
    title: "Hafa Samband",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Regalo Lager gómmur",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

// todo: Breyra texsta til að það passi við mig
const experiences = [
  {
    title: "Html and Css",
    company_name: "Html",
    icon: htmllogo,
    iconBg: "#383E56",
    date: "Apríl 2021",
    points: [
      "Árið 2021 skrifaði ég fyrstu línuna mína í HTML og CSS til að forðast watermarkið á wix",
      "Það var sögu verkefni þar sem við áttum að gera heimasíður og mér langaði að vera öðruvísi",
      "Það fór ekki lengar en það verkefni í smá tíma en þetta var byrjunin á ævintýrinu mínu inn í  forritunar heiminn"
    ],
  },
  {
    title: "Javascript",
    company_name: "Js",
    icon: jslogo,
    iconBg: "#E6DEDD",
    date: "Febrúar 2022",
    points: [
      "Árið 2022 langaði mér að fara lengra þar sem ég var byrjaður að búa til síður með HTML og CSS",
      "Það var þá þegar ég fann út hvernig Javascript gæti betur bætt síðurnar mínar með því að gefa þeim notkunarleika",
      "Tímin sem ég fann út hvað Javascript var sýndi mér smá hlið að hvað forritun var og það má segja að ég var ekki tilbúin",
    ],
  },
  {
    title: "React and Next.js",
    company_name: "React",
    icon: reactlogo,
    iconBg: "#383E56",
    date: "Júlí 2023",
    points: [
      "Eftir að hafa lært Javascript í nærum ár fann ég út þann sannleika að flestir nota ekki bara JS heldur eitthvað sem heitir React",
      "Ég var á síðustu önninni minni í skóla þegar ég ákvað að mér langaði að læra á React á meðan skóla",
      "Að læra á React hefur komið mér lengra en ég hafði hugsað mér og nú er ég að skoða Next.js sem er næst á dagskrá"
    ],
  },
];
// ? delete this or not idk
// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];
// TODO: Add texts and images from my projects
const projects = [
  {
    name: "Name",
    description: "xxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxxxxxxx", 
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    // TODO: Add image from my projects
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Name",
    description: "xxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxxxxxxx",     
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    // TODO: Add image from my projects
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Name",
    description: "xxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxxxxxxx", 
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    // TODO: Add image from my projects
    image: "",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };