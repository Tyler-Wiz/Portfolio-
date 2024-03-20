import { NavData, IProjects, ISkills, IBlog } from "@/lib/interface";

export const navData: NavData[] = [
  { name: "about", path: "about" },
  { name: "projects", path: "projects" },
  { name: "blog", path: "blog" },
  { name: "contact", path: "contact" },
];

export const blogData: IBlog[] = [
  {
    title: "Building a Tic Tac Toe App with React.js",
    img: "/assets/img/blog/tictac.jpeg",
    date: "February 2024",
    desc: "A Step-by-Step Guide 2024 to building a Tic Tac Toe game with React.js",
    link: "https://dev.to/tylerwiz/building-a-tic-tac-toe-app-with-reactjs-a-step-by-step-guide-2024-hbj",
    github: "",
  },
  {
    title: "Building a Tic Tac Toe App with React.js",
    img: "/assets/img/blog/blogholder1.png",
    date: "February 2024",
    desc: "A Step-by-Step Guide 2024 to building a Tic Tac Toe game with React.js",
    link: "https://dev.to/tylerwiz/building-a-tic-tac-toe-app-with-reactjs-a-step-by-step-guide-2024-hbj",
    github: "",
  },
  {
    title: "Building a Tic Tac Toe App with React.js",
    img: "/assets/img/blog/blogholder2.png",
    date: "February 2024",
    desc: "A Step-by-Step Guide 2024 to building a Tic Tac Toe game with React.js",
    link: "https://dev.to/tylerwiz/building-a-tic-tac-toe-app-with-reactjs-a-step-by-step-guide-2024-hbj",
    github: "",
  },
];

export const projectData: IProjects[] = [
  {
    name: "Lyrics Plug",
    img: "/assets/img/projects/plug.png",
    desc: `This is a lyrics website, built using the M.E.R.N Stack, 
    Data is fetched from the backend API built using Express Js and MongoDB. 
    Client and Admin side are built using Next Js and Redux Tool Kit for state management.
    Admin can upload, edit and delete songs from the admin dashboard.
    Songs are uploaded to Cloudinary and stored in a MongoDB database.`,
    source: "https://github.com/Tyler-Wiz/Lyrics-App",
    web: "https://absorbing-stone-production.up.railway.app/",
    tech: [
      { name: "Express JS" },
      { name: "Mongo DB" },
      { name: "Cloudinary" },
      { name: "Typescript" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Sportzy",
    img: "/assets/img/projects/sportzy.png",
    desc: `Full Stack Ecommerce website built using the P.E.R.N Stack,
    the client side was built using Next Js and Redux Tool Kit for state management.
    Data is fetched from the backend API built using Express Js and PostgreSQL, Product images are stored in an Amazon S3 Bucket,
    Products are uploaded from the admin dashboard built using Next Js and Redux Tool Kit for state management.`,
    source: "https://github.com/Tyler-Wiz/Full-Stack-Ecommerce",
    web: "https://full-stack-ecommerce-sable.vercel.app/",
    tech: [
      { name: "Javascript" },
      { name: "Express JS" },
      { name: "PostgreSQL" },
      { name: "Amazon S3 Bucket" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "PowerZone Gym",
    img: "/assets/img/projects/gym.png",
    desc: `COMING SOON`,
    source: "/",
    web: "/",
    tech: [
      { name: "Javascript" },
      { name: "Express JS" },
      { name: "Mongo DB" },
      { name: "Amazon S3 Bucket" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Vanilla CSS" },
    ],
  },
  {
    name: "Smirnoff Party",
    img: "/assets/img/projects/NoknownAddress.png",
    desc: `Global Client Smirnoff's project for the Smirnoff "NoknownAddress" Party Campaign.  
    The website was built using the P.E.R.N Stack.
    The wesbite focus was to allow users to register for the party with email address and instagram handle.
     The backend API was built using Express Js and PostgreSQL.
     Registered users were stored in a PostgreSQL database and Welcome Email sent with NodeMailer`,
    source: "https://github.com/Tyler-Wiz/Smirnoff-party",
    web: "https://smirnoff-party-frontend-production.up.railway.app/",
    tech: [
      { name: "Typescript" },
      { name: "Express JS" },
      { name: "PostgreSQL" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Vanilla CSS" },
    ],
  },

  {
    name: "Artists Profile API",
    img: "/assets/img/projects/artistApi.png",
    desc: `This is an Open API built using Express Js and PostgreSQL. The project is till in progress.
    The aim is to build an API that can be used by artists to create their profile and share their work.`,
    source: "https://github.com/Tyler-Wiz/Artist-Profile-API",
    web: "/",
    tech: [
      { name: "Javascript" },
      { name: "Express JS" },
      { name: "PostgreSQL" },
      { name: "Swagger" },
    ],
  },
];

export const programmingSkills = [
  {
    name: "html",
    img: "/assets/img/skills/html5.svg",
  },
  {
    name: "css",
    img: "/assets/img/skills/css3.svg",
  },
  {
    name: "javascript",
    img: "/assets/img/skills/javascript.svg",
  },
  {
    name: "typescript",
    img: "/assets/img/skills/typescript.svg",
  },
];

export const backendSkills = [
  {
    name: "nodejs",
    img: "/assets/img/skills/nodejs.svg",
  },
  {
    name: "express",
    img: "/assets/img/skills/express.svg",
  },
  {
    name: "mongo",
    img: "/assets/img/skills/mongodb.svg",
  },
  {
    name: "postgreSQL",
    img: "/assets/img/skills/postgre.png",
  },
];

export const frontendSkills = [
  {
    name: "react",
    img: "/assets/img/skills/react.svg",
  },
  {
    name: "next",
    img: "/assets/img/skills/nextjs.svg",
  },
  {
    name: "redux",
    img: "/assets/img/skills/redux.svg",
  },
];

export const otherSkills = [
  {
    name: "jest",
    img: "/assets/img/skills/jest.svg",
  },
  {
    name: "tailwind",
    img: "/assets/img/skills/tailwind.svg",
  },
];
