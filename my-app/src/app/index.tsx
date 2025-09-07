"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  ArrowRight,
  Code2,
  Server,
  Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PROFILE = {
  name: "Ганзаяа",
  role: "Full-Stack Developer",
  location: "Ulaanbaatar, MN",
  email: "ganzayabudmir@gmail.com",
  socials: {
    github: "https://github.com/zayabdmr",
    linkedin: "https://www.linkedin.com/in/ganzaya-budmir-799011372/",
  },
  summary:
    "Сайн байна уу? Намайг Ганзаяа гэдэг, би Pinecone академийн сурагч. Код бичихийг би зөвхөн техник ур чадвар бус, хүмүүсийн амьдралыг арай амар, хялбар болгох шийдэл бүтээх боломж гэж хардаг.",
};

const SKILLS = [
  {
    group: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Prisma",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "REST API",
    ],
    icon: <Server className="h-4 w-4" />,
  },
  {
    group: "Tools & Others",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "VS Code",
      "Jest",
      "JWT",
      "Bcrypt",
    ],
    icon: <Settings className="h-4 w-4" />,
  },
];

const EXPERIENCE = [
  {
    company: "Golomt bank",
    role: "Харилцагчийн зөвлөх",
    period: "2024.12 – 2025.03",
  },
];

const PROJECTS = [
  {
    title: "Weather Web Application",
    blurb: "Цаг агаарын мэдээллийг харуулдаг веб сайт.",
    tags: ["Next.js", "JavaScript", "Tailwind CSS"],
    links: {
      demo: "https://weather-ashen-alpha.vercel.app/",
      repo: "https://github.com/zayabdmr/weather",
    },
    image: "weather.png",
  },
  {
    title: "Movie Web Application",
    blurb: "Кино мэдээллийг нэг дороос авах боломжтой.",
    tags: ["Typescript", "Next.js", "Tailwind CSS"],
    links: {
      demo: "https://movie-alpha-ten-36.vercel.app/",
      repo: "https://github.com/zayabdmr/Movie",
    },
    image: "movie.png",
  },
  {
    title: "Food Delivery",
    blurb: "Цахим хоол хүргэлтийн веб сайт.",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    links: {
      demo: "https://food-delivery-im9q.vercel.app/",
      repo: "https://github.com/zayabdmr/Food-Delivery",
    },
    image: "food.png",
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
    {children}
  </h2>
);

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <Button variant="ghost" size="icon" onClick={() => setDark((d) => !d)}>
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};

const Header: React.FC = () => (
  <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#home" className="font-semibold tracking-tight text-xl">
        {PROFILE.name}
      </a>
      <nav className="hidden sm:flex gap-6 text-sm">
        <a href="#about" className="hover:underline">
          Тухай
        </a>
        <a href="#skills" className="hover:underline">
          Ур чадвар
        </a>
        <a href="#experience" className="hover:underline">
          Туршлага
        </a>
        <a href="#projects" className="hover:underline">
          Төслүүд
        </a>
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <a href={`mailto:${PROFILE.email}`} className="hidden sm:block">
          <Button size="sm">
            <Mail className="mr-2 h-4 w-4" /> Холбоо
          </Button>
        </a>
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section id="home" className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">{PROFILE.role}</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {PROFILE.summary}
      </p>
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <Button size="lg">
          {PROFILE.email} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <a href={PROFILE.socials.github} target="_blank" rel="noreferrer">
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
        </a>
        <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">
          <Button variant="outline">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Button>
        </a>
      </div>
    </motion.div>
  </section>
);

const Skills: React.FC = () => (
  <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
    <SectionTitle>Ур чадвар</SectionTitle>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SKILLS.map((s) => (
        <Card key={s.group} className="hover:shadow-xl transition rounded-xl">
          <CardHeader className="flex flex-row items-center gap-3 border-b pb-3">
            <div className="p-2 rounded-md bg-muted">{s.icon}</div>
            <CardTitle>{s.group}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 mt-4">
            {s.items.map((i) => (
              <Badge key={i} variant="secondary">
                {i}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const Experience: React.FC = () => (
  <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
    <SectionTitle>Ажлын туршлага</SectionTitle>
    <div className="grid gap-4">
      {EXPERIENCE.map((exp, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>
              {exp.role} · {exp.company}
            </CardTitle>
            <CardDescription>{exp.period}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  </section>
);

const Projects: React.FC = () => (
  <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
    <SectionTitle>Төслүүд</SectionTitle>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((p, idx) => (
        <Card
          key={idx}
          className="group overflow-hidden hover:shadow-xl transition rounded-xl"
        >
          <div className="overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle>{p.title}</CardTitle>
            <CardDescription>{p.blurb}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3 text-sm">
              <a
                href={p.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
              >
                Demo <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={p.links.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
              >
                Code <Github className="h-3.5 w-3.5" />
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <footer className="border-t py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex justify-between text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
          <a href="#home" className="hover:underline">
            Дээш очих
          </a>
        </div>
      </footer>
    </div>
  );
}
