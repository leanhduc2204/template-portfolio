"use client";

import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { downloadCV } from "@/lib/cv";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const result = downloadCV();
    if (result.success) {
      // You could add a toast notification here
      console.log(result.message);
    } else {
      console.error(result.message);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 gradient-animated opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,var(--primary),var(--accent),var(--secondary),var(--primary))] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full gradient-animated p-1 shadow-2xl float-animation">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center glass-effect">
                <span className="text-4xl font-bold gradient-text">D</span>
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text neon-text">{t("hero.title")}</span>
          </h1>

          <h2
            className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.subtitle")}
          </h2>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 gradient-animated text-primary-foreground rounded-2xl font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl glow-effect"
            >
              {t("hero.viewProjects")}
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 glass-effect border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              {t("hero.downloadCV")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 glass-effect border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
            >
              {t("hero.contact")}
            </button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl glass-effect hover:bg-accent transition-all duration-200 hover:scale-110 glow-effect"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl glass-effect hover:bg-accent transition-all duration-200 hover:scale-110 glow-effect"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-2xl glass-effect hover:bg-accent transition-all duration-200 hover:scale-110 glow-effect"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="p-3 rounded-full bg-muted hover:bg-accent transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
