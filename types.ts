
export interface PrototypeItem {
  id: string;
  icon: string;
  title: string;
  slogan: string;
  description: string;
  keyValues: string[];
  link: string;
  serviceLink?: string; // New: Direct service URL
  disclaimer?: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
