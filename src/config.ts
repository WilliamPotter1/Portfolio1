import dayjs from 'dayjs';

import cloudternLogo from '~/public/images/cloudtern-logo.jpg';
import nexureLogo from '~/public/images/nexure_iq_logo.jpg';
import kiubixLogo from '~/public/images/kiubix-logo.jpg';
import optimacorporationLogo from '~/public/images/optimacorporation_logo.jpg';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const FULL_NAME = 'DIEGO ANDRES BASTOS CACUA';

export const EMAIL = 'diego2457bc@gmail.com';

export const RESUME = `${SITE_URL}/resume.pdf`;

export const CAREER_START_DATE = '2017-02-01T00:00';

export const EXPERIENCE_YEARS = Math.round(
  dayjs().diff(CAREER_START_DATE, 'year', true),
);

export const WORK_EXPERIENCE = [
  {
    position: 'Senior Software Engineer',
    company: 'CloudTern Solutions',
    image: cloudternLogo,
    startDate: '2024-01-01T00:00',
    endDate: '2025-02-31T00:00',
    description:
      'Designed and implemented LLM-powered applications including AI content generators, document analysis systems, and conversational assistants. Built RAG (Retrieval-Augmented Generation) pipelines combining vector databases with GPT-4 to deliver accurate, context-aware responses. Developed AI-powered PDF/book generation systems with automated layout, image generation, and multilingual support. Integrated OpenAI, Together AI, and Hugging Face APIs with cost-optimized token usage. Implemented machine learning models for natural language processing, text classification, and predictive analytics. Developed ML pipelines for data preprocessing, feature engineering, model training, and deployment. Utilized TensorFlow, PyTorch, and scikit-learn for building and training ML models. Implemented secure authentication, role-based access control, and API key management for AI platforms. Deployed scalable AI services on AWS using Docker and serverless architectures.',
  },
  {
    position: 'AI & Database Engineer',
    company: 'Nexure IQ',
    image: nexureLogo,
    startDate: '2022-06-01T00:00',
    endDate: '2024-02-01T00:00',
    description:
      'At Nexure IQ, I was responsible for developing and maintaining the frontend of the company\'s flagship product, Nexure IQ. I worked with various technologies including React, Next.js, Tailwind CSS, and TypeScript. I also worked with the backend of the product, using Node.js and Express.js. I also worked with the desktop application of the product, using Electron.js. I also worked with the Debian package of the product, using dpkg-deb. I also worked with the CI/CD pipeline of the product, using GitHub Actions.',
  },
  {
    position: 'Back End Developer',
    company: 'KIUBIX',
    image: kiubixLogo,
    startDate: '2020-09-01T00:00',
    endDate: '2022-03-31T00:00',
    description:
      'At Kiubix, I was responsible for developing and maintaining the frontend of the company\'s flagship product, Kiubix. I worked with various technologies including React, Next.js, Tailwind CSS, and TypeScript. I also worked with the backend of the product, using Node.js and Express.js. I also worked with the desktop application of the product, using Electron.js. I also worked with the Debian package of the product, using dpkg-deb. I also worked with the CI/CD pipeline of the product, using GitHub Actions.',
  },
  {
    position: 'Full-stack Developer',
    company: 'Optima Corporation',
    image: optimacorporationLogo,
    startDate: '2018-08-01T00:00',
    endDate: '2020-06-12T00:00',
    description:
      'At Optima Corporation, I was responsible for developing and maintaining the frontend of the company\'s flagship product, Optima Corporation. I worked with various technologies including React, Next.js, Tailwind CSS, and TypeScript. I also worked with the backend of the product, using Node.js and Express.js. I also worked with the desktop application of the product, using Electron.js. I also worked with the Debian package of the product, using dpkg-deb. I also worked with the CI/CD pipeline of the product, using GitHub Actions.',
  },
];

export const DESCRIPTION = `Software engineer mainly focused on frontend with about ${EXPERIENCE_YEARS} years of experience who always pays attention to details and thinks about the end users of a product.`;

export const GITHUB_USERNAME = 'bankmotion';
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const TELEGRAM_USERNAME = 'diegobastos0';
export const TELEGRAM_URL = `https://t.me/${TELEGRAM_USERNAME}`;
export const DISCORD_USERNAME = "diegobastos0";
export const DISCORD_URL = `https://discord.com/users/1425863578128482386`;
export const LINKEDIN_USERNAME = "diego-andres-bastos-cacua-743383376";
export const LINKEDIN_URL = `https://www.linkedin.com/in/${LINKEDIN_USERNAME}`;

export const STACK = [
  'TypeScript',
  'Next.js',
  'React',
  'Material-UI',
  'Tailwind CSS',
  'Angular',
  'Node.js',
  'ExpressJs',
  'MongoDB',
  'PostgreSQL',
  'SQL',
  'Rust',
  'Go',
  'Solidity',
  'Solana',
  'NFT MarketPlace',
  'Git/Github',
  'Python',
  'Playwright',
  'AI/ML',
  'LLM',
  'GPT-4',
  'OpenAI',
  'Together AI',
  'Hugging Face',
  'RAG',
  'Vector Databases',
  'TensorFlow',
  'PyTorch',
  'scikit-learn',
  'Machine Learning',
  'NLP',
];

export const INTERESTS = ['Chess', 'Guitar', 'Pets', 'Dancing', 'Traveling'];

export const TIME_ZONE = 'EST';

export const THEME = {
  light: 'light',
  dark: 'dark',
} as const;

export const THEMES = Object.values(THEME);
