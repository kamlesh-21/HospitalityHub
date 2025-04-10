// Types for data objects
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  location: string;
  propertyType: string;
  revenueIncrease: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  qualifications: string[];
}

export interface StrategicPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
}

// Services data
export const serviceCards: ServiceCard[] = [
  {
    title: "Revenue Optimization",
    description: "Strategic pricing, distribution, and sales strategies to maximize your hotel's revenue potential.",
    icon: "fa-chart-line",
    link: "/strategic-services",
  },
  {
    title: "Brand Partnerships",
    description: "Expert guidance on brand affiliation decisions, from staying independent to selecting the right franchise.",
    icon: "fa-handshake",
    link: "/strategic-services",
  },
  {
    title: "Operational Excellence",
    description: "Streamline operations, reduce costs, and enhance service quality through effective management systems.",
    icon: "fa-cogs",
    link: "/strategic-services",
  },
  {
    title: "Digital Marketing",
    description: "Targeted digital marketing strategies to increase direct bookings and reduce OTA dependency.",
    icon: "fa-bullhorn",
    link: "/strategic-services",
  },
];

// Case studies data
export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "Boutique Hotel Revenue Transformation",
    overview: "A 35-room boutique hotel in Goa was struggling with seasonal fluctuations and OTA dependency.",
    challenge: "The property was facing low occupancy in off-season months and paying high commission rates to OTAs, severely impacting profitability.",
    solution: "We implemented dynamic pricing strategies, diversified distribution channels, and created targeted marketing campaigns for shoulder seasons.",
    result: "42% increase in annual revenue and 15% reduction in OTA commissions within 8 months of implementation.",
    image: "/images/case-study-1.jpg",
    location: "Goa, India",
    propertyType: "Boutique Beach Resort",
    revenueIncrease: "42%",
  },
  {
    id: "cs2",
    title: "Business Hotel Brand Transformation",
    overview: "A 78-room business hotel in Pune was underperforming despite a prime location near tech parks.",
    challenge: "The hotel's independent status was leading to poor brand recognition, while competitors with international brand affiliations were capturing market share.",
    solution: "We conducted a comprehensive brand analysis and guided the hotel through the process of evaluating, selecting, and negotiating with international mid-scale brands.",
    result: "After rebranding, the property saw a 38% increase in ADR and 27% increase in corporate bookings within the first year.",
    image: "/images/case-study-2.jpg",
    location: "Pune, India",
    propertyType: "Business Hotel",
    revenueIncrease: "52%",
  },
  {
    id: "cs3",
    title: "Heritage Property Repositioning",
    overview: "A century-old property in Rajasthan was struggling to balance heritage preservation with modern guest expectations.",
    challenge: "The property had high operating costs, outdated systems, and was failing to capitalize on its unique heritage value proposition.",
    solution: "We developed a complete repositioning strategy, focusing on authentic heritage experiences while modernizing back-of-house operations.",
    result: "64% increase in ADR, 22% reduction in operational costs, and multiple awards for heritage hospitality excellence.",
    image: "/images/case-study-3.jpg",
    location: "Rajasthan, India",
    propertyType: "Heritage Palace Hotel",
    revenueIncrease: "64%",
  },
];

// Team members data
export const teamMembers: TeamMember[] = [
  {
    name: "Priya Bhargavi",
    title: "Founder & Principal Consultant",
    bio: "With over 15 years of experience in luxury hotel management and consulting, Priya has led revenue transformation projects for over 50 independent hotels across India. Her specialty lies in combining deep industry knowledge with practical, implementable solutions tailored to each property's unique situation.",
    image: "/images/team-lead.jpg",
    qualifications: [
      "Former Regional Director of Revenue for a leading international hotel chain",
      "Certified Revenue Management Executive (CRME)",
      "MBA in Hospitality Management from Cornell University",
      "Advisory board member for multiple hotel associations in India",
    ],
  },
];

// Strategic service pillars
export const strategicPillars: StrategicPillar[] = [
  {
    id: "revenue",
    title: "Revenue & Distribution Strategy",
    description: "Maximize your hotel's revenue potential through optimized pricing, distribution, and sales strategies.",
    icon: "fa-chart-line",
    services: [
      "Competitive market analysis",
      "Dynamic pricing strategy",
      "Distribution channel optimization",
      "Revenue management system implementation",
      "Sales team training and development",
      "Group business strategy",
    ],
  },
  {
    id: "brand",
    title: "Brand & Positioning",
    description: "Define your property's unique value proposition and strategically position it in the market.",
    icon: "fa-tag",
    services: [
      "Brand identity development",
      "Franchise evaluation and selection",
      "Independent vs. flag analysis",
      "Guest experience design",
      "Market positioning strategy",
      "Brand standards implementation",
    ],
  },
  {
    id: "operations",
    title: "Operational Excellence",
    description: "Streamline operations, reduce costs, and enhance service quality through effective management systems.",
    icon: "fa-cogs",
    services: [
      "Standard operating procedures development",
      "Cost optimization analysis",
      "Service quality enhancement",
      "Technology systems integration",
      "Staff productivity improvement",
      "Departmental reviews and optimization",
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing & Direct Bookings",
    description: "Build a strong online presence and reduce OTA dependency through targeted digital marketing strategies.",
    icon: "fa-bullhorn",
    services: [
      "Website optimization for conversions",
      "Search engine marketing strategy",
      "Social media marketing",
      "Email marketing campaigns",
      "Online reputation management",
      "Direct booking incentive programs",
    ],
  },
  {
    id: "pre-opening",
    title: "Pre-Opening & Development",
    description: "From concept to opening day, ensure your new property is positioned for success from the start.",
    icon: "fa-building",
    services: [
      "Concept development and market validation",
      "Feasibility studies and financial modeling",
      "Brand standards development",
      "Pre-opening budget management",
      "Systems selection and implementation",
      "Staff recruitment and training",
    ],
  },
  {
    id: "asset",
    title: "Asset Management",
    description: "Maximize the value of your hotel asset through strategic oversight and optimization.",
    icon: "fa-briefcase",
    services: [
      "Performance monitoring and analysis",
      "Owner representation",
      "Capital expenditure planning",
      "Management company selection and oversight",
      "Financial reporting and analysis",
      "Value enhancement strategies",
    ],
  },
];