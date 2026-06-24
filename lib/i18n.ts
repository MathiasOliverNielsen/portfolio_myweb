export type Language = "da" | "en";

export const translations: Record<Language, Record<string, string>> = {
  da: {
    // Navigation
    "nav.home": "Hjem",
    "nav.about": "Om mig",
    "nav.services": "Ydelser",
    "nav.tech": "Tech Stack",
    "nav.contact": "Kontakt",

    // Hero
    "hero.greeting": "Hej, jeg er Mathias",
    "hero.tagline": "Jeg arbejder på dit",
    "hero.word1": "app",
    "hero.word2": "server",
    "hero.word3": "environment",
    "hero.location": "Aalborg, Danmark",

    // About
    "about.title": "Om mig",
    "about.intro":
      "Jeg er en freelance web developer fra Aalborg med passion for at bygge moderne, responsive websider og applikationer. Mit fokus er på clean code, brugeroplevelse og performance.",
    "about.description":
      "Med erfaring inden for frontend og full-stack udvikling hjælper jeg virksomheder og startups med at få deres idéer til live. Jeg kombinerer tekniske færdigheder med forståelse for dine business-mål.",

    // Tech Stack
    "tech.title": "Tech Stack",
    "tech.description": "Værktøjer og teknologier jeg bruger dagligt",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.tools": "Værktøjer",

    // Services
    "services.title": "Ydelser",
    "services.description": "Hvad jeg tilbyder",
    "services.web": "Web Development",
    "services.web_desc": "Moderne websites og web apps med React, Next.js og TypeScript",
    "services.backend": "Backend Development",
    "services.backend_desc":
      "Robust backend-løsninger med Node.js, PostgreSQL og MongoDB",
    "services.consulting": "Teknisk Konsultering",
    "services.consulting_desc":
      "Hjælp til at planlægge og implementere dine tekniske løsninger",
    "services.optimization": "Performance Optimization",
    "services.optimization_desc":
      "Forbedring af hastighed, SEO og brugeroplevelse",

    // Contact
    "contact.title": "Kontakt mig",
    "contact.description":
      "Har du et projekt i tankerne? Kontakt mig med detaljer om dine behov.",
    "contact.name": "Navn",
    "contact.email": "Email",
    "contact.subject": "Emne",
    "contact.message": "Besked",
    "contact.send": "Send besked",
    "contact.email_subject": "Projektforespørgsel",
    "contact.address": "Aalborg, Danmark",
    "contact.email_text": "hej@mathiasnielsen.dk",

    // Footer
    "footer.year": "2024",
    "footer.rights": "Alle rettigheder forbeholdt",

    // Language
    "lang.da": "Dansk",
    "lang.en": "English",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.tech": "Tech Stack",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm Mathias",
    "hero.tagline": "I work on your",
    "hero.word1": "app",
    "hero.word2": "server",
    "hero.word3": "environment",
    "hero.location": "Aalborg, Denmark",

    // About
    "about.title": "About Me",
    "about.intro":
      "I'm a freelance web developer from Aalborg with a passion for building modern, responsive websites and applications. My focus is on clean code, user experience, and performance.",
    "about.description":
      "With experience in frontend and full-stack development, I help companies and startups bring their ideas to life. I combine technical skills with an understanding of your business goals.",

    // Tech Stack
    "tech.title": "Tech Stack",
    "tech.description": "Tools and technologies I use daily",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.tools": "Tools",

    // Services
    "services.title": "Services",
    "services.description": "What I offer",
    "services.web": "Web Development",
    "services.web_desc":
      "Modern websites and web apps with React, Next.js, and TypeScript",
    "services.backend": "Backend Development",
    "services.backend_desc":
      "Robust backend solutions with Node.js, PostgreSQL, and MongoDB",
    "services.consulting": "Technical Consulting",
    "services.consulting_desc":
      "Help planning and implementing your technical solutions",
    "services.optimization": "Performance Optimization",
    "services.optimization_desc":
      "Improve speed, SEO, and user experience of your applications",

    // Contact
    "contact.title": "Get in touch",
    "contact.description":
      "Have a project in mind? Contact me with details about your needs.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.email_subject": "Project Inquiry",
    "contact.address": "Aalborg, Denmark",
    "contact.email_text": "hej@mathiasnielsen.dk",

    // Footer
    "footer.year": "2024",
    "footer.rights": "All rights reserved",

    // Language
    "lang.da": "Dansk",
    "lang.en": "English",
  },
};

export const techStack = [
  {
    name: "Next.js",
    url: "https://nextjs.org",
    category: "frontend",
  },
  {
    name: "React",
    url: "https://react.dev",
    category: "frontend",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    category: "frontend",
  },
  {
    name: "SCSS",
    url: "https://sass-lang.com",
    category: "frontend",
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
    category: "backend",
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com",
    category: "backend",
  },
  {
    name: "Figma",
    url: "https://www.figma.com",
    category: "tools",
  },
  {
    name: "Claude Code",
    url: "https://github.com/anthropics/claude-code",
    category: "tools",
  },
] as const satisfies readonly { name: string; url: string; category: "frontend" | "backend" | "tools" }[];
