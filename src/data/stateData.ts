export interface StateInitiative {
  category: "high-impact" | "active-project" | "listening";
  title: string;
  description: string;
}

export interface StateData {
  id: string;
  name: string;
  population: string;
  lgaCount: number;
  annualBudget: string;
  summary: string;
  initiatives: StateInitiative[];
}

export const stateDatabase: Record<string, StateData> = {
  abia: {
    id: "abia",
    name: "Abia",
    population: "3.7 million",
    lgaCount: 17,
    annualBudget: "N170.4B (2024)",
    summary: "Empowering regional manufacturing and agricultural value chain expansions in the East.",
    initiatives: [
      { category: "high-impact", title: "Aba Industrial Hub Revival", description: "Providing dedicated power and infrastructure support to small businesses and makers." },
      { category: "active-project", title: "Palm Oil Processing Plant", description: "Enabling local farmers to refine and export value added products." },
      { category: "listening", title: "Umuahia Town Hall Gathering", description: "Listening to community feedback on healthcare delivery and primary education systems." }
    ]
  },
  adamawa: {
    id: "adamawa",
    name: "Adamawa",
    population: "4.2 million",
    lgaCount: 21,
    annualBudget: "N135.2B (2024)",
    summary: "Pioneering climate smart agriculture and regional youth digital hubs in the North East.",
    initiatives: [
      { category: "high-impact", title: "Solar Irrigation Initiative", description: "Installing localized solar pumps to support dry season farming along the Benue valley." },
      { category: "active-project", title: "Yola Digital Academy", description: "Training young people in web development and design skills." },
      { category: "listening", title: "Mubi Border Trade Dialogue", description: "Gathering merchant feedback on cross border commerce regulations." }
    ]
  },
  "akwa-ibom": {
    id: "akwa-ibom",
    name: "Akwa Ibom",
    population: "5.5 million",
    lgaCount: 31,
    annualBudget: "N520.7B (2024)",
    summary: "Strengthening blue economy sectors and expanding maritime opportunities.",
    initiatives: [
      { category: "high-impact", title: "Deep Sea Port Logistics Plan", description: "Driving regional container hub investments to spark local employment." },
      { category: "active-project", title: "Coconut Refinery Activation", description: "Commercial processing of coconut oils for export markets." },
      { category: "listening", title: "Uyo Creative Arts Hub Consultation", description: "Co-creating opportunities for creative industry professionals and media builders." }
    ]
  },
  anambra: {
    id: "anambra",
    name: "Anambra",
    population: "5.8 million",
    lgaCount: 21,
    annualBudget: "N290.3B (2024)",
    summary: "Accelerating technology integration and commercial infrastructure growth.",
    initiatives: [
      { category: "high-impact", title: "Onitsha Tech District", description: "Co-funding incubation labs and seed funding for eastern innovators." },
      { category: "active-project", title: "Erosion Control Masterplan", description: "Implementing biological and engineering solutions to protect communities." },
      { category: "listening", title: "Nnewi Manufacturers Roundtable", description: "Addressing raw material import concerns and power supply expectations." }
    ]
  },
  bauchi: {
    id: "bauchi",
    name: "Bauchi",
    population: "7.2 million",
    lgaCount: 20,
    annualBudget: "N160.8B (2024)",
    summary: "Boosting eco tourism assets and sustainable livestock management.",
    initiatives: [
      { category: "high-impact", title: "Yankari Conservation Infrastructure", description: "Upgrading facilities to attract global eco tourism revenues." },
      { category: "active-project", title: "Modern Veterinary Clinics", description: "Improving cattle health and disease control networks." },
      { category: "listening", title: "Azare Local Farmers Assembly", description: "Hearing inputs on seed subsidies and crop storage facilities." }
    ]
  },
  bayelsa: {
    id: "bayelsa",
    name: "Bayelsa",
    population: "2.3 million",
    lgaCount: 8,
    annualBudget: "N380.1B (2024)",
    summary: "Expanding access to energy infrastructure and waterway transport networks.",
    initiatives: [
      { category: "high-impact", title: "Yenagoa Waterway Expansion", description: "Building fast water transit routes across the creeks to reduce land travel times." },
      { category: "active-project", title: "Gas Flare Reduction Program", description: "Converting captured gas into cooking fuel for rural households." },
      { category: "listening", title: "Ijaw Youth Community Forums", description: "Gathering grassroots concerns on oil spill clean up and compensation." }
    ]
  },
  benue: {
    id: "benue",
    name: "Benue",
    population: "5.7 million",
    lgaCount: 23,
    annualBudget: "N190.6B (2024)",
    summary: "Optimizing agricultural output to secure food supply chains across Nigeria.",
    initiatives: [
      { category: "high-impact", title: "Food Valley Storage Silos", description: "Building temperature controlled warehouses to minimize harvest losses." },
      { category: "active-project", title: "Makurdi Tractor Leasing Hub", description: "Providing affordable farming machinery access to smallholders." },
      { category: "listening", title: "Gboko Food Security Council", description: "Discussing modern farming tools with cooperatives and trade leaders." }
    ]
  },
  borno: {
    id: "borno",
    name: "Borno",
    population: "5.8 million",
    lgaCount: 27,
    annualBudget: "N155.4B (2024)",
    summary: "Rebuilding resilient educational ecosystems and regional solar mini grids.",
    initiatives: [
      { category: "high-impact", title: "Lake Chad Restoration Advocacy", description: "Pushing regional cooperation to bring back irrigation and fishing livelihoods." },
      { category: "active-project", title: "Maiduguri Solar Micro Grid", description: "Providing continuous energy to critical school campuses and health facilities." },
      { category: "listening", title: "IDP Re-integration Listening Forums", description: "Understanding basic shelter and educational needs of returning families." }
    ]
  },
  "cross-river": {
    id: "cross-river",
    name: "Cross River",
    population: "3.9 million",
    lgaCount: 18,
    annualBudget: "N165.0B (2024)",
    summary: "Promoting forest conservation incentives and tropical agricultural processing.",
    initiatives: [
      { category: "high-impact", title: "Rainforest Carbon Credit System", description: "Partnering internationally to get direct payouts for ecosystem protection." },
      { category: "active-project", title: "Calabar Cocoa Processing Hub", description: "Refining local beans into premium cocoa butter and powder." },
      { category: "listening", title: "Obudu Community Tourism Forum", description: "Coordinating with local hosts to boost tourism infrastructure." }
    ]
  },
  delta: {
    id: "delta",
    name: "Delta",
    population: "5.7 million",
    lgaCount: 25,
    annualBudget: "N580.2B (2024)",
    summary: "Pioneering green energy transitions and expanding vocational tech facilities.",
    initiatives: [
      { category: "high-impact", title: "Asaba Renewable Energy Research Lab", description: "Developing biomass and solar prototypes tailored for rural use." },
      { category: "active-project", title: "Warri Industrial Skills Centre", description: "Training youth in pipeline maintenance and solar installation techniques." },
      { category: "listening", title: "Delta Communities Dialogue Sessions", description: "Hearing concerns from host communities on environmental cleanups." }
    ]
  },
  ebonyi: {
    id: "ebonyi",
    name: "Ebonyi",
    population: "3.0 million",
    lgaCount: 13,
    annualBudget: "N135.7B (2024)",
    summary: "Scaling mechanized rice farming models and clean mineral processing.",
    initiatives: [
      { category: "high-impact", title: "Abakaliki Rice Expansion Project", description: "Standardizing quality and packaging to make local rice competitive globally." },
      { category: "active-project", title: "Lead and Zinc Refining Safety Standards", description: "Regulating mining clusters to protect local groundwater zones." },
      { category: "listening", title: "Afikpo Teachers Association Meet", description: "Gathering feedback on primary school materials and training standards." }
    ]
  },
  edo: {
    id: "edo",
    name: "Edo",
    population: "4.7 million",
    lgaCount: 18,
    annualBudget: "N300.5B (2024)",
    summary: "Fostering creative visual arts industries and cultural preservation economies.",
    initiatives: [
      { category: "high-impact", title: "Benin Heritage Creative Corridor", description: "Funding modern studio hubs for animators, sculptors, and digital designers." },
      { category: "active-project", title: "Edo Forestry Reserve Replenishment", description: "Planting native trees to restore degraded timber reserve lands." },
      { category: "listening", title: "Edo Startup Community Exchange", description: "Discussing internet access infrastructure and angel funding hubs." }
    ]
  },
  ekiti: {
    id: "ekiti",
    name: "Ekiti",
    population: "3.3 million",
    lgaCount: 16,
    annualBudget: "N165.1B (2024)",
    summary: "Positioning the region as a digital services capital and knowledge hub.",
    initiatives: [
      { category: "high-impact", title: "Ado Ekiti Knowledge Zone", description: "Providing fast internet infrastructure to attract outsource programming jobs." },
      { category: "active-project", title: "Ekiti Agricultural Extension Network", description: "Deploying agronomy experts to advise rural crop growers." },
      { category: "listening", title: "Ekiti Civic Union Discussions", description: "Hearing civic feedback on public service delivery improvements." }
    ]
  },
  enugu: {
    id: "enugu",
    name: "Enugu",
    population: "4.4 million",
    lgaCount: 17,
    annualBudget: "N235.9B (2024)",
    summary: "Developing clean coal initiatives and modern logistics platforms.",
    initiatives: [
      { category: "high-impact", title: "Enugu Logistic Inland Terminal", description: "Linking road cargo networks to ease distribution to northern borders." },
      { category: "active-project", title: "Coal District Water Supply Project", description: "Drilling deep aquifers to secure clean drinking tap water." },
      { category: "listening", title: "Nsukka Youth Agricultural Cooperative", description: "Fostering agribusiness management workshops for recent graduates." }
    ]
  },
  fct: {
    id: "fct",
    name: "Federal Capital Territory",
    population: "3.6 million",
    lgaCount: 6,
    annualBudget: "N560.0B (2024 federal allocation)",
    summary: "Driving national administrative modernization and green urban transport.",
    initiatives: [
      { category: "high-impact", title: "Abuja Green Transit Corridor", description: "Deploying electric buses to ease worker commutes across satellite towns." },
      { category: "active-project", title: "Civil Service Digital Shift", description: "Building secure cloud portals for citizen registration and public filings." },
      { category: "listening", title: "FCT Area Councils Youth Forum", description: "Discussing local vocational facilities and clean drinking water access." }
    ]
  },
  gombe: {
    id: "gombe",
    name: "Gombe",
    population: "3.2 million",
    lgaCount: 11,
    annualBudget: "N120.3B (2024)",
    summary: "Expanding regional trade corridor connectivity and clean drinking water access.",
    initiatives: [
      { category: "high-impact", title: "Gombe Trade Logistics Centre", description: "Providing warehouse infrastructure for regional traders." },
      { category: "active-project", title: "Dadin Kowa Water Treatment Upgrade", description: "Extending safe water pipelines to rural households." },
      { category: "listening", title: "Gombe Market Traders Assembly", description: "Listening to micro credit needs of market women." }
    ]
  },
  imo: {
    id: "imo",
    name: "Imo",
    population: "5.4 million",
    lgaCount: 27,
    annualBudget: "N285.6B (2024)",
    summary: "Developing modern digital entertainment hubs and agro-industrial zones.",
    initiatives: [
      { category: "high-impact", title: "Owerri Creative Film City", description: "Creating production spaces for southeastern movie and music editors." },
      { category: "active-project", title: "Imo Food Processing Center", description: "Refining cassava and yam products into commercial flour." },
      { category: "listening", title: "Orlu Trade Union Interactive Sessions", description: "Listening to logistics concerns and security expectations." }
    ]
  },
  jigawa: {
    id: "jigawa",
    name: "Jigawa",
    population: "5.8 million",
    lgaCount: 27,
    annualBudget: "N190.4B (2024)",
    summary: "Strengthening solar energy farms and drylands livestock support.",
    initiatives: [
      { category: "high-impact", title: "Hadejia Solar Farm Expansion", description: "Generating clean power to supply local clinics and irrigation pumps." },
      { category: "active-project", title: "Livestock Quarantine Station", description: "Ensuring healthy cattle movements and disease monitoring." },
      { category: "listening", title: "Dutse Irrigation Water Association", description: "Meeting water users to discuss fair solar irrigation pump allocations." }
    ]
  },
  kaduna: {
    id: "kaduna",
    name: "Kaduna",
    population: "8.3 million",
    lgaCount: 23,
    annualBudget: "N385.2B (2024)",
    summary: "Modernizing manufacturing hubs and expanding tech literacy pipelines.",
    initiatives: [
      { category: "high-impact", title: "Kaduna Textile District Revitalization", description: "Offering tax incentives and stable energy to reopen closed mills." },
      { category: "active-project", title: "Zaria Digital Skills Center", description: "Providing computational coding courses to secondary school students." },
      { category: "listening", title: "Kaduna Peace and Unity Roundtable", description: "Uniting regional leaders to build lasting community harmony." }
    ]
  },
  kano: {
    id: "kano",
    name: "Kano",
    population: "13.5 million",
    lgaCount: 44,
    annualBudget: "N450.8B (2024)",
    summary: "Enhancing regional agricultural security and manufacturing capacity.",
    initiatives: [
      { category: "high-impact", title: "Kano Irrigation and Food Corridor", description: "Upgrading canals to support year round high yield farming." },
      { category: "active-project", title: "Youth Industrial Apprenticeships", description: "Placing vocational graduates inside local manufacturing firms." },
      { category: "listening", title: "Kano Market Trade Association Meet", description: "Gathering merchant feedback on wholesale supply logistics." }
    ]
  },
  katsina: {
    id: "katsina",
    name: "Katsina",
    population: "8.8 million",
    lgaCount: 34,
    annualBudget: "N210.5B (2024)",
    summary: "Restoring water systems and expanding drylands farming resilience.",
    initiatives: [
      { category: "high-impact", title: "Jibia Irrigation Dam Upgrade", description: "Expanding channels to water more hectares of dry farmland." },
      { category: "active-project", title: "Sorghum Processing Clusters", description: "Adding machinery to help local farmers package grains." },
      { category: "listening", title: "Katsina Cattle Breeders Dialogue", description: "Discussing modernization of grazing routes to prevent conflicts." }
    ]
  },
  kebbi: {
    id: "kebbi",
    name: "Kebbi",
    population: "4.4 million",
    lgaCount: 21,
    annualBudget: "N165.3B (2024)",
    summary: "Expanding rice production capacity and solar power access for rural communities.",
    initiatives: [
      { category: "high-impact", title: "Kebbi Rice Revolution Phase 2", description: "Scaling irrigated paddy output to meet northern Nigeria demand." },
      { category: "active-project", title: "Argungu Solar Rural Grid", description: "Powering fishing communities with off-grid solar energy systems." },
      { category: "listening", title: "Birnin Kebbi Fishermen Forum", description: "Reviewing river fishing rights and seasonal market access needs." }
    ]
  },
  kogi: {
    id: "kogi",
    name: "Kogi",
    population: "4.7 million",
    lgaCount: 21,
    annualBudget: "N185.9B (2024)",
    summary: "Unlocking steel production capacity and improving river transportation.",
    initiatives: [
      { category: "high-impact", title: "Ajaokuta Steel Support Plan", description: "Advocating public private partnerships to restart smelting sectors." },
      { category: "active-project", title: "Lokoja River Port Dredging", description: "Facilitating barge transport of cargo to reduce highway wear." },
      { category: "listening", title: "Kabba Agro Forestry Cooperatives", description: "Hearing concerns from wood processors on replanting rules." }
    ]
  },
  kwara: {
    id: "kwara",
    name: "Kwara",
    population: "3.3 million",
    lgaCount: 16,
    annualBudget: "N225.1B (2024)",
    summary: "Promoting mechanized agriculture and vocational healthcare support.",
    initiatives: [
      { category: "high-impact", title: "Shonga Dairy Processing Expansion", description: "Investing in milk cooling centers to boost state farm outputs." },
      { category: "active-project", title: "Ilorin Primary Health Infrastructure", description: "Equipping rural health outposts with standard medical tools." },
      { category: "listening", title: "Offa Youth Entrepreneurship Summit", description: "Guiding micro startups on raising early stage funding." }
    ]
  },
  lagos: {
    id: "lagos",
    name: "Lagos",
    population: "14.8 million",
    lgaCount: 20,
    annualBudget: "N2.2T (2024)",
    summary: "Driving commercial innovation, transport connectivity, and startup growth.",
    initiatives: [
      { category: "high-impact", title: "Yaba Technology Hub Integration", description: "Setting up fast internet corridors and co working spaces." },
      { category: "active-project", title: "Lagos Blue Line Rail Extension", description: "Easing vehicle congestion via high speed mass transit options." },
      { category: "listening", title: "Ikeja Small Business Forum", description: "Gathering merchant feedback on local regulatory compliance fees." }
    ]
  },
  nassarawa: {
    id: "nassarawa",
    name: "Nasarawa",
    population: "2.6 million",
    lgaCount: 13,
    annualBudget: "N175.0B (2024)",
    summary: "Scaling mineral processing centers and agricultural value addition.",
    initiatives: [
      { category: "high-impact", title: "Lafia Mining Hub Regulation", description: "Establishing safer processing for minerals to prevent pollution." },
      { category: "active-project", title: "Karu Urban Housing Initiative", description: "Building affordable residences for families near the capital." },
      { category: "listening", title: "Keffi Farmers Cooperative Dialogue", description: "Sharing best practices on fertilizer storage and distributions." }
    ]
  },
  niger: {
    id: "niger",
    name: "Niger",
    population: "6.3 million",
    lgaCount: 25,
    annualBudget: "N235.4B (2024)",
    summary: "Leveraging hydro electric assets for local industrial park expansions.",
    initiatives: [
      { category: "high-impact", title: "Shiroro Hydro Industrial Cluster", description: "Providing direct power access to nearby raw material factories." },
      { category: "active-project", title: "Minna Shea Butter Processing", description: "Empowering women cooperatives with modern refining tools." },
      { category: "listening", title: "Bida Arts and Brass Guilds Meet", description: "Discussing export strategies for traditional crafts." }
    ]
  },
  ogun: {
    id: "ogun",
    name: "Ogun",
    population: "5.9 million",
    lgaCount: 20,
    annualBudget: "N480.7B (2024)",
    summary: "Expanding industrial corridors and improving logistics link highways.",
    initiatives: [
      { category: "high-impact", title: "Agbara Expressway Logistics Support", description: "Rebuilding utility pipelines to serve manufacturing zones." },
      { category: "active-project", title: "Abeokuta Vocational Trade Academies", description: "Teaching automation mechanics and advanced plumbing." },
      { category: "listening", title: "Ota Community Leadership Summit", description: "Reviewing local tax rates and road improvement proposals." }
    ]
  },
  ondo: {
    id: "ondo",
    name: "Ondo",
    population: "5.0 million",
    lgaCount: 18,
    annualBudget: "N315.2B (2024)",
    summary: "Unlocking deep sea terminals and strengthening tree crop processing.",
    initiatives: [
      { category: "high-impact", title: "Ondo Deep Port Project Advocacy", description: "Working with regulators to authorize commercial sea docks." },
      { category: "active-project", title: "Okitipupa Oil Palm Upgrade", description: "Replacing old milling equipment with high efficiency refiners." },
      { category: "listening", title: "Akure Agricultural Students Forum", description: "Discussing modern farming careers and research fellowships." }
    ]
  },
  osun: {
    id: "osun",
    name: "Osun",
    population: "4.7 million",
    lgaCount: 30,
    annualBudget: "N230.8B (2024)",
    summary: "Fostering cultural tourism and agricultural extension services.",
    initiatives: [
      { category: "high-impact", title: "Oshogbo Sacred Grove Protection", description: "Upgrading paths and tourist security to promote global heritage." },
      { category: "active-project", title: "Cocoa Seedling Nursery Expansion", description: "Providing disease resistant crops to local growers." },
      { category: "listening", title: "Ilesa Farmers Association Meet", description: "Exchanging ideas on pest management and crop rotation benefits." }
    ]
  },
  oyo: {
    id: "oyo",
    name: "Oyo",
    population: "7.8 million",
    lgaCount: 33,
    annualBudget: "N380.4B (2024)",
    summary: "Strengthening food research networks and regional transit links.",
    initiatives: [
      { category: "high-impact", title: "Ibadan Agri Startup Corridor", description: "Connecting university researchers with venture funding brokers." },
      { category: "active-project", title: "Ogbomoso Mango Export Plan", description: "Setting up sorting centers to meet strict international standards." },
      { category: "listening", title: "Oyo Royal Arts Guild Consultation", description: "Creating online marketing systems for traditional weavers." }
    ]
  },
  plateau: {
    id: "plateau",
    name: "Plateau",
    population: "4.2 million",
    lgaCount: 17,
    annualBudget: "N195.3B (2024)",
    summary: "Boosting specialty crop production and sustainable mountain tourism.",
    initiatives: [
      { category: "high-impact", title: "Jos Plateau Potato Research Center", description: "Developing disease resistant varieties to increase output." },
      { category: "active-project", title: "Eco Lodge Infrastructure Security", description: "Ensuring safe environments to boost highland recreation." },
      { category: "listening", title: "Bukuru Community Peace Initiative", description: "Fostering inter faith sports programs and vocational trades." }
    ]
  },
  rivers: {
    id: "rivers",
    name: "Rivers",
    population: "7.3 million",
    lgaCount: 23,
    annualBudget: "N800.6B (2024)",
    summary: "Expanding gas to power grids and maritime trading systems.",
    initiatives: [
      { category: "high-impact", title: "Port Harcourt Gas Power Hub", description: "Capturing gas flares to generate local residential electricity." },
      { category: "active-project", title: "Rivers Fish Farm Incubation", description: "Setting up coastal aquacultures managed by local cooperatives." },
      { category: "listening", title: "Bonny Island Youth Association Dialogue", description: "Addressing employment expectations and clean drinking water access." }
    ]
  },
  sokoto: {
    id: "sokoto",
    name: "Sokoto",
    population: "4.9 million",
    lgaCount: 23,
    annualBudget: "N185.0B (2024)",
    summary: "Upgrading cement manufacturing and expanding solar pump irrigation.",
    initiatives: [
      { category: "high-impact", title: "Sokoto Clean Cement Initiative", description: "Encouraging alternative fuels to reduce factory smoke output." },
      { category: "active-project", title: "Goronyo Dam Solar Irrigations", description: "Using solar pumps to supply dry season farming channels." },
      { category: "listening", title: "Sokoto Artisan Guilds Gathering", description: "Assisting leather workers with digital storefront configurations." }
    ]
  },
  taraba: {
    id: "taraba",
    name: "Taraba",
    population: "3.2 million",
    lgaCount: 16,
    annualBudget: "N150.7B (2024)",
    summary: "Developing tea plantations and highland dairy processing.",
    initiatives: [
      { category: "high-impact", title: "Mambilla Tea Expansion Project", description: "Funding modern processing machinery to boost tea exports." },
      { category: "active-project", title: "Taraba Livestock Healthcare Outposts", description: "Deploying mobile vets to assist remote cattle herders." },
      { category: "listening", title: "Jalingo Community Development Council", description: "Hearing village needs regarding roads and clinic supplies." }
    ]
  },
  yobe: {
    id: "yobe",
    name: "Yobe",
    population: "3.3 million",
    lgaCount: 17,
    annualBudget: "N145.2B (2024)",
    summary: "Combatting desertification and restoring rural livestock markets.",
    initiatives: [
      { category: "high-impact", title: "Great Green Wall Tree Planting", description: "Planting shelterbelts to check soil erosion and desert spread." },
      { category: "active-project", title: "Damaturu Cattle Market Modernization", description: "Setting up digital scales and veterinarian inspection stalls." },
      { category: "listening", title: "Gashua River Farmers Association", description: "Discussing water conservation methods for dry season crops." }
    ]
  },
  zamfara: {
    id: "zamfara",
    name: "Zamfara",
    population: "4.5 million",
    lgaCount: 14,
    annualBudget: "N170.1B (2024)",
    summary: "Standardizing mining operations and improving crop yields.",
    initiatives: [
      { category: "high-impact", title: "Zamfara Gold Mining Safety Standards", description: "Setting up safety protocols to protect workers from toxins." },
      { category: "active-project", title: "Gusau Cotton Processing Mill", description: "Rebuilding processing lines to local cotton weaving markets." },
      { category: "listening", title: "Zamfara Village Elders Council", description: "Gathering security feedback and primary clinic needs." }
    ]
  }
};
