import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,

    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import ebiashara from "../assets/company/ebiashara.png";
  import panacare from "../assets/company/panacare.webp";
  import burn from "../assets/company/burn.jpg";
  import dawin from "../assets/company/dawin.png";
  import freelance from "../assets/company/freelance.svg";
  import arronax from "../assets/arronaxhome.png";
  import smartnyumba from "../assets/smartnyumba.png";
  import agritech from"../assets/agritech.jpg";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [

    {
      title: "Consultant Software Engineer – Systems Reliability & FinTech",
      company_name: "Panacare Telehealth",
      icon: panacare,
      iconBg: "#FFFFFF",
      date: "August 2025 - April 2026",
      points: [
        "Architected and delivered highly available, containerized microservices for a large-scale platform, ensuring 99.9% uptime during peak load periods.",
        "Engineered robust API integration layers for clinical and financial data exchange, utilizing Python and Java, reducing manual data entry and reconciliation errors by 60%.",
        "Spearheaded the implementation of automated CI/CD pipelines (GitHub Actions, Kubernetes) with 85%+ test coverage, reducing MTTR by 40% through proactive telemetry and monitoring (Prometheus + Grafana).",
        "Implemented enterprise-grade security protocols (RBAC, JWT, OWASP Top 10), ensuring full compliance with the Kenya Data Protection Act.",
        "Designed and optimized relational database schemas to support concurrent, large-scale data retrieval across polyglot microservices, achieving sub-second query latency during peak operational hours.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "BURN Manufacturing USA LLC",
      icon: burn,
      iconBg: "#FFFFFF",
      date: "August 2025 - February 2026",
      points: [
        "Designed and documented scalable RESTful API contracts for a multi-country IoT and e-commerce platform, enabling rapid third-party integration and seamless cross-market functionality.",
        "Optimized backend performance for low-connectivity environments, significantly increasing user engagement and conversion rates by 25%.",
        "Implemented comprehensive RBAC and JWT session management, cutting access-related security incidents by 50%.",
        "Led cross-functional collaboration with DevOps and QA to establish strict code quality standards, achieving 85%+ code coverage across critical paths.",
      ],
    },
    {
      title: "Software Engineer – AI Platform",
      company_name: "Ebiashara Africa Ltd",
      icon: ebiashara,
      iconBg: "#E6DEDD",
      date: "August 2022 - Present",
      points: [
        "Engineered scalable payment processing and e-commerce flows using HTTP/3 over gRPC, achieving sub-200ms latency and reducing data transmission costs by 30%.",
        "Architected advanced observability and logging frameworks using the ELK Stack and AWS CloudWatch, supporting 10,000+ active daily users and ensuring 99.9% system availability.",
        "Led the integration of AI-assisted development tools and agentic code review bots, accelerating infrastructure-provisioning cycles and reducing code-review turnaround by 25%.",
        "Established robust IaC automation (Terraform, Ansible) for Kubernetes (EKS) clusters, ensuring regression-free, reliable releases.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Dawin Tours and Travel Ltd",
      icon: dawin,
      iconBg: "#FFFFFF",
      date: "March 2020 - July 2022",
      points: [
        "Spearheaded the integration of complex payment gateways, including the Safaricom Daraja M-PESA API and multi-currency credit card processors, to handle real-time reservations and financial settlements.",
        "Designed strict idempotency mechanisms within payment routing services to guarantee exact-once processing, completely eliminating duplicate charges and data loss during mobile network timeouts.",
        "Implemented automated financial reconciliation pipelines that securely synced third-party booking revenues with internal ledger databases and automated KRA API tax reporting.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#1d1836",
      date: "July 2019 - March 2020",
      points: [
        "Engineered secure, high-conversion checkout pipelines for custom e-commerce platforms, integrating third-party payment gateways with robust input validation to ensure transaction integrity and prevent duplicate billing.",
        "Implemented secure session management and authentication protocols across client storefronts, safeguarding consumer financial data during the checkout process.",
        "Optimized platform performance and database query latency, directly improving the user experience and contributing to a 40% increase in online sales conversions across client portfolios.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Dennis proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Dennis does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Dennis optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Arronax",
      description:
        "Web-based and mobile based platform that allows users to view local Kenyan content of their liking.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Aws, Redis, Celery",
          color: "green-text-gradient",
        },
        {
          name: "Django Rest Framework",
          color: "pink-text-gradient",
        },
      ],
      image: arronax,
      source_code_link: "https://play.google.com/store/apps/details?id=com.ebiashara.arronaxsandbox.arronaxMediaAppTest&pcampaignid=web_share",
    },
    {
      name: "Smart nyumba",
      description:
        "A mobile  application that makes property management to be hassle free, from colleting rent, on boarding tenants to paying staff all at the palm of your hands",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Mpesa Daraja API",
          color: "pink-text-gradient",
        },
      ],
      image: smartnyumba,
      source_code_link: "https://github.com/DennisMuasyaWambua/Smart_Nyumba_Mobile_App.git",
    },
    {
      name: "Smart farmer",
      description:
        "An AI model that recommends crops to plant to farmers based on the nutritional profile, soil ph, ambient temperature, soil humidity and predicted rainfall this helps in allowing farmers to efficinetly plan for planting  ",
      tags: [
        {
          name: "xgboost, pandas",
          color: "blue-text-gradient",
        },
        {
          name: "Fast API",
          color: "green-text-gradient",
        },
        {
          name: "AWS EC2",
          color: "pink-text-gradient",
        },
      ],
      image: agritech,
      source_code_link: "https://github.com/DennisMuasyaWambua/farmer.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };