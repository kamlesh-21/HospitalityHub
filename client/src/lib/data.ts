import { CaseStudy, ServiceCard, TeamMember, StrategicPillar } from './types';

export const serviceCards: ServiceCard[] = [
  {
    id: "revenue-fix",
    title: "Hotel Revenue Fix",
    description: "We identify and fix revenue leaks across your property operations, ensuring maximum profitability with minimal investment.",
    icon: "fa-chart-line",
    features: [
      "OTA Optimization & Channel Management",
      "Direct Booking Growth Strategies",
      "Revenue Leakage Control & Prevention"
    ],
    ctaText: "Get a Revenue Assessment",
    ctaLink: "/contact"
  },
  {
    id: "brand-partnerships",
    title: "Brand Partnerships",
    description: "We help independent hotels evaluate, negotiate, and implement successful brand partnerships to accelerate growth.",
    icon: "fa-handshake",
    features: [
      "Franchise Evaluation & Negotiation",
      "Management Deal Structuring",
      "Complete Rebranding Strategy"
    ],
    ctaText: "Explore Brand Options",
    ctaLink: "/strategic-services"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "oceanview-resort",
    title: "Oceanview Boutique Resort",
    result: "+43% Revenue Growth",
    resultType: "revenue",
    excerpt: "Implemented revenue optimization and direct booking strategy, resulting in 43% growth within 6 months.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "oceanview-resort"
  },
  {
    id: "city-center-hotel",
    title: "City Center Heritage Hotel",
    result: "Successful Rebranding",
    resultType: "rebranding",
    excerpt: "Guided transition from independent to branded property, negotiating favorable terms with minimal franchise fees.",
    imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "city-center-hotel"
  },
  {
    id: "mountain-retreat",
    title: "Mountain Retreat Lodge",
    result: "28% Cost Reduction",
    resultType: "cost-reduction",
    excerpt: "Identified operational inefficiencies and implemented streamlined processes, reducing costs while improving guest experience.",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "mountain-retreat"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "kamlesh",
    name: "Kamlesh Kumar",
    role: "Founder & Principal Consultant",
    imageSrc: "https://images.unsplash.com/photo-1556157382-97eda2f9e946?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    experience: [
      {
        company: "OYO Hotels",
        role: "VP of Revenue Strategy",
        period: "2018-2022"
      },
      {
        company: "Marriott International",
        role: "Regional Revenue Director",
        period: "2012-2018"
      },
      {
        company: "Travel & Leisure Co.",
        role: "Senior Operations Manager",
        period: "2008-2012"
      }
    ]
  }
];

export const strategicPillars: StrategicPillar[] = [
  {
    id: "plan",
    title: "PLAN",
    description: "Feasibility studies, market analysis, and pre-launch strategy for new properties.",
    icon: "fa-clipboard-list",
    features: [
      "Market Evaluation",
      "Property Setup",
      "Pre-Launch Strategy"
    ]
  },
  {
    id: "operate",
    title: "OPERATE",
    description: "Streamline operations, implement SOPs, and conduct leakage audits.",
    icon: "fa-cogs",
    features: [
      "SOP Development",
      "Operational Audits",
      "Staff Training"
    ]
  },
  {
    id: "grow",
    title: "GROW",
    description: "Digital marketing, expansion planning, and multi-property strategies.",
    icon: "fa-chart-bar",
    features: [
      "Digital Strategy",
      "Expansion Planning",
      "Market Repositioning"
    ]
  },
  {
    id: "manage",
    title: "MANAGE",
    description: "Full property management services for select clientele.",
    icon: "fa-building",
    features: [
      "Full Management",
      "Performance Tracking",
      "Investor Reporting"
    ]
  }
];
