"use client";

import {
  CheckCircle,
  Code,
  Database,
  Palette,
  Settings,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
      ],
    },
    design: {
      title: "UI/UX Design",
      icon: Palette,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 80 },
        { name: "Design Systems", level: 85 },
        { name: "Prototyping", level: 80 },
        { name: "User Research", level: 70 },
        { name: "Wireframing", level: 85 },
      ],
    },
    mobile: {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 65 },
        { name: "Expo", level: 75 },
        { name: "Mobile UI/UX", level: 85 },
      ],
    },
    tools: {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vercel", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 90 },
      ],
    },
  };

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    { name: "Google UX Design Certificate", issuer: "Google", year: "2023" },
    { name: "React Developer Certification", issuer: "Meta", year: "2023" },
    {
      name: "JavaScript Algorithms Certificate",
      issuer: "freeCodeCamp",
      year: "2022",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {t("skills.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                  activeCategory === key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[
              activeCategory as keyof typeof skillCategories
            ].skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-200"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-background rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full gradient-animated rounded-full transition-all duration-1000 ease-out shimmer-effect"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold mb-8">
            {t("skills.certifications")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{cert.name}</h4>
                <p className="text-muted-foreground text-sm mb-1">
                  {cert.issuer}
                </p>
                <p className="text-primary text-sm font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="font-heading text-2xl font-bold mb-8">
            {t("skills.otherSkills")}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile/Scrum",
              "Team Leadership",
              "Code Review",
              "Testing",
              "Performance Optimization",
              "SEO",
              "Accessibility",
              "DevOps",
              "Microservices",
              "GraphQL",
              "Redux",
              "Next.js",
              "Vue.js",
              "Sass/SCSS",
              "Webpack",
              "Babel",
              "Jest",
              "Cypress",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
