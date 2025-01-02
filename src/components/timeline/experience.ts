import { parseDate } from "~/helpers";
import ckLogo from '~/assets/companies/cksource.png';
import brightLogo from '~/assets/companies/bright-it.png';
import onliwoodLogo from '~/assets/companies/onliwood.webp';
import hoqusLogo from '~/assets/companies/hoqus.jpg';
import productzLogo from '~/assets/companies/productz.png';
import answearLogo from '~/assets/companies/answear.svg';
import bytamicLogo from '~/assets/companies/bytamic.png';
import silkyLogo from '~/assets/companies/silky-coders.png';
import interiaLogo from '~/assets/companies/interia.png';
import qedLogo from '~/assets/companies/qed.png';
import couporandoLogo from '~/assets/companies/couporando.png';
import dashhubLogo from '~/assets/companies/dashhub.jpg';

import type { ExperienceItem } from "./types";

export const COMPANIES: ExperienceItem[] = [
  {
    title: "Senior Fullstack Engineer",
    company: {
      name: 'Dashhub',
      logo: dashhubLogo.src,
      color: {
        primary: '#808080',
        background: '#808080',
        text: '#ffffff'
      },
    },
    duration: {
      begin: parseDate("01.08.2024"),
      end: null
    },
    fullTime: false,
    details: "Creating AI search engine powered by Elasticsearch kNN cosine vector similarity comparisons, embeddings analyze, contexual augmentation.",
    items: [
      "Created RAG AI search engine powered by Elasticsearch kNN cosine vector similarity comparisons, embeddings analyze, contexual augmentation",
      "Developed a Red Hat Enterprise Linux compatible infrastructure using AlmaLinux 9, automatically configured with Ansible and Pulumi, and hosted on Hetzner Cloud with Cloudflare integration.",
      "Ensured high security standards by enforcing strict SELinux policies for containerized environments, implementing robust Nftables firewall configurations, and automating system upgrades. Utilized a rootless Podman setup with systemd-proxyd for filesystem protection.",
      "Configure fail2ban ruleset to automatic ban suspicious traffic.",
      "Set up and configured essential services including Elasticsearch, MinIO, PostgreSQL, NGINX, SystemD, and Podman Quadlet.",
      "Implemented a rapid deployment and rollback solution (under 1 minute) for a monorepo of applications.",
      "Developed backend, frontend, and API applications in TypeScript, following a hexagonal architecture pattern, utilizing Tsyringe for dependency injection, Kysely for database interactions, and React for the frontend.",
      "Directus self-hosted CMS installation and Astro integration."
    ],
  },
  {
    title: "Senior Fullstack Engineer",
    company: {
      name: 'CKSource',
      logo: ckLogo.src,
      color: {
        primary: '#8f47ff',
        background: '#8f47ff',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.02.2023"),
      end: null
    },
    details: "Contributing to CKEditor 5, one of the most popular open-source text editor in the world.",
    items: [
      "Fixing accessibility A11y WCAG issues reported by governments clients such like Australian Government, United Kingdom Government.",
      "Fixing editor issues reported by companies such as Disney, Volvo, Microsoft, Siemens, Unicef, AT&T",
      "Open Source contributions and discussions with community.",
      "Maintenance React CKEditor integrations",
      "Adding search-as-you-type function to editor.",
      "Working with AI editor integration. Adding support for Chat GPT AI LLM support",
      "Extending Operational Transformation core diffing algorithm."
    ],
    fullTime: true,
  },
  {
    title: "DevOpts / Senior Fullstack Engineer",
    company: {
      name: 'Bright IT',
      logo: brightLogo.src,
      color: {
        primary: '#ff4769',
        background: '#ff4769',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.09.2022"),
      end: parseDate("01.02.2023")
    },
    details: "Create many projects for company clients and manage their own products.",
    items: [
      "Design backend / frontend / infra architecture for new projects",
      "Monadic / functional backend modules design",
      "Implementation of Contentful / JIRA / Storyblok integrations",
    ],
    fullTime: true,
  },
  {
    title: "DevOpts / Senior Fullstack Engineer",
    company: {
      name: 'Onliwood',
      logo: onliwoodLogo.src,
      color: {
        primary: '#2ecc71',
        background: '#2ecc71',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.01.2021"),
      end: null
    },
    details: "Create site management dashboard, Hetzner / OVH infrastructure and frontend application storyblok CMS integration.",
    items: [
      "OVH / Hertzner cloud infra management (Podman Quadlet, Linux)",
      "Wood selling SPA site in React / Ramda / TypeScript / Nest.JS",
      "Government wood related projects",
      "Create and integrate deployment with Github CI",
      "Rabbitmq, nftables firewall management",
      "create storyblok CMS integration with live-preview"
    ],
    fullTime: false,
  },
  {
    title: "Senior Frontend Developer",
    company: {
      name: 'Hoqus',
      logo: hoqusLogo.src,
      color: {
        primary: '#4a90e2',
        background: '#4a90e2',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.11.2022"),
      end: parseDate("01.09.2023")
    },
    details: "Mostly part-time job with improving site code quality",
    fullTime: false,
  },
  {
    title: "Ruby on Rails / Fullstack developer",
    company: {
      name: 'Productz.com',
      logo: productzLogo.src,
      color: {
        primary: '#ff5252',
        background: '#ff5252',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.07.2020"),
      end: parseDate("01.08.2023")
    },
    details: "Refactor major parts of productz.com, create SPA internal website management panel.",
    items: [
      "Node.JS / Ruby on Rails",
      "React / Vanilla.js",
      "Elasticsearch / Postgres / Redis",
      "CDK / ECS / EC2 management",
      "GTM / GA4 / Universal Tracker"
    ],
    fullTime: false,
  },
  {
    title: "Senior Frontend Developer",
    company: {
      name: 'Answear.com',
      logo: answearLogo.src,
      color: {
        primary: '#5c6bc0',
        background: '#5c6bc0',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.09.2022"),
      end: parseDate("01.11.2023")
    },
    details: "Refactor internal SSR rendring mechanism, speeding up products grid loading",
    items: [
      "Part-time task to help with speeding up site and SEO optimizations",
      "Introduce lazy hydration integrated with SPA application",
      "Lighthouse SEO optimizations",
      "Boost overall site performance"
    ],
    fullTime: false,
  },
  {
    title: "Senior Frontend Developer",
    company: {
      name: 'Bytamic / Liiva',
      logo: bytamicLogo.src,
      color: {
        primary: '#78909c',
        background: '#78909c',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.04.2022"),
      end: parseDate("01.12.2023")
    },
    details: "Cooperation with Liiva and Bytamic in selling houses site maintenance.",
    items: [
      "React / Next.JS / SCSS",
      "CMS Contentful integration",
      "Automatic generate sitemap based on CMS Contentful modifications",
      "Jest / Cypress E2E testing"
    ],
    fullTime: true,
  },
  {
    title: "Senior Fullstack Web Developer",
    company: {
      name: 'Silky Coders',
      logo: silkyLogo.src,
      color: {
        primary: '#26c6da',
        background: '#26c6da',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.07.2021"),
      end: parseDate("30.03.2022")
    },
    details: "Customer Experience Team Leader. Maintain websites of the largest clothes shops in Poland.",
    items: [
      "Creating advanced multi-step return/complaint product creator",
      "Meticulous unit testing all created components",
      "Integration of React components with Magento",
      "Creating internal content management system"
    ],
    fullTime: true,
  },
  {
    title: "RoR / Full Stack Engineer",
    company: {
      name: 'Interia.pl',
      logo: interiaLogo.src,
      color: {
        primary: '#3f51b5',
        background: '#3f51b5',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.04.2016"),
      end: parseDate("01.05.2021")
    },
    details: "Lead frontend development of Interia Adretail applications.",
    items: [
      "Create and maintain Interia.pl layout partials",
      "Development JS components on the biggest e-paper websites in Poland",
      "Creating Adserver implementations",
      "SEO Optimizations",
      "Lerna / monorepo app optimizations"
    ],
    fullTime: true,
  },
  {
    title: "Fullstack Python Developer",
    company: {
      name: 'Quantitative Engineering Design',
      logo: qedLogo.src,
      color: {
        primary: '#f97316',
        background: '#f97316',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.11.2015"),
      end: parseDate("31.12.2016")
    },
    details: "Programming backend and frontend using ES6, JavaScript 1.7, Python Django and Vue.JS.",
    fullTime: false,
  },
  {
    title: "PHP / Frontend Engineer",
    company: {
      name: 'Couporando.pl',
      logo: couporandoLogo.src,
      color: {
        primary: '#3b82f6',
        background: '#3b82f6',
        text: '#ffffff'
      }
    },
    duration: {
      begin: parseDate("01.01.2020"),
      end: parseDate("31.12.2022")
    },
    details: "Part-time support of couporando.pl site, creating kodyrabatowe.interia.pl and kupimytwojanieruchomosc.pl apps.",
    items: [
      "Creating kupimytwojanieruchomosc.pl SPA app, its api and internal panel using Dockerized Node.JS container + NestJS / React / Ramda / TypeORM",
      "Rewrite whole kodyrabatowe.interia.pl front, small backend changes (PHP, SCSS, JS, JQuery)",
      "Maintain biggest coupons websites in Poland:",
      "- kodyrabatowe.interia.pl",
      "- promocje.smaker.pl",
      "- couporando.pl",
      "Implement PHP/CSS/JS page partials in legacy code, tracking implementation and fixes"
    ],
    fullTime: false,
  }
];
