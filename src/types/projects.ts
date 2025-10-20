export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "frontend" | "backend" | "fullstack" | "mobile";
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: "completed" | "in-progress" | "planned";
  year: string;
  duration: string;
  teamSize: number;
  role: string;
  highlights: string[];
}

export interface ProjectCategory {
  key: string;
  label: string;
  icon: string;
}

export interface ProjectStats {
  totalProjects: number;
  featuredProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  totalTechnologies: number;
  averageProjectDuration: string;
}

export interface ProjectsData {
  projects: Project[];
  categories: ProjectCategory[];
  stats: ProjectStats;
}
