export interface PolicySector {
  slug: string;
  title: string;
  iconName: string;
  headline: string;
  summary: string;
  pillars: {
    title: string;
    points: string[];
  }[];
}

export const policyDatabase: PolicySector[] = [
  {
    slug: "economy",
    title: "Economy & Jobs",
    iconName: "TrendingUp",
    headline: "Unlocking Innovation: A Blueprint for Shared Wealth",
    summary: "Our economic plan focuses on double digit growth through localization of manufacturing, support for digital technology hubs, and trade partnerships that lift local entrepreneurs.",
    pillars: [
      {
        title: "Industrial Growth Hubs",
        points: [
          "Establish special economic manufacturing zones in each geopolitical area",
          "Provide dedicated solar and gas utility connections for production clusters",
          "Reduce licensing fees for early stage startups during their first two years"
        ]
      },
      {
        title: "Digital Economy Pipeline",
        points: [
          "Deploy high speed fiber optic lines to secondary schools and trading centers",
          "Set up digital incubation labs offering software programming fellowships",
          "Form international remote work partnerships to connect youth with global jobs"
        ]
      }
    ]
  },
  {
    slug: "education",
    title: "Education & Skills",
    iconName: "BookOpen",
    headline: "Learning for the Future: Modern Skills for Every Child",
    summary: "Reforming educational foundations with modernized school curricula, training resources for teachers, and affordable access to vocational trades.",
    pillars: [
      {
        title: "Curriculum Modernization",
        points: [
          "Introduce basic data analysis, critical logic, and code literacy in primary schools",
          "Integrate environmental sciences and modern agricultural techniques",
          "Promote creative industries, visual media design, and culinary arts training"
        ]
      },
      {
        title: "Teacher Empowerment",
        points: [
          "Offer competitive career salaries to attract top tier educators to rural outposts",
          "Conduct annual professional development clinics on modern learning methods",
          "Provide laptops and teaching software suites to public school teachers"
        ]
      }
    ]
  },
  {
    slug: "security",
    title: "Security & Justice",
    iconName: "Shield",
    headline: "Protecting Communities: Securing Our Borders and Streets",
    summary: "Ensuring public safety through decentralized community policing, improved training for security forces, and modern data tracking tools.",
    pillars: [
      {
        title: "Community Led Policing",
        points: [
          "Recruit and train security officers directly from their host areas",
          "Build joint civic boards to review police conduct and build public trust",
          "Integrate neighborhood watch networks with national communications systems"
        ]
      },
      {
        title: "Technological Border Control",
        points: [
          "Deploy drone surveillance teams to monitor key trade routes and borders",
          "Establish digital databases to track security alerts and incident patterns",
          "Provide specialized tactical training to intercept illegal imports"
        ]
      }
    ]
  },
  {
    slug: "infrastructure",
    title: "Infrastructure & Energy",
    iconName: "Server",
    headline: "Connecting Nigeria: Roads, Clean Energy, and Ports",
    summary: "Constructing modern transit networks and expanding clean energy grids to power homes and factories reliably.",
    pillars: [
      {
        title: "Clean Hydro and Solar Grids",
        points: [
          "Build hybrid solar mini grids to supply rural hospitals and farms",
          "Refurbish hydro electric dams to increase baseline grid efficiency",
          "Encourage private investments in localized gas to power facilities"
        ]
      },
      {
        title: "Transportation Corridors",
        points: [
          "Upgrade critical interstate highways to durable concrete materials",
          "Complete cargo rail links connecting deep sea terminals with northern markets",
          "Dredge commercial inland waterways to facilitate safe barge transport"
        ]
      }
    ]
  },
  {
    slug: "agriculture",
    title: "Agriculture & Food Security",
    iconName: "Leaf",
    headline: "Feeding the Nation: Mechanized Farming and Storage Solutions",
    summary: "Achieving food security by helping farmers access machinery, constructing storage facilities, and offering credit systems.",
    pillars: [
      {
        title: "Harvest Preservation",
        points: [
          "Construct solar powered cold storage centers near major food hubs",
          "Provide affordable grain dryer rentals to prevent post harvest decay",
          "Link cooperative farmers with secure wholesale food packaging chains"
        ]
      },
      {
        title: "Mechanization and Credit",
        points: [
          "Set up regional tractor leasing centers offering low daily rates",
          "Launch zero interest seed and organic fertilizer credit accounts",
          "Provide mobile agronomy tips via basic text messaging services"
        ]
      }
    ]
  },
  {
    slug: "healthcare",
    title: "Healthcare Access",
    iconName: "Heart",
    headline: "Healthy Citizens: Equipping Clinics, Empowering Medics",
    summary: "Improving primary health infrastructure and launching insurance schemes to protect vulnerable citizens.",
    pillars: [
      {
        title: "Primary Health Upgrades",
        points: [
          "Ensure every ward has a clinic containing essential tools and solar power",
          "Maintain digital inventory monitors to prevent drug stockouts",
          "Deploy mobile clinics to treat isolated communities periodically"
        ]
      },
      {
        title: "Universal Basic Insurance",
        points: [
          "Launch a subsidized state scheme covering basic surgical operations",
          "Provide free prenatal care and childhood immunization sets",
          "Offer mental health support sessions at community health outposts"
        ]
      }
    ]
  }
];
