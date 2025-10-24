"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Users,
  Clock,
  Star,
} from "lucide-react";
import { ProjectsData } from "@/types/projects";
import { getProjectsData, getProjectsByCategory } from "@/lib/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProjectsData();
        setProjectsData(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              {t("projects.featured")}
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!projectsData) {
    return (
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              {t("projects.featured")}
            </h2>
            <p className="text-muted-foreground">{t("projects.error")}</p>
          </div>
        </div>
      </section>
    );
  }

  const filteredProjects = getProjectsByCategory(
    projectsData.projects,
    activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {t("projects.featured")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectsData.categories.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                activeFilter === filter.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {t(`projects.${filter.key}`)}
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
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="px-3 py-1 gradient-animated text-primary-foreground text-xs font-semibold rounded-full glow-effect">
                        <Star className="w-3 h-3 inline mr-1" />
                        Featured
                      </span>
                    )}
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === "completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : project.status === "in-progress"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {project.status === "completed"
                        ? "Hoàn thành"
                        : project.status === "in-progress"
                        ? "Đang phát triển"
                        : "Kế hoạch"}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{project.teamSize}</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="font-medium">{project.role}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 glass-effect text-muted-foreground text-xs font-medium rounded-full hover:bg-accent transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-foreground">
                      {t("projects.highlights")}
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.highlights
                        .slice(0, 2)
                        .map((highlight: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 gradient-animated text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-200 glow-effect"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 glass-effect border border-border text-foreground rounded-xl font-semibold hover:bg-accent transition-all duration-200 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 mb-12">
          <h3 className="font-heading text-2xl font-bold text-center mb-8">
            {t("projects.stats")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl glass-effect">
              <div className="text-3xl font-bold text-primary mb-2">
                {projectsData.stats.totalProjects}
              </div>
              <div className="text-sm text-muted-foreground">
                {t("projects.totalProjects")}
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl glass-effect">
              <div className="text-3xl font-bold text-primary mb-2">
                {projectsData.stats.featuredProjects}
              </div>
              <div className="text-sm text-muted-foreground">
                {t("projects.featuredProjects")}
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl glass-effect">
              <div className="text-3xl font-bold text-primary mb-2">
                {projectsData.stats.completedProjects}
              </div>
              <div className="text-sm text-muted-foreground">
                {t("projects.completedProjects")}
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl glass-effect">
              <div className="text-3xl font-bold text-primary mb-2">
                {projectsData.stats.totalTechnologies}
              </div>
              <div className="text-sm text-muted-foreground">
                {t("projects.totalTechnologies")}
              </div>
            </div>
          </div>
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 glass-effect text-muted-foreground rounded-2xl font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105 glow-effect"
          >
            <Github className="w-5 h-5" />
            <span>{t("projects.viewMore")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
