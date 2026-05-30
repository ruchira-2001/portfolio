// src/data/personal.ts
// ——— Central data file — edit here to update the whole site ———

export const personal = {
  name: "Waragoda Mudalige Ruchira Perera",
  shortName: "Ruchira Perera",
  initials: "RP",
  degree: "B.Sc. Applied Sciences — Chemistry & Computer Science",
  university: "Rajarata University of Sri Lanka",
  location: "Galle, Sri Lanka",
  email: "ruchirap600@gmail.com",
  phone: "+94 778 365 972",
  linkedin: "https://www.linkedin.com/in/ruchira-perera-80a200280",
  github: "https://github.com/ruchira-2001",
  resumePdf: "/resume.pdf",
  roles: [
    "Applied Sciences Undergraduate",
    "Published Researcher",
    "Aspiring Analytical Chemist",
    "Scientific Programmer",
    "Chemistry & CS Graduate",
    "Curious Interdisciplinary Mind",
  ],
  tagline: "Bridging Chemistry and Intelligent Computing",
  subTagline:
    "Combining analytical instrumentation, computational chemistry, and AI-driven systems for real-world scientific innovation.",
  bio: `I am an Applied Science undergraduate at Rajarata University of Sri Lanka, specialising in the intersection of Chemistry and Computer Science. My work spans advanced analytical instrumentation (ICP-MS, GC-MS), AI-driven edge systems, and computational chemistry — connecting laboratory science with intelligent technology.

As a published researcher, I have contributed to food-safety analysis of heavy metals in Sri Lankan rice, GC-MS and DFT characterisation of Sri Lankan cinnamon bioactives, and pioneered edge-AI waste segregation and disaster communication systems. I believe that the most compelling solutions emerge where disciplines converge, and I am driven to build systems that are both scientifically rigorous and technologically innovative.`,
  philosophy:
    "Science is most powerful at the intersection of disciplines. I aim to build systems that are rigorous in chemistry, intelligent in computation, and meaningful in impact.",
  interests: [
    "Analytical & Environmental Chemistry",
    "Computational Chemistry & DFT",
    "Edge-AI & Embedded Systems",
    "Machine Learning for Science",
    "Food Safety & Toxicology",
    "Scientific Instrumentation",
    "Disaster Communication Systems",
    "Drug Design (CADD)",
  ],
  stats: [
    { label: "Publications", value: "4", icon: "BookOpen" },
    { label: "Key Projects", value: "4", icon: "Layers" },
    { label: "Certifications", value: "6+", icon: "Award" },
    { label: "Leadership Roles", value: "1", icon: "Users" },
  ],
};

export const skills = [
  {
    category: "Analytical Chemistry",
    icon: "FlaskConical",
    color: "cyan",
    items: [
      "ICP-MS",
      "GC-MS",
      "UV-Vis Spectroscopy",
      "Chromatography",
      "Soxhlet Extraction",
      "Heavy Metal Analysis",
      "Food Safety Testing",
    ],
  },
  {
    category: "Computational Chemistry",
    icon: "Atom",
    color: "blue",
    items: [
      "Gaussian 09W",
      "GaussView",
      "HyperChem Professional",
      "WinMOPAC",
      "UCSF Chimera",
      "PyRx",
      "DFT Analysis",
      "ESP Mapping",
    ],
  },
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    color: "indigo",
    items: [
      "YOLOv8n (Object Detection)",
      "Support Vector Machine (SVM)",
      "Naïve Bayes",
      "Edge-AI",
      "Model Training & Deployment",
      "Priority-Based Classification",
    ],
  },
  {
    category: "Programming",
    icon: "Code2",
    color: "teal",
    items: [
      "Python",
      "HTML / CSS",
      "Node.js",
      "JavaScript",
      "Scientific Scripting",
      "Data Processing",
    ],
  },
  {
    category: "Research & Data Analysis",
    icon: "BarChart3",
    color: "cyan",
    items: [
      "Scientific Reporting",
      "Health Risk Assessment",
      "Statistical Analysis",
      "Academic Writing",
      "Literature Review",
      "Experimental Design",
    ],
  },
  {
    category: "Instrumentation & IoT",
    icon: "Cpu",
    color: "blue",
    items: [
      "Raspberry Pi 5",
      "Servo-Driven Actuation",
      "Sensor Integration",
      "Hardware Prototyping",
      "IoT Systems Design",
    ],
  },
  {
    category: "Edge-AI & Systems",
    icon: "Zap",
    color: "indigo",
    items: [
      "Edge Computing",
      "Real-Time Inference",
      "Embedded AI",
      "Decentralized Mesh Networks",
      "Toxicity-Aware Scoring",
      "Autonomous Systems",
    ],
  },
  {
    category: "Leadership & PM",
    icon: "Target",
    color: "teal",
    items: [
      "Lean PM (Yellow Belt)",
      "Project Planning",
      "Team Leadership",
      "Academic Event Management",
      "Cross-functional Collaboration",
      "Microsoft Office Suite",
    ],
  },
];

