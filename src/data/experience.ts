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
      begin: parseDate("01.02.2024"),
      end: null
    },
    details: "Contributing to CKEditor 5, one of the most popular open-source text editor in the world.",
    items: [
      "Resolved critical issues for high-profile clients including CNN, Disney, Volvo, Microsoft, Siemens, UNICEF, Epic, and AT&T",
      "Enhanced accessibility by addressing A11y WCAG issues for government clients such as the Australian and UK Governments",
      "Implemented SoC 2 security patches to ensure robust security compliance",
      "Developed and enforced ESLint rules, integrating custom TS-Morph analysis into the CI build process",
      "Maintained and improved CKEditor integrations for React, Angular, and Vue, including refactoring initialization mechanisms and resolving race conditions",
      "Actively contributed to open-source projects and engaged with the community",
      "Integrated AI capabilities into the editor",
      "Extended the core diffing algorithm of the Operational Transformation framework",
      "Enhanced clipboard support for tables",
      "Implemented search-as-you-type functionality",
      "Developed reusable UI components, such as dropdowns, for various integrations",
      "Improved the editor model AST copy & paste functionality",
      "Upgraded accessibility features, ensuring WCAG VPAT compliance across major parts of the editor"
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
      "Lead project coordination and development",
      "Designed backend, frontend, and infrastructure architecture for new projects (mostly hexagonal, serverless - AWS Lambda)",
      "Designed and implemented monadic functional backend modules using a ZIO-like approach with fp-ts, io-ts, and kysely",
      "Implemented Contentful, JIRA, Storyblok, Sendgrid, Brevo, Piwik, and ActiveCampaign backend/frontend CMS integrations",
      "Set up deployments and infrastructure in AWS CDK, ECS, EC2, Lambda, Cognito, CloudFront, S3, VPC, Route53",
      "Set up CI and infrastructure for Ansible, Vagrant, Podman Quadlet, SystemD, MicroOS, and Linux projects",
      "Configured nftables firewall and Linux on simple Debian 12 servers",
      "Set up and implemented an aggregated search engine using AWS OpenSearch/Elasticsearch",
      "Created zero-downtime reindexing for Elasticsearch engine with facets aggregation system",
      "Developed dynamic aggregations fuzzy search conditions builder using AST approach",
      "Designed architecture and implemented new CMS systems",
      "Integrated Turbo Monorepo, D3, Playwright, React, Jest, Next.js, Nest.js, Marble.js, and GraphQL",
      "Conducted E2E testing with Playwright and Jest",
      "Created and optimized Podman/Docker and GitHub CI",
      "Worked with GA4, GTM, and Piwik under ISO27001 jurisdiction"
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
      "Implemented infrastructure and achieved sub-1-minute deployment for Dockerized Java and Node applications",
      "Managed cloud infrastructure on OVH and Hetzner using Podman Quadlet and Linux",
      "Developed a single-page application for wood selling using React, Ramda, TypeScript, NestJS, Node, and TypeORM",
      "Worked on government projects related to environmental protection (Główny Inspektorat Ochrony Środowiska)",
      "Created and integrated Docker mono-repo app deployments with GitHub CI",
      "Performed DevOps tasks including Dockerizing applications, creating end-to-end tests, and setting up UAT environments",
      "Managed RabbitMQ and firewalls using nftables",
      "Set up dynamic deployments on staging environments using Docker Swarm, Ansible, Traefik, and GitHub pipelines in OVH cloud",
      "Integrated Storyblok CMS with live-preview in a legacy codebase",
      "Handled recovery and rollback tasks"
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
      "GTM / GA4 / Universal Tracker",
      "Managed AWS EC2 and Cloudflare"
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
      "Part-time task to help with speeding up the site and SEO optimizations using React, Jest, Node, and Redis",
      "Introduced lazy hydration integrated with the SPA application",
      "Implemented a new approach to perform async SSR with support for Redis, IndexedDB, and memory cache",
      "Conducted Lighthouse SEO optimizations",
      "Boosted overall site performance"
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
      "Created an advanced multi-step return/complaint product creator, used by millions of users across all LPP markets",
      "Conducted meticulous unit testing of all created components",
      "Integrated React components with Magento",
      "Developed an internal content management system",
      "Implemented a fuzzy campaign product targeting system for major brands in Poland (Reserved, House, Mohito, Cropp)"
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
      "Created and maintained Interia.pl layout partials",
      "Developed and maintained JS components on major e-paper websites in Poland such as Promocyjni, Okazjum, Promoceny, Ding, Adretail, and widgets on Interia.pl",
      "Created and maintained internal Interia.pl web panels",
      "Implemented Adserver integrations (Prebid, Criteo, Google Ads, Adocean), including ad creation and tracking",
      "Integrated reusable React components on third-party websites using Adserver",
      "Created a reusable Leaflet reader component",
      "Developed SPA polymorphic microservice-based apps with Redis and GraphQL integration",
      "Conducted SEO optimizations, including creating an automated sitemap generation system",
      "Implemented a fast GraphQL cached client with batching, client cache, and Redis support",
      "Created a fast external React partial prerendering system to introduce SEO-optimized components on several websites",
      "Performed Lerna/monorepo app optimizations",
      "Used Node.js, React, Redux, CoffeeScript, GraphQL (Apollo), Angular, ES6/7/8",
      "Worked with Google Tag Manager, GPT, Gulp/Webpack, Adocean, JSS",
      "Applied Functional Programming using Ramda, Ramda Fantasy, RX, and Rails"
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
    items: [
      "Maintain Guidebase.com in Angular 1.x, JQuery.",
      "Simple BMW presentation for self driving car - Angular 1.x with IE 10 support.",
    ]
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
