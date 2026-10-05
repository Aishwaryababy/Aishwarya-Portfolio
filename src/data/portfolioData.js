// ============================================================
// portfolioData.js — Centralized configuration for Aishwarya Baby's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

import resumePdf from '../../Portfolio Assets/Resume.pdf';
import certPdf from '../../Portfolio Assets/Certificates.pdf';

export const personalInfo = {
  name: "Aishwarya Baby",
  firstName: "Aishwarya",
  brandName: "Aishwarya Baby",
  title: "Full Stack Web Developer",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 9380185770",
  emails: {
    primary: "aishu.baby.chichu@gmail.com",
    secondary: "aishu.baby.chichu@gmail.com",
  },
  summary:
    "Full Stack Web Developer and MCA Graduate at Mount Carmel College, Bengaluru. Passionate about building functional, responsive, and user-friendly web applications using modern technologies like React, Node.js, Python, and MySQL.",
  resumeUrl: resumePdf,
};

export const socialLinks = {
  github: "https://github.com/Aishwaryababy",
  linkedin: "https://linkedin.com/in/aishwarya-baby-3582052b8",
  instagram: null, // Not provided
};

export const heroContent = {
  greeting: "Hi, I'm Aishwarya Baby",
  titleHighlight: "Full Stack Web Developer",
  subtitle:
    "I build fast, responsive web applications using React, Node.js, Python, and MySQL.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: resumePdf },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Aishwarya Baby</span>, a Full Stack Web Developer and MCA Graduate based in Bengaluru, India, passionate about crafting clean, functional, and highly responsive web applications.`,
  techStack: ["Python", "React.js", "Node.js"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 88 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 82 },
        { name: "C", level: 75 },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML5", level: 92 },
        { name: "CSS3", level: 88 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "Flask", level: 78 },
        { name: "PHP", level: 72 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 92 },
        { name: "eMudhra", level: 70 },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "Keras", level: 72 },
        { name: "Pandas", level: 80 },
        { name: "Scikit-learn", level: 74 },
      ],
    },
  ],
};

// Achievements Data (replaces ContentCreation)
export const achievementsList = [
  {
    title: "Best Outgoing Student",
    description:
      "Awarded Best Outgoing Student — the highest honor given to a student who demonstrates outstanding academic performance, leadership, and contributions to the institution.",
    stats: "Top Award",
    icon: "🏆",
  },
  {
    title: "Certificate of Appreciation",
    description:
      "Received Certificate of Appreciation for exceptional service as Class Representative, consistently bridging communication between students and faculty.",
    stats: "CR Award",
    icon: "📜",
  },
  {
    title: "Vice President – Pegasus CS Association",
    description:
      "Elected Vice President of the Pegasus Computer Science Association, leading technical events, workshops, and community outreach programs.",
    stats: "Leadership Role",
    icon: "👑",
  },
  {
    title: "Elected Sports Secretary",
    description:
      "Served as Sports Secretary, organizing and coordinating college-level sports events, managing teams, and promoting sportsmanship across campus.",
    stats: "Sports Leadership",
    icon: "⚽",
  },
];

// Leadership & Activities Data
export const leadershipList = [
  {
    title: "Vice President – Pegasus Computer Science Association",
    description:
      "Elected Vice President of the Pegasus Computer Science Association, leading technical events, workshops, and student outreach initiatives.",
    role: "Vice President",
    badge: "Leadership",
  },
  {
    title: "Class Representative (CR) – MCA",
    description:
      "Served as Class Representative, acting as the primary liaison between students and faculty, organizing class activities, and received Certificate of Appreciation.",
    role: "Class Representative",
    badge: "Co-Curricular",
  },
  {
    title: "Elected Sports Secretary",
    description:
      "Coordinated college-level sports events and tournaments, managing participation and promoting sportsmanship across the campus community.",
    role: "Sports Secretary",
    badge: "Sports",
  },
  {
    title: "School Sports Captain",
    description:
      "Led the school sports team as Captain, directing practice sessions, motivating teammates, and representing the school in inter-school competitions.",
    role: "Sports Captain",
    badge: "Leadership",
  },
  {
    title: "Best Outgoing Student Award",
    description:
      "Honored with the Best Outgoing Student award for outstanding academic performance, leadership contributions, and all-round excellence during the undergraduate program.",
    role: "Award Recipient",
    badge: "Academic",
  },
];

