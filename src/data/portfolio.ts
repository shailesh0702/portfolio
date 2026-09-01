// ============================================================
// PORTFOLIO DATA — Shailesh Pratap Singh
// ============================================================

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "phone";
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade: string;
  gradeLabel: string;
  description?: string;
  icon: "graduation" | "school";
}

export interface SkillCategory {
  title: string;
  icon: "code" | "globe" | "tool" | "cpu" | "layers";
  color: string;
  skills: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  techStack: string[];
  metrics: ProjectMetric[];
  description: string;
  bullets: string[];
  image?: string;
  color: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  title: string;
  organization: string;
  role: string;
  duration: string;
  description: string;
  highlights: string[];
  skills: string[];
  githubUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyLink?: string;
  color: string;
  badgeText: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: "trophy" | "code" | "users" | "star";
  color: string;
  badge: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
  color: string;
  icon: "layers" | "cpu" | "workflow" | "gauge" | "checkCircle";
}

// ---- PERSONAL INFO ----
export const personalInfo = {
  name: "Shailesh Pratap Singh",
  firstName: "Shailesh",
  lastName: "Pratap Singh",
  tagline: "B.Tech CSE Student | Full-Stack & Embedded Systems Developer",
  shortIntro:
    "Passionate about building web applications and hardware-integrated systems, currently pursuing Computer Science Engineering at Lovely Professional University.",
  aboutParagraph:
    "I am a Computer Science and Engineering undergraduate at Lovely Professional University with a strong passion for developing responsive web applications and hardware-integrated systems. My technical interests span full-stack development, algorithms, and cyber-physical embedded systems—combining modern frameworks like React and Node.js with microcontrollers like Arduino. My career goal is to architect robust, scalable software and intelligent IoT solutions that solve real-world problems and bridge digital experiences with physical computing.",
  email: "shaileshpratap668@gmail.com",
  phone: "+91 8887516069",
  location: "Phagwara, Punjab / Lucknow, Uttar Pradesh",
  status: "Available for opportunities",
  profileImage: "/shailesh.jpg",
  roles: [
    "Full-Stack Developer",
    "Embedded Systems Builder",
    "B.Tech CSE Student @ LPU",
    "C++ & Python Developer",
    "IoT & Hardware Enthusiast",
  ],
};

// ---- SOCIAL LINKS ----
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/shailesh0702",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shailesh-pratap-singh-383bb2399/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:shaileshpratap668@gmail.com",
    icon: "email",
  },
  {
    name: "Phone",
    url: "tel:+918887516069",
    icon: "phone",
  },
];

// ---- ABOUT / TERMINAL TEXT ----
export const aboutTerminalLines = [
  "> whoami",
  "Shailesh Pratap Singh — Full-Stack & Embedded Systems Developer",
  "",
  "> cat education.status",
  "Institution: Lovely Professional University (B.Tech CSE, 2025–Present)",
  "Current TGPA: 7.37 | Specialization: Full-Stack & Hardware Systems",
  "",
  "> cat skills.summary",
  "Programming: C, C++, Python, SQL",
  "Web Dev: HTML, CSS, JavaScript, React, Node.js",
  "Hardware: Arduino UNO, RFID RC522, Ultrasonic Sensors, LCD I2C",
  "Tools: Git, GitHub, VS Code, Arduino IDE, MongoDB",
  "",
  "> cat career_goals.txt",
  "Architecting high-performance web platforms and cyber-physical IoT systems.",
  "",
  "> echo $STATUS",
  "Building impactful solutions & ready for new opportunities! 🚀",
];

// ---- SKILLS (5 CATEGORIES) ----
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    color: "#00F0FF",
    skills: ["C", "C++", "Python", "SQL"],
  },
  {
    title: "Web Development",
    icon: "globe",
    color: "#00F0FF",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools & Platforms",
    icon: "tool",
    color: "#00F0FF",
    skills: ["Git", "GitHub", "VS Code", "Arduino IDE", "MongoDB"],
  },
  {
    title: "Core Concepts",
    icon: "layers",
    color: "#00F0FF",
    skills: ["DSA", "OOP", "DBMS", "Software Engineering"],
  },
  {
    title: "Hardware / Embedded",
    icon: "cpu",
    color: "#00F0FF",
    skills: ["Arduino UNO", "RFID RC522", "Ultrasonic Sensors", "LCD with I2C"],
  },
];

