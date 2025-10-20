import { ProjectsData, Project } from "@/types/projects";

export async function getProjectsData(): Promise<ProjectsData> {
  try {
    // In production, this would be an API call
    // For now, we'll import the JSON file directly
    const data = await import("../../data/projects.json");
    return (data.default || data) as ProjectsData;
  } catch (error) {
    console.error("Error loading projects data:", error);
    // Return empty data structure as fallback
    return {
      projects: [],
      categories: [],
      stats: {
        totalProjects: 0,
        featuredProjects: 0,
        completedProjects: 0,
        inProgressProjects: 0,
        totalTechnologies: 0,
        averageProjectDuration: "0 months",
      },
    };
  }
}

export function getProjectsByCategory(projects: Project[], category: string) {
  if (category === "all") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(projects: Project[]) {
  return projects.filter((project) => project.featured);
}

export function getProjectsByStatus(projects: Project[], status: string) {
  return projects.filter((project) => project.status === status);
}

export function getUniqueTechnologies(projects: Project[]) {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.tech.forEach((tech: string) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

export function getProjectStats(projects: Project[]) {
  const stats = {
    totalProjects: projects.length,
    featuredProjects: projects.filter((p) => p.featured).length,
    completedProjects: projects.filter((p) => p.status === "completed").length,
    inProgressProjects: projects.filter((p) => p.status === "in-progress")
      .length,
    totalTechnologies: getUniqueTechnologies(projects).length,
    averageProjectDuration: calculateAverageDuration(projects),
  };
  return stats;
}

function calculateAverageDuration(projects: Project[]): string {
  if (projects.length === 0) return "0 months";

  const durations = projects.map((p) => {
    const match = p.duration.match(/(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  });

  const average =
    durations.reduce((sum, duration) => sum + duration, 0) / durations.length;
  return `${average.toFixed(1)} months`;
}
