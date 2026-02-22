export interface Project {
  id: string;
  title: string;
  description: string;
  category: "websites" | "ui-ux" | "branding" | "marketing" | "development";
  gradient: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Brand {
  name: string;
  icon: React.ReactNode;
}