// Orbital skills visualization data
export const orbitalSkills = {
  inner: [
    { name: "C++", color: "#00F0FF" },
    { name: "Python", color: "#38BDF8" },
    { name: "JavaScript", color: "#00F0FF" },
    { name: "C", color: "#38BDF8" },
  ],
  middle: [
    { name: "HTML5", color: "#00F0FF" },
    { name: "CSS3", color: "#38BDF8" },
    { name: "SQL", color: "#00F0FF" },
    { name: "MongoDB", color: "#38BDF8" },
    { name: "Git", color: "#00F0FF" },
  ],
  outer: [
    { name: "Arduino UNO", color: "#00F0FF" },
    { name: "RFID RC522", color: "#38BDF8" },
    { name: "Ultrasonic", color: "#00F0FF" },
    { name: "LCD I2C", color: "#38BDF8" },
    { name: "DSA & OOP", color: "#00F0FF" },
  ],
};

// ---- PROJECTS ----
export const projects: Project[] = [
  {
    id: "mindcare",
    title: "MindCare – Mental Wellness Platform",
    subtitle: "Mental Wellness Support & Self-Reflection Platform",
    role: "Full-Stack Developer",
    duration: "Oct 2025",
    techStack: ["React", "Node.js", "REST APIs", "Database"],
    metrics: [
      { value: "Full Stack", label: "Architecture" },
      { value: "Low-Friction", label: "User Journey" },
      { value: "Reusable", label: "UI Components" },
    ],
    description:
      "Mental-wellness application focused on support resources, self-reflection, and guided experiences, with reusable UI components and intuitive user journeys.",
    bullets: [
      "Devised a focused mental-wellness application that streamlined access to support resources, self-reflection journals, and guided user experiences.",
      "Tailored reusable interface components and structured the product around intuitive, low-friction user journeys.",
      "Synchronized application logic and data flows to sustain consistency across core user interactions.",
      "Integrated backend REST APIs to manage user data securely and ensure smooth frontend-backend interaction.",
    ],
    color: "#00F0FF",
    githubUrl: "https://github.com/shailesh0702",
  },
  {
    id: "speed-sensor",
    title: "Speed Sensor with RFID Using Ultrasonic Sensor",
    subtitle: "Smart Dual-Sensor Speed & RFID Authentication Prototype",
    role: "Embedded Systems Developer",
    duration: "Dec 2025",
    techStack: ["C/C++", "Arduino UNO", "MFRC522 RFID", "Ultrasonic Sensors", "LCD I2C"],
    metrics: [
      { value: "2x", label: "Ultrasonic Sensors" },
      { value: "<100ms", label: "RFID Verification" },
      { value: "16x2", label: "I2C LCD Display" },
    ],
    description:
      "Smart speed-measurement prototype — RFID RC522 verifies authorized users/vehicles, calculates speed from timing between two ultrasonic sensors, I2C LCD shows access status and speed, buzzer alerts on access-denied.",
    bullets: [
      "Developed a smart speed-measurement prototype combining RFID-based identification with two ultrasonic sensors.",
      "Used RFID RC522 to verify authorized users/vehicles before allowing speed measurement.",
      "Calculated speed from the time elapsed between two ultrasonic sensors placed at a calibrated fixed distance.",
      "Integrated an I2C LCD to display access status and measured speed, with an alarm buzzer for access-denied alerts.",
    ],
    color: "#FF6B35",
    githubUrl: "https://github.com/shailesh0702",
  },
];

