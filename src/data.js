export const SKILL_GROUPS = [
  {
    cat: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", icon: "⚛️", level: 92, color: "#00f0ff" },
      { name: "JavaScript", icon: "🟡", level: 90, color: "#f7df1e" },
      { name: "Redux", icon: "🔮", level: 86, color: "#7c3aed" },
      { name: "Tailwind CSS", icon: "🎨", level: 88, color: "#06b6d4" },
      { name: "HTML5/CSS3", icon: "🌐", level: 93, color: "#e34f26" },
      { name: "Context API", icon: "🔄", level: 84, color: "#00f0ff" },
    ],
  },
  {
    cat: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢", level: 84, color: "#10b981" },
      { name: "Express.js", icon: "🚂", level: 82, color: "#34d399" },
      { name: "MongoDB", icon: "🍃", level: 80, color: "#47a248" },
      { name: "REST APIs", icon: "🔗", level: 87, color: "#00f0ff" },
      { name: "JWT Auth", icon: "🔐", level: 80, color: "#f59e0b" },
      { name: "Mongoose", icon: "📦", level: 80, color: "#880000" },
    ],
  },
  {
    cat: "DevOps & Tools",
    icon: "🚀",
    skills: [
      { name: "Git/GitHub", icon: "🐙", level: 88, color: "#f05032" },
      { name: "Docker", icon: "🐳", level: 65, color: "#2496ed" },
      { name: "Vercel", icon: "▲", level: 85, color: "#fff" },
      { name: "Postman", icon: "📮", level: 82, color: "#ff6c37" },
      { name: "Firebase", icon: "🔥", level: 78, color: "#ffca28" },
      { name: "AWS", icon: "☁️", level: 60, color: "#ff9900" },
    ],
  },
  {
    cat: "Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", icon: "🟡", level: 90, color: "#f7df1e" },
      { name: "Python", icon: "🐍", level: 75, color: "#3776ab" },
      { name: "Java", icon: "☕", level: 70, color: "#ed8b00" },
      { name: "C/C++", icon: "⚡", level: 72, color: "#00599c" },
    ],
  },
];

export const PROJECTS = [
  {
    num: "01",
    title: "Ecurve",
    subtitle: "Adaptive Educational Learning Platform",
    desc: "Full-stack MERN platform to analyze student stress and deliver personalized subject recommendations. Features course enrollment, YouTube-integrated video player, module-wise quizzes, automated grading, and real-time educator-student support chat. Integrated Flask-based ML prediction API for stress detection and personalized study recommendations.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Flask ML API", "JWT", "Google OAuth", "Tailwind"],
    live: "https://neuro-ai-client-henna.vercel.app/",
    repos: [
      { label: "Frontend", url: "https://github.com/chappidiudaykiran/Neuro-AI-Client" },
      { label: "Backend", url: "https://github.com/chappidiudaykiran/Neuro-AI-Server" },
    ],
    featured: true,
    color: "#00f0ff",
  },
  {
    num: "02",
    title: "DevTinder",
    subtitle: "Developer Connection Platform",
    desc: "Full-stack platform to connect developers with real-time connection requests, user profiles, and personalized feeds. Features secure JWT-based authentication with custom Express middleware, RESTful APIs for profile editing and user discovery, and Redux Toolkit for global state management.",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT Auth", "Tailwind"],
    live: "https://dev-tinder-frontend-wheat.vercel.app/",
    repos: [
      { label: "Frontend", url: "https://dev-tinder-frontend-wheat.vercel.app/login" },
      { label: "Backend", url: "https://github.com/chappidiudaykiran/Dev-Tinder-Backend" },
    ],
    featured: true,
    color: "#10b981",
  },
  {
    num: "03",
    title: "MovieGPT",
    subtitle: "AI-Powered Movie Discovery",
    desc: "AI movie discovery platform using Groq LLM for personalized recommendations + TMDB APIs. Features Firebase auth, Redux state, multi-language support, and trailer playback.",
    tags: ["React", "Redux", "Firebase", "Groq API", "TMDB", "Tailwind"],
    live: "https://moviegpt27.netlify.app/",
    repo: "https://github.com/chappidiudaykiran/Movie-GPT",
    color: "#7c3aed",
  },
  {
    num: "04",
    title: "Food Ordering App",
    subtitle: "Responsive Delivery Platform",
    desc: "Dynamic food ordering platform with restaurant listings, menu browsing, cart, shimmer UI, and Redux Toolkit state management. Tested with Jest for reliability.",
    tags: ["React", "Redux Toolkit", "React Router", "Jest"],
    live: "https://react-food-ordering-app-pi.vercel.app/",
    repo: "https://github.com/chappidiudaykiran/React-Food-Ordering-APP",
    color: "#f59e0b",
  },
  {
    num: "05",
    title: "YouTube Clone",
    subtitle: "Video Streaming Web App",
    desc: "Full-featured YouTube clone with video feed, live search suggestions, category browsing, nested comments, live chat simulation, and responsive sidebar layout.",
    tags: ["React", "Redux Toolkit", "YouTube API", "Tailwind"],
    live: "https://you-tube-clone-chi-one.vercel.app/",
    repo: "https://github.com/chappidiudaykiran/YouTube-Clone",
    color: "#ef4444",
  },
  {
    num: "06",
    title: "OnboardIQ",
    subtitle: "AI-Powered HR Policy Assistant",
    desc: "Helps new employees understand HR policies quickly through natural language Q&A. Users ask about leave, attendance, onboarding, and benefits to get simple answers. Company-specific and strictly informational.",
    tags: ["Gemini Flash", "Google AI Studio", "Streamlit", "Prompt Guardrails", "HR Tech"],
    live: "https://hrbot-tau.vercel.app/",
    color: "#06b6d4",
  },
];

export const ACHIEVEMENTS = [
  { icon: "🏆", title: "Aignite 3.0 GenAI Hackathon", sub: "Winner — Built innovative AI-powered solution", color: "#f59e0b" },
  { icon: "⚡", title: "150+ LeetCode Solved", sub: "Strong problem solving in DSA and algorithms", color: "#00f0ff" },
  { icon: "🎓", title: "CGPA: 8.84 / 10", sub: "B.Tech CSE at RGUKT IIIT Srikakulam (2023–2027)", color: "#10b981" },
  { icon: "📜", title: "NPTEL — Data Science", sub: "Certified in Data Science using Python", color: "#7c3aed" },
  { icon: "🤖", title: "NPTEL — AI Methods", sub: "Certified in AI search methods for problem solving", color: "#06b6d4" },
  { icon: "🌐", title: "Web Dev Foundation", sub: "Completed foundational web development course", color: "#ef4444" },
];

export const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];