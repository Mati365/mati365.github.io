import uploujksiazkeScreen from '~/assets/projects/upolujksiazke.png';
import tsCCompilerScreen from '~/assets/projects/ts-c-compiler.png';
import underControlScreen from '~/assets/projects/under-control.png';
import podmanScreen from '~/assets/projects/podman-logo.png';
import librusApiScreen from '~/assets/projects/librus-api.png';
import microRacingScreen from '~/assets/projects/micro-racing.png';
import ckeditorRailsScreen from '~/assets/projects/ckeditor-rails.png';
import surveysScreen from '~/assets/projects/surveys.png';

export interface Project {
  title: string;
  slug: string;
  screenshot: string;
  description: string;
  href: string;
  commercial: boolean;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "upolujksiazke.pl",
    slug: "upolujksiazke",
    screenshot: uploujksiazkeScreen.src,
    description: "Open-source book review aggregator using React, Nest.JS and Elasticsearch for fuzzy logic book matching with collaborative filtering and bot integration.",
    href: "https://github.com/Mati365/upolujksiazke.pl",
    commercial: false,
    tags: ['TypeScript', 'React', 'NestJS', 'Elasticsearch', 'Node.js']
  },
  {
    title: "Interreg Survey",
    slug: "interreg-survey",
    screenshot: surveysScreen.src,
    description: "Survey application for Interreg project with custom form builder, multi-language support and advanced reporting features using Elasticsearch to dynamically generate reports and aggregations.",
    href: "https://www.bright.global/en/products/bright-survey",
    commercial: true,
    tags: ['TypeScript', 'React', 'Marble.js', 'Elasticsearch', 'Node.js']
  },
  {
    title: "CKEditor 5 Rails",
    slug: "ckeditor-rails",
    screenshot: ckeditorRailsScreen.src,
    description: "CKEditor 5 Ruby gem - seamless integration with Rails through web components and helper methods. Supports both GPL and commercial licenses with flexible CDN options and translations.",
    href: "https://github.com/Mati365/ckeditor5-rails/tree/main",
    commercial: false,
    tags: ['Ruby', 'Rails', 'CKEditor', "Propshaft", "Assets pipeline"]
  },
  {
    title: "C Compiler in TypeScript",
    slug: "ts-c-compiler",
    screenshot: tsCCompilerScreen.src,
    description: "Multipass portable C lang compiler toolkit with IR code generator including backend, frontend and optimizer phases. Designed to simple prototyping 16bit toy operating systems and games.",
    href: "https://github.com/Mati365/ts-c-compiler",
    commercial: false,
    tags: ['TypeScript', 'C', 'Node.js']
  },
  {
    title: "under-control",
    slug: "under-control",
    screenshot: underControlScreen.src,
    description: "Lightweight form control library for React that treats all forms and inputs as recursive composable controls. Alternative to react-hook-form, formik, react-ts-form with focus on component controllability.",
    href: "https://github.com/Mati365/under-control",
    commercial: false,
    tags: ['TypeScript', 'React']
  },
  {
    title: "Podman Quadlet Ansible ARM Boilerplate",
    slug: "podman-quadlet",
    screenshot: podmanScreen.src,
    description: "Example of standalone application deployment to Hetzner Cloud using Rootless podman quadlet systemd services. Compatible with RaspberryPI, costs under $5/month.",
    href: "https://github.com/Mati365/hetzner-podman-bunjs-deploy",
    commercial: false,
    tags: ['Ansible', 'Linux', 'Docker', 'Podman']
  },
  {
    title: "Librus-API",
    slug: "librus-api",
    screenshot: librusApiScreen.src,
    description: "Open source HTTP client for parsing HTML responses from the Librus/Synergia electronic journal server. Unofficial integration package.",
    href: "https://github.com/Mati365/librus-api",
    commercial: false,
    tags: ['Node.js', 'TypeScript']
  },
  {
    title: "Micro-racing",
    slug: "micro-racing",
    screenshot: microRacingScreen.src,
    description: "Multiplayer 3D isometric racing game developed with WebGL 2.x and neural networks integration.",
    href: "https://github.com/Mati365/micro-racing",
    commercial: false,
    tags: ['TypeScript', 'WebGL', 'Node.js']
  }
];
