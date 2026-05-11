export const SKILL_GROUPS = [
  {
    cat: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", icon: "⚛️", level: 92, color: "#6366f1" },
      { name: "JavaScript", icon: "🟡", level: 90, color: "#f7df1e" },
      { name: "TypeScript", icon: "📘", level: 72, color: "#3178c6" },
      { name: "Redux", icon: "🔮", level: 86, color: "#764abc" },
      { name: "Tailwind", icon: "🎨", level: 88, color: "#06b6d4" },
      { name: "HTML/CSS", icon: "🌐", level: 93, color: "#e34f26" },
    ],
  },
  {
    cat: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢", level: 84, color: "#539e43" },
      { name: "Express.js", icon: "🚂", level: 82, color: "#818cf8" },
      { name: "MongoDB", icon: "🍃", level: 80, color: "#47a248" },
      { name: "REST APIs", icon: "🔗", level: 87, color: "#ff6b6b" },
      { name: "Firebase", icon: "🔥", level: 78, color: "#ffca28" },
      { name: "JWT Auth", icon: "🔐", level: 80, color: "#06b6d4" },
    ],
  },
  {
    cat: "DevOps & Tools",
    icon: "🚀",
    skills: [
      { name: "Git/GitHub", icon: "🐙", level: 88, color: "#f05032" },
      { name: "Docker", icon: "🐳", level: 65, color: "#2496ed" },
      { name: "Vercel", icon: "▲", level: 85, color: "#a78bfa" },
      { name: "Postman", icon: "📮", level: 82, color: "#ff6c37" },
      { name: "Linux", icon: "🐧", level: 70, color: "#fcc624" },
      { name: "Jenkins", icon: "⚙️", level: 62, color: "#d24939" },
    ],
  },
];

export const PROJECTS = [
  {
    num: "01",
    title: "Ecurve",
    subtitle: "Adaptive Educational Learning Platform",
    desc: "AI-powered adaptive learning platform that personalizes education using machine learning. Features intelligent content delivery, real-time progress tracking, educator dashboards, and student analytics powered by Neuro-AI algorithms.",
    tags: ["React", "Node.js", "MongoDB", "Express", "AI/ML", "Tailwind"],
    live: "https://neuro-ai-client-henna.vercel.app/",
    repos: [
      { label: "Client", url: "https://github.com/chappidiudaykiran/Neuro-AI-Client" },
      { label: "Server", url: "https://github.com/chappidiudaykiran/Neuro-AI-Server" },
    ],
    featured: true,
  },
  {
    num: "02",
    title: "DevTinder",
    subtitle: "Developer Connection Platform",
    desc: "Tinder-style developer matching platform where developers can swipe, match, and connect. Features JWT authentication, profile management, connection requests, and a real-time feed of developer profiles.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Tailwind"],
    live: "https://dev-tinder-frontend-wheat.vercel.app/",
    repos: [
      { label: "Frontend", url: "https://dev-tinder-frontend-wheat.vercel.app/login" },
      { label: "Backend", url: "https://github.com/chappidiudaykiran/Dev-Tinder-Backend" },
    ],
    featured: true,
  },
  {
    num: "03",
    title: "MovieGPT",
    subtitle: "AI-Powered Movie Discovery",
    desc: "AI movie discovery platform using Groq LLM for personalized recommendations + TMDB APIs. Features Firebase auth, Redux state, multi-language support, and trailer playback.",
    tags: ["React", "Redux", "Firebase", "Groq API", "TMDB", "Tailwind"],
    live: "https://moviegpt27.netlify.app/",
    repo: "https://github.com/chappidiudaykiran/Movie-GPT",
  },
  {
    num: "04",
    title: "Food Ordering App",
    subtitle: "Responsive Delivery Platform",
    desc: "Dynamic food ordering platform with restaurant listings, menu browsing, cart, shimmer UI, and Redux Toolkit state management. Tested with Jest for reliability.",
    tags: ["React", "Redux Toolkit", "React Router", "Jest"],
    live: "https://react-food-ordering-app-pi.vercel.app/",
    repo: "https://github.com/chappidiudaykiran/React-Food-Ordering-APP",
  },
  {
    num: "05",
    title: "YouTube Clone",
    subtitle: "Video Streaming Web App",
    desc: "Full-featured YouTube clone with video feed, live search suggestions, category browsing, nested comments, live chat simulation, and responsive sidebar layout.",
    tags: ["React", "Redux Toolkit", "YouTube API", "Tailwind"],
    live: "https://you-tube-clone-chi-one.vercel.app/",
    repo: "https://github.com/chappidiudaykiran/YouTube-Clone",
  },
  {
    num: "06",
    title: "OnboardIQ",
    subtitle: "AI-Powered HR Policy Assistant",
    desc: "OnboardIQ helps new employees understand HR policies quickly. Instead of reading long handbooks, users can ask questions about leave, attendance, onboarding, and benefits and get simple answers. It is company-specific and strictly informational.",
    tags: ["Gemini Flash", "Google AI Studio", "Streamlit", "Prompt Guardrails", "HR Tech"],
    live: "https://hrbot-tau.vercel.app/",
  },
];

export const ACHIEVEMENTS = [
  { icon: "⚡", title: "150+ LeetCode Solved", sub: "Strong problem solving in DSA and algorithms" },
  { icon: "🎓", title: "CGPA: 8.84 / 10", sub: "B.Tech CSE at RGUKT IIIT Srikakulam (2023–2027)" },
  { icon: "📜", title: "NPTEL — Data Science", sub: "Certified in Data Science using Python" },
  { icon: "🤖", title: "NPTEL — AI Methods", sub: "Certified in AI search methods for problem solving" },
  { icon: "☁️", title: "NPTEL — Cloud Computing", sub: "Certified in cloud computing fundamentals" },
  { icon: "🏆", title: "Web Dev Certification", sub: "Completed foundational web development training" },
];

export const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];