export const projects = [
  {
    id: "damage-reporting",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Public Infrastructure Damage Reporting System",
    description:
      "A web-based platform enabling citizens to report public infrastructure damage (roads, bridges, streetlights) with photo uploads and geo-tagging. Built with React frontend, Node.js/Express backend, MySQL database, and Flask-based AI damage detection model. Features role-based dashboards for citizens and administrators.",
    techTags: ["React.js", "Node.js", "Express.js", "MySQL", "Flask", "Python", "AI/ML"],
    links: {
      github: "https://github.com/Aishwaryababy/pidrs",
      demo: "https://pidrs-web.vercel.app",
    },
    isFlagship: true,
  },
  {
    id: "hostel-discovery",
    number: "02",
    badge: "🌟 Full Stack App",
    title: "Students City Relocation & Hostel Discovery Platform",
    description:
      "A full-stack web application for city-based hostel discovery and student relocation management. Features user authentication, interactive hostel search, city-based filtering, booking workflows, and role-based access control for students and hostel owners.",
    techTags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    links: {
      github: "https://github.com/Aishwaryababy/scrhdp",
      demo: "https://scrhdp.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "dog-breed",
    number: "03",
    badge: null,
    title: "Dog Breed Identification System",
    description:
      "An AI-powered web application that identifies dog breeds from uploaded images using a deep learning model built with TensorFlow and Keras. Features a clean React frontend and a Flask REST API backend for real-time breed classification with confidence scores.",
    techTags: ["Python", "TensorFlow", "Keras", "Flask", "React.js", "REST API"],
    links: {
      github: "https://github.com/Aishwaryababy",
    },
    isFlagship: false,
  },
  {
    id: "resume-builder",
    number: "04",
    badge: null,
    title: "Online Resume Builder",
    description:
      "A cloud-based resume builder that lets users create, customize, and download professional resumes in multiple templates. Built with a React frontend, Node.js backend, and MySQL for user data storage. Supports PDF export and real-time preview.",
    techTags: ["React.js", "Node.js", "MySQL", "HTML5", "CSS3", "JavaScript"],
    links: {
      github: "https://github.com/Aishwaryababy",
    },
    isFlagship: false,
  },
  {
    id: "optical-store",
    number: "05",
    badge: null,
    title: "Online Optical Store",
    description:
      "A full-stack e-commerce platform for an optical store featuring product catalog, cart management, user authentication, and order processing. Built with PHP, MySQL, and a responsive Bootstrap frontend.",
    techTags: ["PHP", "MySQL", "Bootstrap", "HTML5", "CSS3", "JavaScript"],
    links: {
      github: "https://github.com/Aishwaryababy",
    },
    isFlagship: false,
  },
  {
    id: "movers-packers",
    number: "06",
    badge: null,
    title: "Movers & Packers Management System",
    description:
      "A management system for a movers and packers company, enabling booking management, customer tracking, and service scheduling. Features a PHP/MySQL backend with a dynamic HTML/CSS/JS frontend.",
    techTags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    links: {
      github: "https://github.com/Aishwaryababy",
    },
    isFlagship: false,
  },
  {
    id: "pet-care",
    number: "07",
    badge: null,
    title: "Pet Care Management System",
    description:
      "A desktop-based Python application for managing pet care records, appointments, and owner profiles. Utilizes Tkinter for the GUI and MySQL for data persistence, with features for vet scheduling and treatment history.",
    techTags: ["Python", "Tkinter", "MySQL"],
    links: {
      github: "https://github.com/Aishwaryababy",
    },
    isFlagship: false,
  },
  {
    id: "movie-booking",
    number: "08",
    badge: null,
    title: "Online Movie Booking System",
    description:
      "An online ticket booking platform with seat selection, show scheduling, and payment simulation. Built with PHP and MySQL for the backend with a clean, responsive HTML/CSS/JavaScript frontend.",
    techTags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    links: {
      github: "https://github.com/Aishwaryababy",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "HTML – Web Development",
      issuer: "Aptech",
      icon: "🌐",
    },
    {
      name: "Build a Website Using ChatGPT",
      issuer: "Great Learning",
      icon: "🤖",
    },
    {
      name: "Adobe Illustrator",
      issuer: "Adobe",
      icon: "🎨",
    },
    {
      name: "Industrial Visit Certificate",
      issuer: "eMudhra",
      icon: "🏭",
    },
  ],
  viewAllUrl: certPdf,
};

// Experience / Internships Data
export const internshipsList = [
  {
    role: "Full Stack Development Intern",
    organization: "Unified Mentor",
    duration: "July 2026 – October 2026",
    skills: [
      "Developed full-stack web applications using React.js, Node.js, Express.js, and PostgreSQL.",
      "Implemented REST APIs, authentication, database integration, CRUD operations, image uploads, and responsive user interfaces.",
      "Worked on public infrastructure reporting and student hostel discovery/relocation applications, contributing to frontend and backend development.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST API", "CRUD", "Authentication"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Mount Carmel College, Bengaluru",
    university: "Bengaluru City University",
    score: "86.5%",
    year: "2024 – 2026",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "St. Paul's College, Bengaluru",
    university: "Bengaluru University",
    score: "CGPA 8.31",
    year: "2021 – 2024",
    icon: "🎓",
  },
  {
    degree: "Pre-University Course (PUC) – Science",
    institution: "Schoenstatt St. Mary's PU College",
    university: "",
    score: "83%",
    year: "2019 – 2021",
    icon: "📚",
  },
  {
    degree: "SSLC – 10th Grade",
    institution: "Schoenstatt St. Mary's High School",
    university: "CBSE",
    score: "72%",
    year: "2018 – 2019",
    icon: "📚",
  },
];

export const softSkillsList = [
  {
    name: "Leadership",
    icon: "👑",
    desc: "Led teams as VP of CS Association, Sports Captain, and Class Representative across multiple years.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Clear and concise communicator, serving as liaison between students and faculty as Class Representative.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Experienced in cross-functional teamwork through academic projects and extracurricular roles.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Skilled at breaking complex engineering challenges into clean, modular, and efficient solutions.",
  },
  {
    name: "Presentation Skills",
    icon: "🎤",
    desc: "Proficient at delivering technical presentations and project demonstrations to academic and professional audiences.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quick to pick up new technologies like TensorFlow, Flask, and modern React patterns.",
  },
  {
    name: "Creativity",
    icon: "🎨",
    desc: "Blending design sensibility with technical skills to deliver polished and user-friendly interfaces.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balancing MCA coursework, project development, leadership roles, and continuous skill building.",
  },
];

export const footerContent = {
  taglines: [
    "Full Stack Web Development",
    "Python · React.js · Node.js",
    "Scalable Web Applications",
  ],
  credential: "MCA · Mount Carmel College · 86.5%",
  copyright: `© ${new Date().getFullYear()} Aishwarya Baby | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