// ---- EXPERIENCE (WORKSHOPS & TUTORING) ----
export const experiences: Experience[] = [
  {
    title: "Python Programming & Coding Practice Workshop",
    organization: "Technical Tutoring & Community Workshop",
    role: "Workshop Instructor & Lead Mentor",
    duration: "July 2026",
    description:
      "Conducted Python tutoring workshop covering strings, functions, loops, programming problems, and debugging.",
    highlights: [
      "Conducted hands-on Python tutoring workshops for students and peers.",
      "Structured deep-dive problem sets focusing on strings, functions, loops, and conditional algorithms.",
      "Demonstrated live coding, algorithmic decomposition, and interactive debugging techniques to accelerate learner comprehension.",
      "Mentored participants in writing clean, modular Python code and analyzing time/space complexity.",
    ],
    skills: ["Python", "Strings & Loops", "Functions", "Debugging", "Problem Solving", "Mentorship"],
    githubUrl: "https://github.com/shailesh0702",
  },
];

// ---- CERTIFICATIONS ----
export const certifications: Certification[] = [
  {
    title: "Python Programming Certificate",
    issuer: "Saylor Academy",
    issueDate: "2025",
    credentialId: "7497057853SS",
    verifyLink: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1770317198/7497057853SS.pdf",
    color: "#00F0FF",
    badgeText: "Saylor Verified",
  },
  {
    title: "Data Science and Big Data",
    issuer: "Infosys Springboard",
    issueDate: "March 2026",
    credentialId: "INFY-SPB-DSBD26",
    verifyLink: "https://verify.onwingspan.com",
    color: "#00F0FF",
    badgeText: "Infosys Certified",
  },
  {
    title: "C++ Programming Certification",
    issuer: "Infosys Springboard",
    issueDate: "2026",
    credentialId: "INFY-SPB-CPP26",
    verifyLink: "https://verify.onwingspan.com",
    color: "#00F0FF",
    badgeText: "Infosys Certified",
  },
];

// ---- ACHIEVEMENTS ----
export const achievements: Achievement[] = [
  {
    title: "Organized Multiple School Events as Student Coordinator",
    description:
      "Led and coordinated school-wide technical, academic, and cultural events, managing cross-functional student teams, schedules, and event logistics.",
    icon: "users",
    color: "#00F0FF",
    badge: "Student Leadership",
  },
  {
    title: "Built & Documented Arduino RFID & Ultrasonic Speed Sensor",
    description:
      "Engineered and fully documented an embedded hardware prototype integrating dual ultrasonic sensors, MFRC522 RFID authentication, 16x2 I2C LCD, and buzzer alerts.",
    icon: "code",
    color: "#00F0FF",
    badge: "Hardware Innovation",
  },
  {
    title: "Conducted Python Programming Teaching Sessions",
    description:
      "Conducted interactive Python programming sessions as part of a Community Development Project, introducing peers to computational logic and coding best practices.",
    icon: "star",
    color: "#00F0FF",
    badge: "Community Impact",
  },
];

// ---- EDUCATION ----
export const education: Education[] = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)",
    duration: "2025 – Present",
    location: "Phagwara, Punjab",
    grade: "7.37",
    gradeLabel: "TGPA",
    description:
      "Specializing in Software Development, Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Embedded Systems.",
    icon: "graduation",
  },
  {
    institution: "Lucknow Public School",
    degree: "Intermediate (PCM — Physics, Chemistry, Mathematics)",
    duration: "Apr 2024 – May 2025",
    location: "Lucknow, Uttar Pradesh",
    grade: "75%",
    gradeLabel: "Score",
    description:
      "Rigorous pre-university coursework with emphasis on Mathematics, Physics, and foundational sciences.",
    icon: "school",
  },
  {
    institution: "Lucknow Public School",
    degree: "Matriculation (Secondary School Examination)",
    duration: "Apr 2022 – May 2023",
    location: "Lucknow, Uttar Pradesh",
    grade: "78%",
    gradeLabel: "Score",
    description:
      "Comprehensive secondary education developing strong foundations in Mathematics, Science, and Computer Applications.",
    icon: "school",
  },
];

// ---- SECTION NAV ITEMS (9 SECTIONS) ----
export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ---- QUOTES (for loading screen) ----
export const quotes = [
  "Code is poetry written in logic.",
  "First, solve the problem. Then, write the code.",
  "Engineering is the art of making the impossible reliable.",
  "Simplicity is the prerequisite for reliability.",
];
