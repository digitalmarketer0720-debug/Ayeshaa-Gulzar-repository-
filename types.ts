export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  period: string;
  location?: string;
  highlights?: string[];
  status?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Shopify' | 'Web Development' | 'Frontend' | 'All';
  description: string;
  tags: string[];
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPlaceholder?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  features: string[];
  iconName: string;
  deliverables?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
