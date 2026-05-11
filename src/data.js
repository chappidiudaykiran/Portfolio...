export const HERO = {
  name: "Chappidi Uday Kiran",
  roles: [
    "Full-Stack MERN Developer",
    "React.js Specialist",
    "AI-Powered Apps Builder",
    "Node.js Engineer",
  ],
  tagline: "Building scalable web applications with clean architecture, immersive UI, and production-ready code.",
  status: "Open to Opportunities",
  email: "udaykiran24689@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/chappidiudaykiran" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chappidiudaykiran/" },
    { label: "LeetCode", href: "https://leetcode.com/u/s210540/" },
  ],
  highlights: [
    { icon: "🏆", text: "Hackathon Winner" },
    { icon: "⚡", text: "150+ LeetCode" },
    { icon: "🎓", text: "CGPA 8.84" },
  ],
};

export const ABOUT = {
  bio: [
    "I'm a Full Stack MERN Developer pursuing B.Tech in CSE at RGUKT IIIT Srikakulam (2023–2027), with a CGPA of 8.84. I specialize in building robust, scalable web apps with React, Node.js, Express, and MongoDB.",
    "From AI-powered educational platforms to developer matching apps, I love turning ideas into polished, production-ready products. Winner at Aignite 3.0 GenAI Hackathon with 150+ LeetCode problems solved.",
  ],
  stats: [
    { value: "6+", label: "Projects Built", color: "indigo" },
    { value: "150+", label: "LeetCode Solved", color: "cyan" },
    { value: "8.84", label: "CGPA", color: "violet" },
    { value: "2027", label: "Graduating", color: "emerald" },
  ],
};

export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "indigo",
    skills: ["React.js", "JavaScript (ES6+)", "Redux Toolkit", "Context API", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    title: "Backend & Database",
    icon: "⚙️",
    color: "emerald",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Authentication"],
  },
  {
    title: "DevOps & Tools",
    icon: "🚀",
    color: "cyan",
    skills: ["Git / GitHub", "Vercel", "Docker", "Postman", "Firebase", "AWS (Basics)"],
  },
  {
    title: "Languages",
    icon: "💻",
    color: "violet",
    skills: ["JavaScript", "Python", "Java", "C / C++"],
  },
];

export const PROJECTS = [
  {
    title: "Ecurve",
    subtitle: "Adaptive Educational Learning Platform",
    desc: "Full-stack MERN platform to analyze student stress and deliver personalized subject recommendations. Features course enrollment, YouTube-integrated video player, module-wise quizzes, automated grading, and real-time educator-student support chat. Integrated Flask-based ML prediction API for stress detection.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Flask ML", "JWT", "Google OAuth"],
    live: "https://neuro-ai-client-henna.vercel.app/",
    repos: [
      { label: "Frontend", url: "https://github.com/chappidiudaykiran/Neuro-AI-Client" },
      { label: "Backend", url: "https://github.com/chappidiudaykiran/Neuro-AI-Server" },
    ],
    color: "indigo",
    featured: true,
  },
  {
    title: "DevTinder",
    subtitle: "Developer Connection Platform",
    desc: "Full-stack platform to connect developers with real-time connection requests, user profiles, and personalized feeds. Features secure JWT-based authentication with custom Express middleware, RESTful APIs for profile editing, and Redux Toolkit for global state management.",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT Auth"],
    live: "https://dev-tinder-frontend-wheat.vercel.app/",
    repos: [
      { label: "Frontend", url: "https://dev-tinder-frontend-wheat.vercel.app/login" },
      { label: "Backend", url: "https://github.com/chappidiudaykiran/Dev-Tinder-Backend" },
    ],
    color: "cyan",
    featured: true,
  },
  {
    title: "MovieGPT",
    subtitle: "AI-Powered Movie Discovery",
    desc: "AI movie discovery platform using Groq LLM for personalized recommendations + TMDB APIs. Features Firebase auth, Redux state, multi-language support, and trailer playback.",
    tags: ["React", "Redux", "Firebase", "Groq API", "TMDB"],
    live: "https://moviegpt27.netlify.app/",
    repo: "https://github.com/chappidiudaykiran/Movie-GPT",
    color: "violet",
  },
  {
    title: "Food Ordering App",
    subtitle: "Responsive Delivery Platform",
    desc: "Dynamic food ordering platform with restaurant listings, menu browsing, cart, shimmer UI, and Redux Toolkit state management. Tested with Jest for reliability.",
    tags: ["React", "Redux Toolkit", "React Router", "Jest"],
    live: "https://react-food-ordering-app-pi.vercel.app/",
    repo: "https://github.com/chappidiudaykiran/React-Food-Ordering-APP",
    color: "amber",
  },
  {
    title: "YouTube Clone",
    subtitle: "Video Streaming Web App",
    desc: "Full-featured YouTube clone with video feed, live search suggestions, category browsing, nested comments, live chat simulation, and responsive sidebar layout.",
    tags: ["React", "Redux Toolkit", "YouTube API", "Tailwind"],
    live: "https://you-tube-clone-chi-one.vercel.app/",
    repo: "https://github.com/chappidiudaykiran/YouTube-Clone",
    color: "rose",
  },
  {
    title: "OnboardIQ",
    subtitle: "AI-Powered HR Policy Assistant",
    desc: "Helps new employees understand HR policies through natural language Q&A. Users ask about leave, attendance, onboarding to get simple answers.",
    tags: ["Gemini Flash", "Streamlit", "Prompt Guardrails"],
    live: "https://hrbot-tau.vercel.app/",
    color: "emerald",
  },
];

export const ACHIEVEMENTS = [
  { icon: "🏆", title: "Aignite 3.0 GenAI Hackathon", sub: "Winner — Built innovative AI-powered solution", color: "amber" },
  { icon: "⚡", title: "150+ LeetCode Solved", sub: "Strong problem solving in DSA and algorithms", color: "cyan" },
  { icon: "🎓", title: "CGPA: 8.84 / 10", sub: "B.Tech CSE at RGUKT IIIT Srikakulam (2023–2027)", color: "indigo" },
  { icon: "📜", title: "NPTEL — Data Science", sub: "Certified in Data Science using Python", color: "violet" },
  { icon: "🤖", title: "NPTEL — AI Methods", sub: "Certified in AI search methods for problem solving", color: "blue" },
  { icon: "🌐", title: "Web Dev Foundation", sub: "Completed foundational web development course", color: "emerald" },
];

export const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];