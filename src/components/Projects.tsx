"use client";

import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Nền tảng thương mại điện tử hoàn chỉnh với giỏ hàng, thanh toán và quản lý đơn hàng.",
      image: "/api/placeholder/600/400",
      category: "fullstack",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Ứng dụng quản lý công việc với drag & drop, real-time collaboration và analytics.",
      image: "/api/placeholder/600/400",
      category: "frontend",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Dashboard hiển thị thông tin thời tiết với maps, charts và notifications.",
      image: "/api/placeholder/600/400",
      category: "frontend",
      tech: ["React", "Chart.js", "OpenWeather API", "Material-UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media API",
      description:
        "RESTful API cho mạng xã hội với authentication, posts và real-time messaging.",
      image: "/api/placeholder/600/400",
      category: "backend",
      tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description:
        "Ứng dụng ngân hàng di động với bảo mật cao và giao diện thân thiện.",
      image: "/api/placeholder/600/400",
      category: "mobile",
      tech: ["React Native", "Redux", "Biometric Auth", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 6,
      title: "AI Content Generator",
      description:
        "Công cụ tạo nội dung AI với machine learning và natural language processing.",
      image: "/api/placeholder/600/400",
      category: "fullstack",
      tech: ["Python", "FastAPI", "OpenAI API", "React"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
  ];

  const filters = [
    { key: "all", label: "Tất cả" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "fullstack", label: "Full-Stack" },
    { key: "mobile", label: "Mobile" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Dự án nổi bật
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Khám phá các dự án tôi đã thực hiện, từ ứng dụng web đến mobile, mỗi
            dự án đều thể hiện kỹ năng và sự sáng tạo của tôi.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                activeFilter === filter.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 ${
                project.featured ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative overflow-hidden ${
                  project.featured ? "h-64" : "h-48"
                }`}
              >
                <div className="w-full h-full gradient-animated opacity-30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 glass-effect rounded-2xl flex items-center justify-center mx-auto mb-4 glow-effect">
                      <Eye className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Project Screenshot</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background text-foreground rounded-full hover:bg-accent transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-border text-foreground rounded-xl font-semibold hover:bg-accent transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-muted text-muted-foreground rounded-2xl font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            <span>Xem thêm trên GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
