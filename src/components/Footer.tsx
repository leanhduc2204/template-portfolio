"use client";

import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Trang chủ", id: "home" },
    { name: "Giới thiệu", id: "about" },
    { name: "Kỹ năng", id: "skills" },
    { name: "Dự án", id: "projects" },
    { name: "Liên hệ", id: "contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@example.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-animated rounded-lg flex items-center justify-center glow-effect">
                <span className="text-primary-foreground font-bold text-sm">
                  D
                </span>
              </div>
              <span className="font-heading font-bold text-xl">Developer</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Tôi là một developer đam mê tạo ra những sản phẩm digital tuyệt
              vời. Chuyên về React, Next.js, Node.js và thiết kế UI/UX hiện đại.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl glass-effect text-muted-foreground transition-all duration-200 ${social.color} hover:scale-110 glow-effect`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Liên hệ</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>contact@example.com</p>
              <p>+84 123 456 789</p>
              <p>Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Developer. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>in Vietnam</span>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Lên đầu trang</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
