export interface CaseStudy {
  id: string;
  title: string;
  result: string;
  resultType: 'revenue' | 'rebranding' | 'cost-reduction' | 'other';
  excerpt: string;
  imageUrl: string;
  slug: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  experience: {
    company: string;
    role: string;
    period: string;
  }[];
}

export interface StrategicPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  hotel: string;
  message: string;
}