export const publications = [
  {
    id: 1,
    title:
      "Varietal-Specific Assessment of Arsenic and Mercury Content and Associated Health Risks in Traditional Sri Lankan Rice",
    conference: "30th International Forestry and Environment Symposium (IFES 2026)",
    venue: "University of Sri Jayewardenepura",
    year: "2026",
    status: "Published",
    statusColor: "green",
    volume: "Volume 30",
    category: "Peer-Reviewed",
    abstract:
      "Assessed arsenic and mercury concentrations in traditional Sri Lankan rice varieties using ICP-MS, conducting varietal-specific health risk assessments with significant implications for food safety policy.",
    tags: ["ICP-MS", "Heavy Metals", "Food Safety", "Health Risk Assessment", "Rice"],
  },
  {
    id: 2,
    title:
      "Smart Eco Bin: An Autonomous Toxicity-aware Risk Scoring System for Intelligent Waste Segregation using Edge-AI and Servo-Driven Actuation",
    conference: "12th Moratuwa Engineering Research Conference (MERCon 2026)",
    venue: "University of Moratuwa | IEEE",
    year: "2026",
    status: "Under Review",
    statusColor: "yellow",
    category: "IEEE Conference",
    abstract:
      "Presents an autonomous waste segregation prototype on Raspberry Pi 5 integrating YOLOv8n edge-AI for seven plastic resin and e-waste categories with toxicity-aware risk scoring and servo-driven sorting.",
    tags: ["Edge-AI", "YOLOv8n", "IoT", "Raspberry Pi", "Waste Segregation", "IEEE"],
  },
  {
    id: 3,
    title:
      "ResQNet: A Multi-Layer Hybrid AI Framework for Priority-Aware Disaster Communication over Decentralized Mesh Networks",
    conference: "International Conference on Technology Innovations for Crisis Management (ICTICM 2026)",
    venue: "SLIIT (AIMS Research Center) & Massey University, New Zealand",
    year: "2026",
    status: "Accepted",
    statusColor: "blue",
    category: "International Conference",
    abstract:
      "A multi-layer hybrid AI system using SVM and Naïve Bayes for priority-based message routing in post-disaster decentralized mesh network scenarios.",
    tags: ["SVM", "Naïve Bayes", "Disaster Communication", "Mesh Networks", "AI"],
  },
  {
    id: 4,
    title:
      "Learning to Learn in the Age of AI Marketing: How Prompt Engineering is Redefining Branding",
    conference: "TrendFluence — Department of Marketing Management, RUSL",
    venue: "Rajarata University of Sri Lanka",
    year: "2025",
    status: "Published",
    statusColor: "green",
    volume: "Volume 01",
    category: "Industry Article",
    abstract:
      "Explores how prompt engineering and AI tools are transforming marketing strategies and brand communication in the digital era.",
    tags: ["AI", "Prompt Engineering", "Marketing", "Branding"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart Eco-Bin",
    subtitle: "Edge-AI Autonomous Waste Segregation System",
    image: "/images/smartecobin-demo.jpg",
    period: "2024 – 2026",
    status: "Submitted to IEEE MERCon 2026",
    statusColor: "yellow",
    featured: true,
    problem:
      "Improper waste segregation causes severe environmental contamination. Manual sorting is inefficient and exposes workers to toxic materials.",
    solution:
      "An autonomous waste segregation prototype powered by YOLOv8n running on Raspberry Pi 5, trained across 7 plastic resin and e-waste categories with toxicity-aware risk scoring and servo-driven physical sorting.",
    technologies: [
      "YOLOv8n",
      "Raspberry Pi 5",
      "Python",
      "Edge-AI",
      "Servo Actuation",
      "Computer Vision",
      "IoT",
    ],
    outcomes: [
      "7-category waste classification with real-time edge inference",
      "Toxicity-aware risk scoring system integrated",
      "Physical servo sorting actuation implemented",
      "Submitted to IEEE MERCon 2026",
    ],
    category: "Computer Science / AI",
  },
  {
    id: 2,
    title: "ResQNet",
    subtitle: "AI Disaster Communication Framework",
    image: null,
    period: "2026",
    status: "Accepted — ICTICM 2026",
    statusColor: "blue",
    featured: false,
    problem:
      "Post-disaster communication infrastructure collapses exactly when reliable emergency messaging is most critical.",
    solution:
      "A multi-layer hybrid AI framework using SVM and Naïve Bayes for priority-based message routing over decentralized mesh networks, maintaining communications without central infrastructure.",
    technologies: [
      "SVM",
      "Naïve Bayes",
      "Python",
      "Mesh Networks",
      "AI/ML",
      "Crisis Communication",
    ],
    outcomes: [
      "Priority-aware message classification engine",
      "Decentralized mesh network routing protocol",
      "Accepted at international conference (SLIIT & Massey University NZ)",
    ],
    category: "AI / Systems Engineering",
  },
  {
    id: 3,
    title: "Sri Lankan Cinnamon Analysis",
    subtitle: "GC-MS Profiling & DFT Computational Study",
    image: null,
    period: "Ongoing",
    status: "Final Year Research",
    statusColor: "teal",
    featured: false,
    problem:
      "Comprehensive characterisation of bioactive compounds in Sri Lankan cinnamon varieties is lacking, limiting valorisation of this economically significant crop.",
    solution:
      "Methanol Soxhlet extraction of cinnamon leaf and bark followed by GC-MS profiling to identify eugenol and cinnamaldehyde. DFT computational study using Gaussian 09W/GaussView covering ESP mapping, free energy, total energy, and UV absorption analysis.",
    technologies: [
      "GC-MS",
      "Gaussian 09W",
      "GaussView",
      "DFT",
      "ESP Mapping",
      "Soxhlet Extraction",
    ],
    outcomes: [
      "Quantified eugenol (leaf) and cinnamaldehyde (bark) as principal bioactives",
      "Confirmed strong antioxidant character via DFT electronic profiling",
      "ESP maps generated showing electronic charge distribution",
    ],
    category: "Computational Chemistry",
  },
  {
    id: 4,
    title: "Heavy Metal Safety in Sri Lankan Rice",
    subtitle: "ICP-MS Analysis & Health Risk Assessment",
    image: null,
    period: "2025 – 2026",
    status: "Published — IFES 2026",
    statusColor: "green",
    featured: false,
    problem:
      "Heavy metal contamination (arsenic, mercury) in staple food crops poses serious public health risks, yet varietal-specific data for traditional Sri Lankan rice is scarce.",
    solution:
      "Systematic ICP-MS analysis of arsenic and mercury content across traditional Sri Lankan rice varieties, with comprehensive varietal-specific health risk assessments.",
    technologies: [
      "ICP-MS",
      "Health Risk Assessment",
      "Statistical Analysis",
      "Environmental Chemistry",
    ],
    outcomes: [
      "Varietal-specific heavy metal content mapped",
      "Health risk assessment completed for key rice varieties",
      "Findings published at IFES 2026 symposium",
    ],
    category: "Analytical Chemistry",
  },
];

export const smartGoals = {
  mainGoal:
    "To build a career as a technically grounded analytical chemist working hands-on with high-end instrumentation (ICP-MS, GC-MS, LC-MS), while bridging computer science with the analytical sciences — and continuing to publish interdisciplinary research where chemistry and intelligent computing meet.",
  pillars: [
    {
      letter: "S",
      label: "Specific",
      color: "cyan",
      content:
        "Secure an industry or research role in analytical chemistry with hands-on operation of high-end instruments (ICP-MS, GC-MS, LC-MS). Pursue an MSc in Analytical Chemistry or Analytical Science, with a focus on applying computational and data-driven approaches to instrumentation. Publish at least 2 peer-reviewed papers per year bridging chemistry and computer science — particularly in areas such as automated data analysis, instrument-integrated AI, or environmental/food analytical methods.",
    },
    {
      letter: "M",
      label: "Measurable",
      color: "blue",
      content:
        "Progress tracked by: instruments operated hands-on (ICP-MS, GC-MS, LC-MS), number of analytical methods developed or validated, publications in indexed journals, MSc application submissions, programming tools integrated with laboratory workflows (Python scripts, data pipelines), and professional certifications in analytical instrumentation.",
    },
    {
      letter: "A",
      label: "Achievable",
      color: "indigo",
      content:
        "Firmly grounded in hands-on ICP-MS and GC-MS experience from final year research, DFT computational chemistry (Gaussian 09W), programming in Python, and 4 publications/conference contributions. CADD certification and edge-AI project delivery demonstrate the capacity to align CS knowledge with scientific instrumentation workflows.",
    },
    {
      letter: "R",
      label: "Relevant",
      color: "teal",
      content:
        "Analytical chemistry underpins food safety, environmental monitoring, pharmaceutical quality control, and materials science — all high-demand sectors globally. The rare ability to both operate advanced instruments and develop computational tools to process, automate, and interpret their data is an increasingly valued skillset in modern analytical laboratories.",
    },
    {
      letter: "T",
      label: "Time-Bound",
      color: "cyan",
      content:
        "Graduation (2026) → Entry-level analytical chemistry role or research position with instrument access (2026–2027) → MSc in Analytical Chemistry enrolment (2027–2028) → MSc completion + first journal publications from combined CS-analytical work (2029) → Senior analytical chemist / research scientist role integrating computational approaches with instrumentation (2030+).",
    },
  ],
  milestones: [
    {
      year: "2026",
      title: "Graduation & Research Completion",
      items: [
        "Complete B.Sc. Applied Sciences (Chemistry & Computer Science)",
        "IEEE MERCon paper outcome (Smart Eco-Bin)",
        "ICTICM presentation (ResQNet)",
        "IFES publication (Rice Heavy Metals — ICP-MS)",
        "Launch public portfolio website",
      ],
      done: false,
    },
    {
      year: "2026–27",
      title: "Industry Entry & Instrument Access",
      items: [
        "Secure analytical chemistry role with hands-on ICP-MS / GC-MS / LC-MS access",
        "Develop Python-based data processing tools for instrument output",
        "Begin MSc research applications in Analytical Chemistry",
        "Publish first independent paper in analytical chemistry or CS-instrument integration",
      ],
      done: false,
    },
    {
      year: "2027–29",
      title: "MSc in Analytical Chemistry",
      items: [
        "Complete MSc with focus on advanced analytical instrumentation",
        "Develop computational methods or AI-assisted data interpretation for analytical workflows",
        "Publish 2–3 peer-reviewed journal papers spanning chemistry and CS",
        "Present at international analytical chemistry or cheminformatics conferences",
      ],
      done: false,
    },
    {
      year: "2030+",
      title: "Senior Scientist & All-Rounder",
      items: [
        "Senior analytical scientist or research chemist role in industry or academia",
        "Recognised expertise spanning both hands-on instrumentation and computational analysis",
        "Lead interdisciplinary projects combining analytical chemistry with AI / data science",
        "Continued research publication in the chemistry–computing interface",
      ],
      done: false,
    },
  ],
};

export const education = [
  {
    id: 1,
    institution: "Rajarata University of Sri Lanka",
    degree: "B.Sc. in Applied Sciences",
    field: "Chemistry & Computer Science",
    period: "2022 – Present",
    status: "Awaiting Graduation",
    location: "Mihinthale, Sri Lanka",
    details: [
      "Major subjects: Chemistry and Computer Science",
      "Published researcher during undergraduate study",
      "Vice President, Chemistry Society",
      "Final year projects in both Chemistry and Computer Science tracks",
    ],
    icon: "GraduationCap",
    color: "cyan",
  },
  {
    id: 2,
    institution: "CINEC Campus, Malabe",
    degree: "Computer Aided Drug Design (CADD)",
    field: "Computational Chemistry & Drug Discovery",
    period: "July – August 2024",
    status: "Completed",
    location: "Malabe, Sri Lanka",
    details: [
      "GPA: 3.30 / 4.00 (B+)",
      "5-week intensive programme",
      "Hands-on: PyRx, UCSF Chimera, molecular docking",
    ],
    icon: "Microscope",
    color: "blue",
  },
  {
    id: 3,
    institution: "Siridhamma College, Galle",
    degree: "G.C.E. Advanced Level",
    field: "Science Stream",
    period: "2020/2021",
    status: "Completed",
    location: "Galle, Sri Lanka",
    details: [
      "Chemistry – B",
      "Physics – C",
      "Biology – C",
      "General English – A",
    ],
    icon: "BookOpen",
    color: "indigo",
  },
  {
    id: 4,
    institution: "Siridhamma College, Galle",
    degree: "G.C.E. Ordinary Level",
    field: "English Medium",
    period: "2017",
    status: "Completed",
    location: "Galle, Sri Lanka",
    details: [
      "9 Subjects — All A grades",
      "Buddhism, Sinhala, English, Mathematics, Science, History, ICT, Tamil, English Literature",
    ],
    icon: "School",
    color: "teal",
  },
];

export const certifications = [
  { name: "Lean Fundamentals Certified", org: "LeanPM.org", date: "Sep 2025", color: "cyan" },
  { name: "LeanPM® Yellow Belt (LeanPM®-YB)", org: "Lean PM Foundation", date: "Sep 2025", color: "blue" },
  { name: "Project Management Essentials", org: "Management & Strategy Institute", date: "Jun 2024", color: "indigo" },
  { name: "Effective Leadership", org: "HP LIFE Foundation", date: "Jun 2024", color: "teal" },
  { name: "Introduction to Digital Business Skills", org: "HP LIFE Foundation", date: "Sep 2025", color: "cyan" },
  { name: "Computer Aided Drug Design (CADD)", org: "CINEC Campus, Malabe", date: "Aug 2024", color: "blue" },
];

export const leadership = [
  {
    title: "Vice President — Chemistry Society",
    org: "Faculty of Applied Sciences, Rajarata University of Sri Lanka",
    period: "2025",
    icon: "Crown",
    color: "cyan",
    category: "Academic Leadership",
    details: [
      "Led academic events and inter-faculty science activities",
      "Coordinated chemistry outreach and departmental programmes",
      "Represented student body in faculty academic affairs",
    ],
  },
  {
    title: "Varsity Battles — 2nd Runners-Up",
    org: "Colombo Stock Exchange (CSE) — Island-wide Quiz Competition",
    period: "2025",
    icon: "Trophy",
    color: "yellow",
    category: "Academic Competition",
    details: [
      "Member of the university team in this prestigious national-level quiz",
      "Competed against all major universities island-wide",
      "2nd Runners-Up position in the CSE Varsity Battles 2025",
    ],
  },
  {
    title: "Senior Scout — District Commissioner's Medal",
    org: "Siridhamma College Scout Troop, Galle",
    period: "2014 – 2017",
    icon: "Medal",
    color: "teal",
    category: "Scouting",
    details: [
      "Awarded the District Commissioner's Medal — highest district-level scout honour",
      "Participated in international jamborees and Kanborees",
      "Led scouting teams across multiple activities",
    ],
  },
  {
    title: "House Vice Captain — Annual Sports Meet",
    org: "Siridhamma College",
    period: "2019",
    icon: "Flame",
    color: "orange",
    category: "Sports Leadership",
    details: [
      "Led house team to Runners-up position",
      "Coordinated house athletics events and team motivation",
    ],
  },
  {
    title: "Road Race — 2nd Place",
    org: "Faculty Sports Meet, Rajarata University of Sri Lanka",
    period: "2024",
    icon: "Footprints",
    color: "blue",
    category: "Athletics",
    details: ["2nd Place — Road Race at Faculty Sports Meet, RUSL 2024"],
  },
  {
    title: "Cricket & Elle Teams — Runners-Up",
    org: "Siridhamma College & RUSL",
    period: "2019 – 2024",
    icon: "Award",
    color: "indigo",
    category: "Team Sports",
    details: [
      "Member of Cricket team — Runners-up",
      "Member of Elle team — Runners-up",
    ],
  },
  {
    title: "Zero Plastic Community Initiative",
    org: "Rajarata University of Sri Lanka",
    period: "2025",
    icon: "Leaf",
    color: "green",
    category: "Volunteering",
    details: [
      "Contributed to campus-wide environmental awareness",
      "Led plastic waste reduction efforts and community engagement",
    ],
  },
];

export const references = [
  {
    name: "Prof. Ranjith Edirisinghe",
    title: "Professor in Chemistry",
    dept: "Department of Chemical Sciences",
    org: "Faculty of Applied Sciences, Rajarata University of Sri Lanka",
    email: "ranjith_e@rjt.ac.lk",
    phone: "071 631 7300",
  },
  {
    name: "Dr. K.A.S.H. Kulathilake",
    title: "Senior Lecturer",
    dept: "Department of Computing",
    org: "Faculty of Applied Sciences, Rajarata University of Sri Lanka",
    email: "kule@as.rjt.ac.lk",
    phone: "071 533 4774",
  },
];
