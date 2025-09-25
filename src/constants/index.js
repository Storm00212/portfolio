import {
  mobile,
  pitchpoa,
  backend,
  teach2give,
  dekut,
  dkuthackathon,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  firebase,
  nodejs,
  mongodb,
  git,
  ulinzi,
  analogue,
  threejs,
  electronics,
  engineer,
  Arduino,
  Iot,
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
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Electronics Engineer",
    icon: engineer,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
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
    name: "Digital Electronics",
    icon: electronics,
  },
  {
    name: "Iot",
    icon: Iot,
  },
  {
    name: "Anlogue electronics",
    icon: analogue,
  },
  {
    name: "Arduino Programming",
    icon: Arduino,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Pitch Poa App",
    icon: pitchpoa,
    iconBg: "#383E56",
    date: "July 2025 - July 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies to assist in bulding pitchpoa, an application designed to help business enterprises increase sales through AI.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products as well as setting up a whatsapp gateway for customer support",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Ulinzi",
    icon: ulinzi,
    iconBg: "#E6DEDD",
    date: "August  2025 - Sep 2025",
    points: [
      "I built the backend for Ulinzi, an application designed to provide security to persons at risk through automatic sos messages to loved ones. I focused on developing and maintaining web applications using NodeJS and other related technologies.",
      "Building a secure database using MongoDB.",
      "Secure user authentication using jsonwebtoken.Building of sosAlert API using Infobip for whatsapp messages",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Apprentice",
    company_name: "Teach2Give",
    icon: teach2give,
    iconBg: "#F5CAC3",
    date: "Sep 2025 - Present",
    points: [
      "I am currently sharpening my skills in react frameworks and the .NET stack development",
      "Database using microsoft SQL and server as well as CRUD operations,DOTNET core web API and unit tests",
      "Intergration tests and regression tests,redux ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Laboratory tests",
    company_name: "Dedan Kimathi",
    icon: dekut,
    iconBg: "#6D6875",
    date: "Sep 2025 - Present",
    points: [
      "I am currently applying knowledge from analog electronics and circuit and network theory in the creation of an analog amplifier and filter.",
      "Creation of RLC filter for sound filtering",
      "Building prototype using given components and configuring simulation from theoretical values to practical values",
      "Working with fellow students to realise the prototype",
    ],
  },
  {
    title: "Hackathon participant",
    company_name: "Dedan Kimathi",
    icon: dkuthackathon,
    iconBg: "#84A59D",
    date: "Sep 2025 - Present",
    points: [
      "I am currently leading a team of 5 in the annual dkut hackathon",
      "We are focusing on building a project that tackles issues in the agricultural sector",
      "Working primarily with Javascript frameworks.",
      "Working with fellow students to realise the project, giving and receiving feedback on code optimisation and future scaling",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Paul proved me wrong.",
    name: "Lucky Kitonyi",
    designation: "Product Developer",
    company: "Ulinzi",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Paul does.",
    name: "Lowell Owuor",
    designation: "Team Leader",
    company: "PitchPoa",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Paul is a developer with a hunger and willingness to learn.",
    name: "Brian Kemboi",
    designation: "Trainer",
    company: "Teach2Give",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const Projects = [
  {
    title: "Mern Chat Application",
    desc:
      "My very first web project, a chat application that allowed users to have real time messaging. This was also my first experience with mongodb and nodejs.",
    subdesc:
      "I used socket.io for real time communication between users as well as a secure jwt authentication and saved users,conversations and messages to node.js. Use of hooks really optimised my workflow here especially on the frontend.",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    logo: "/assets/chaticon.png",
    texture: "/textures/project/project1.mp4",
    href: "https://github.com/Storm00212/mern-chat-app",
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "react",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "mongodb",
        path: "/assets/mongodb.png",
      },
      {
        id: 3,
        name: "tailwind",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "chakraui",
        path: "/assets/chakraui.png",
      },
    ],
  },
  {
    title: "AI fitness planner",
    desc: "An application designed to help you achieve your fitness goals. It uses an AI powered voice assistant to talk to the client, get his/her fitness requirements then generate and save diet and workout plans for the user.",
    subdesc:
      "I used nextjs for the app interface and VAPI API for the voice assitant model and connected it to gemini to generate a response. I also used a convex database and clerk authentication for the backend,which is uncommon but effective and deployed it on vercel",
    texture: "/textures/project/project2.mp4",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    logo: "/assets/ailogo.png",
    href: "https://github.com/Storm00212/Ai-fitness-assistant",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "Vapi",
        path: "/assets/vapi.png",
      },
      {
        id: 3,
        name: "Gemini",
        path: "/assets/gemini.png",
      },
      {
        id: 4,
        name: "Convex",
        path: "/assets/convex.png",
      },
      {
        id: 5,
        name: "Clerk",
        path: "/assets/clerk.png",
      },
    ],
  },
  {
    title: "Home Automation System",
    desc:
      "An automation system built using arduino that performs home automation functions like opening and closing of curtains at certain times, and using sensors to alert for intruders.",
    subdesc:
      "I simulated this application on wokwi in the browser(can be used with Visual Studio Code as well). I used servo motors,rtc and motion sensors for the system",
    texture: "/textures/project/project3.mp4",
    spotlight: "/assets/spotlight5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    logo: "/assets/automation.png",
    href: "https://github.com/Storm00212/Home-automation-system",
    tags: [
      {
        id: 1,
        name: "Arduino",
        path: "/assets/arduino.png",
      },
      {
        id: 2,
        name: "C++",
        path: "/assets/c++.png",
      },
      {
        id: 3,
        name: "Wokwi",
        path: "/assets/wokwi.png",
      },
    ],
  },
  {
    title: "Temperature and humidity sensor",
    desc:
      "An IoT temperature and humidity system built using ESP32 module and sensors.The sensors pick data from the environment and send to the ESP32 which sends data to a server that saves it and displays to a react frontend. Can be useful for agricultural purposes.",
    subdesc:
      "I used a Temperature and humidity sensor to send data to esp32 module. I used my laptop's Ip address as the server and sent the data to the server with the http and wifi library, saved the data to mongodb and displayed it on the browser.",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    logo: "/assets/Iot.png",
    href: "https://github.com/Storm00212/Temperature-and-humidity-sensor-using-esp32-and-MERN-stack",
    spotlight: "/assets/spotlight2.png",
    texture: "/textures/project/project4.mp4",
    tags: [
      {
        id: 1,
        name: "IoT&Esp32",
        path: "/assets/esp32.png",
      },
      {
        id: 2,
        name: "C++",
        path: "/assets/c++.png",
      },
      { id: 3, name: "MERN stack", path: "/assets/MERN.png" },
    ],
  },
  {
    title: "Vending machine microcontroller.",
    desc:
      "Used combinational and sequential logic in digital electronics to build the microcotroller of a vending machine allowing different coin denominations and code typing to select food items.",
    subdesc:
      "I used counters and BCD adders for the coin counter logic. I then connected values to comparators to check if the user amount met the prices and used leds to indicate.For item selection I connected a 4 by 4 keypad to a decoder whose output was connected to the dipensing circuit after which the machine reset once an item was bought",
    logo: "/assets/vending.png",
    texture: "/textures/project/project5.mp4",
    href: "https://github.com/Storm00212/Vending-machine",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Proteus 8",
        path: engineer,
      },
      {
        id: 2,
        name: "Digital Electronics",
        path: electronics,
      },
    ],
  },
  /**
  {
    name: "Sound amplification and filtering system.",
    description:
      "Successfully used highpass, lowpass and bandpass filters and a multistage amplifier to construct a circuit that amplifies sound then filters base, soprano and mid based on their frequencies with the addition of switches to allow change between various sounds.",
    tags: [
      {
        name: "Proteus 8",
        color: "blue-text-gradient",
      },
      {
        name: "Analog Electronics",
        color: "green-text-gradient",
      },
      {
        name: "Circuits and network theory.",
        color: "pink-text-gradient",
      },
    ],
    logo: amplification,
    href: "https://github.com/Storm00212/Sound-amplification-and-filtering-system",
  }, */
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export { services, technologies, experiences, testimonials, Projects };
