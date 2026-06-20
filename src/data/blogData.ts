export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Education" | "Economy" | "Infrastructure" | "Security" | "Healthcare" | "General";
  date: string;
  readTime: string;
  imageUrl: string;
  stateId?: string; // Optional reference to a specific state
}

export const blogDatabase: BlogPost[] = [
  {
    slug: "rebuilding-education-for-a-stronger-tomorrow",
    title: "Rebuilding Education for a Stronger Tomorrow",
    excerpt: "Our children deserve more than promises. Here is how we will transform primary and vocational education across Nigeria.",
    content: `Education forms the bedrock of national progress. In our recent tour of local government areas, we noticed a recurring challenge: schools lacking modern learning tools and technical vocational training resources.

Our administration plans to address this immediately through a three pronged education reform:
1: Modernizing the curriculum: We will introduce computational thinking, basic logic, and climate awareness in our primary schools.
2: Supporting our educators: Teachers will receive competitive career salaries and annual teaching workshops, alongside digital laptops.
3: Revitalizing vocational guilds: We will fund training hubs for software development, advanced carpentry, and mechanical automation.

Together, we can build a schooling system that prepares our children for tomorrow's jobs, starting from the grass roots level.`,
    category: "Education",
    date: "June 15, 2026",
    readTime: "4 min read",
    imageUrl: "/blog/education.jpg"
  },
  {
    slug: "new-economic-blueprint-for-nigeria",
    title: "A New Economic Blueprint for Nigeria",
    excerpt: "Jobs, innovation, and direct support for small businesses: our plan for inclusive prosperity and shared wealth.",
    content: `Nigeria's economic potential lies in its small merchants and young tech builders. However, high utility costs and complex regulatory hurdles prevent these groups from expanding.

Our economic blueprint aims to resolve these constraints:
1: Stable industrial power: We will construct dedicated solar and gas mini grids to supply regional manufacturing parks directly.
2: Micro start up incentives: Businesses in their first two years will enjoy simplified tax registrations and fee waivers.
3: Digital export pipelines: We are partnering with international freelance networks to train and connect youth with remote digital jobs.

Inclusive growth means creating an environment where every citizen can build sustainable wealth.`,
    category: "Economy",
    date: "June 10, 2026",
    readTime: "5 min read",
    imageUrl: "/blog/economy.jpg"
  },
  {
    slug: "building-infrastructure-that-connects-us",
    title: "Building Infrastructure That Connects Us",
    excerpt: "From roads to power, here is how we will construct a logistics network that works better for everyone.",
    content: `A divided transport network limits trade. It increases food prices because farmers struggle to move harvests to urban markets.

Our infrastructure plan focuses on robust transport corridors:
1: Interstate concrete roads: We will build durable highways connecting regional industrial zones.
2: Inland waterway ports: Dredging commercial rivers will allow cheap barge transport of bulk agricultural goods.
3: Solar rail integration: Upgrading railway passenger terminals with solar utility installations to ensure constant service.

By building reliable logistics links, we connect people, trade markets, and opportunities.`,
    category: "Infrastructure",
    date: "June 05, 2026",
    readTime: "6 min read",
    imageUrl: "/blog/infrastructure.jpg"
  },
  {
    slug: "kano-irrigation-hub-milestone",
    title: "Focus: Kano Irrigation Corridor Milestones",
    excerpt: "Upgrading canals to support year round high yield farming: a look at our agriculture policy in action.",
    content: `Kano State has always been a key center for agricultural commerce. To boost food security, we must ensure farmers can grow crops during both dry and wet seasons.

Our team recently visited local farming communities to inspect canal layouts:
1: Solar irrigation pumps: Installing solar powered pumping units reduces operational fuel costs for local growers.
2: Storage silos: Building temperature controlled warehouses to minimize post harvest crop spoilage.
3: Local cooperative credit: Providing zero interest agricultural credit accounts to purchase fertilizers.

Through modern mechanization, we are transforming farming into a highly profitable career for youth.`,
    category: "Economy",
    date: "May 28, 2026",
    readTime: "4 min read",
    imageUrl: "/blog/kano-farm.jpg",
    stateId: "kano"
  },
  {
    slug: "lagos-tech-hub-initiatives",
    title: "Lagos Tech Corridor Partnership Proposals",
    excerpt: "Building incubator spaces and digital skills programs to support youth technology careers.",
    content: `Lagos remains the center of tech innovation in Africa. Our plan is to scale this innovation by establishing tech corridors across other regions.

We have proposed a digital development framework:
1: Internet access corridors: Partnering with fiber providers to offer free high speed internet in study centers.
2: Software engineering fellowships: Funding mentorship programs that teach programming and mobile design.
3: Small business grants: Distributing seed capital to early stage developers building local solutions.

By investing in our youth, we build a highly skilled workforce ready for global opportunities.`,
    category: "Education",
    date: "May 22, 2026",
    readTime: "3 min read",
    imageUrl: "/blog/lagos-tech.jpg",
    stateId: "lagos"
  }
];
