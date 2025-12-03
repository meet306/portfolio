// index.js
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I build fast, responsive, and user-friendly interfaces using modern frameworks. Every component is clean, reusable, and optimized for real-world performance.",
    items: [
      {
        title: "React Development",
        description: "(Hooks, Components, State Management)",
      },
      {
        title: "UI Styling",
        description: "(Tailwind CSS, CSS3, Responsive Layouts)",
      },
      {
        title: "Performance UI",
        description: "(Lazy Loading, Code Splitting)",
      },
    ],
  },

  {
    title: "Backend Development",
    description:
      "I develop stable and scalable backend systems using Node.js and Express, ensuring smooth data flow and secure API communication.",
    items: [
      {
        title: "REST API Development",
        description: "(CRUD, Middleware, Routing)",
      },
      {
        title: "Authentication Systems",
        description: "(JWT, Sessions, Role Based Access)",
      },
      {
        title: "Business Logic",
        description: "(Controllers, Services, Validation)",
      },
    ],
  },

  {
    title: "Database & Data Modeling",
    description:
      "I design clean and efficient MongoDB schemas that scale with your application and keep data structured and reliable.",
    items: [
      {
        title: "MongoDB Architecture",
        description: "(Schemas, Indexing, Aggregation)",
      },
      {
        title: "Data Optimization",
        description: "(Query Tuning, Efficient Structures)",
      },
      {
        title: "Mongoose Modeling",
        description: "(Hooks, Validations, Population)",
      },
    ],
  },

  {
    title: "Full-Stack Integration",
    description:
      "I connect frontend and backend seamlessly, ensuring fast communication, secure data flow, and smooth user experiences.",
    items: [
      {
        title: "API Integration",
        description: "(Frontend → Backend Communication)",
      },
      {
        title: "State Sync",
        description: "(React Query / Axios / Fetch)",
      },
      {
        title: "Session Handling",
        description: "(Tokens, Cookies, Protected Routes)",
      },
    ],
  },

  {
    title: "Real-Time Applications",
    description:
      "I build interactive, real-time features that enhance user engagement and deliver instant updates inside your application.",
    items: [
      {
        title: "Socket.io Chat",
        description: "(Live Messaging, Typing Indicators)",
      },
      {
        title: "Live Notifications",
        description: "(Real-Time Alerts & Updates)",
      },
      {
        title: "Event-Driven Features",
        description: "(Broadcasting, Status Tracking)",
      },
    ],
  },

  {
    title: "Project Deployment & Hosting",
    description:
      "I deploy MERN applications using simple and reliable hosting platforms, ensuring smooth performance and zero downtime.",
    items: [
      {
        title: "Web Hosting",
        description: "(Vercel, Netlify, Render)",
      },
      {
        title: "Backend Deployment",
        description: "(Render, Railway, VPS Basic Setup)",
      },
      {
        title: "Environment Setup",
        description: "(.env, API Keys, Config Management)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "YouTube Timeline Bookmark Extension",
    description:
      "A Chrome extension that allows users to bookmark specific YouTube video timestamps, manage them, and access notes directly inside the extension using JavaScript and Chrome APIs.",
    href: "",
    image: "/assets/projects/youtube-bookmark.jpg",
    bgImage: "/assets/projects/youtube-bookmark.jpg",
    frameworks: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "Chrome API" },
      { id: 3, name: "HTML" },
      { id: 4, name: "CSS" },
    ],
  },
  {
    id: 2,
    name: "AI Image Enhancer",
    description:
      "A React-based web app where users can upload images and enhance them using an integrated AI enhancement API, featuring clean UI and real-time preview.",
    href: "",
    image: "/assets/projects/ai-image-enhancer.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "AI API" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "GSAP Animated Portfolio Website",
    description:
      "A beautifully animated React website built using GSAP timeline-based animations, scroll effects, and smooth UI transitions.",
    href: "",
    image: "/assets/projects/gsap-website.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "CSS" },
    ],
  },
  {
    id: 4,
    name: "Flappy Bird Game",
    description:
      "A fully functional Flappy Bird clone built using Python and Pygame with smooth physics, collision detection, and score tracking.",
    href: "",
    image: "/assets/projects/flappy-bird.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Pygame" },
    ],
  },
  {
    id: 5,
    name: "AI Code Checker (Gemini API)",
    description:
      "A MERN-based platform where users write code and receive AI-generated feedback using Gemini API. Features real-time error detection and code quality suggestions.",
    href: "",
    image: "/assets/projects/ai-code-checker.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "Gemini API" },
    ],
  },
  {
    id: 6,
    name: "AI Collaborative Coding Chat App",
    description:
      "A coding chat platform with real-time communication where users can collaborate and use @ai to get AI-generated code, fixes, and website templates.",
    href: "",
    image: "/assets/projects/ai-chat-app.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "MERN" },
      { id: 2, name: "WebSockets" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "AI API" },
    ],
  },
  {
    id: 7,
    name: "AI Automation Agent (MCP) for X Posts",
    description:
      "An AI-powered automation agent built using MCP that generates and schedules daily posts for X (Twitter) with captions, hashtags, and optimized content.",
    href: "",
    image: "/assets/projects/mcp-agent.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "MCP" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "AI API" },
      { id: 4, name: "Automation" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/patel_meet_3066/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/meet-patel-b1a4ba2b0/" },
  { name: "GitHub", href: "https://github.com/meet306" },
];
