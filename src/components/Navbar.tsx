"use client";

import { Menu, Moon, Sun, X, Download, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { downloadCV } from "@/lib/cv";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleDownloadCV = () => {
    downloadCV();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: t("nav.home"), id: "home" },
    { name: t("nav.about"), id: "about" },
    { name: t("nav.skills"), id: "skills" },
    { name: t("nav.projects"), id: "projects" },
    { name: t("nav.contact"), id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-animated rounded-lg flex items-center justify-center glow-effect">
              <span className="text-primary-foreground font-bold text-sm">
                D
              </span>
            </div>
            <span className="font-heading font-bold text-xl">Developer</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Language Selector & CV Download & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
                className="flex items-center gap-2 px-3 py-2 glass-effect text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">
                  {language === "vi" ? "VI" : "EN"}
                </span>
              </button>
            </div>

            <button
              onClick={handleDownloadCV}
              className="hidden md:flex items-center gap-2 px-4 py-2 glass-effect text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>{t("nav.cv")}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-effect hover:bg-accent transition-all duration-200 hover:scale-110 glow-effect"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
              >
                <Download className="w-4 h-4" />
                {t("nav.cv")}
              </button>
              <button
                onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
                className="flex items-center gap-2 text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
              >
                <Globe className="w-4 h-4" />
                {language === "vi" ? "English" : "Tiếng Việt"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
