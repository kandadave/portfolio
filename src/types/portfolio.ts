export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "ai-rag" | "full-stack" | "tools";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  badge?: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillGroup {
  id: string;
  title: string;
  iconName: "brain" | "code" | "server" | "shield";
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}
