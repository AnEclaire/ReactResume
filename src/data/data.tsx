import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Emma Gutierrez Resume',
  description: "Emma Gutierrez's Resume Website.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Emma Gutierrez.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Fontana, CA based <strong className="text-stone-100"> Software Engineer senior</strong>, currently working
        on a Computer Science Degree at <strong className="text-stone-100">Cal Poly Pomona.</strong> with the goal to
        eventually work the tech field as a programmer focusing on Machine Learning, AI, and Web Developement. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My free time overlaps with my studies and I am frequently found managing <strong className="text-stone-100">servers</strong>,
        learning new <strong className="text-stone-100">programming languages</strong>, or occassionaly testing out new {' '}
        <strong className="text-stone-100">technologies and software</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/1kbr0K4XtRY9TfW-EV7VmltLOv9uaDO38PBz-LUDPcz0/edit?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have always had a passion for learning new technologies and working with computers.
  Primarily, I am always striving to deepen my knowledge of new programming languages and toolsets. I am
  currentlly engaged in familiarizing myself with machine learning, language models, and software engineering
  as part of several new course. When it comes to new languages, technology, software engineering, or computers, 
  I am always ready and willing to dedicate myself completely to grasping it as much as I can.`,
  aboutItems: [
    {label: 'Location', text: 'Fontana, CA', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / Mexican', Icon: FlagIcon},
    {label: 'Interests', text: 'Video and Tabletop Games, Tech, Severs, Programming, K-Drama, TV', Icon: SparklesIcon},
    {label: 'Study', text: 'California State Polytechnic University, Pomona', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Python',
        level: 5,
      },
      {
        name: 'C++',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Swift',
        level: 6,
      },
      {
        name: 'Flutter',
        level: 6,
      },

    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Yet Another Phasmophobia Tracker - YAPT',
    description: 'Senior Project for Mobile Development Class. Simple Phasmophobia game aid and tracker.',
    url: 'https://github.com/AnEclaire/YAPT',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2023 - Ongoing',
    location: 'California State Polytechnic University, Pomona',
    title: 'Bachelors in Computer Science',
    content: <p>Throughout this last year I have deepend my skillset by learning multiplatform mobile development, becoming familiarized with 
      different forms of artificial intelligence, practicing Cybersecurity standards, and more. My second admission to Cal Poly has also served 
      to thoroughly refresh my memory and skills on the topics I learned from my first admission. In my first semester back after 5 years of leave 
      I earned Dean's List for grades attained in my courses.</p>,
  },
  {
    date: 'August 2012 - March 2018',
    location: 'California State Polytechnic University, Pomona',
    title: 'Bachelors in Computer Science',
    content: <p>Over the course of my first admission to this Program I learned a myriad of useful tools and languages. Notably, the emphasis
      was on Java development and as such I learned both frontend and backend development. I also learned how to develop, test, and deploy web apps, 
      C++ development, Assembly Languages, Computer Networking, and Python. During this time period I also learned how to work on servers and server
      environment such as Ubuntu Server and UnRaid, and how to work on Docker.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2020 - August 2023',
    location: 'Gamgeoloy Upland',
    title: 'Retail Point of Sales, Customer Service Sepcialist, Ruby/Shopify Script Developer',
    content: (
      <p>
        I worked towards mazimizing SEO for the majority of new products inventoried on location. Primary tasks
        revolved around: Serving customers, managing inventory, learning Shopify optimization techniques, maintaining 
        on-site computers and software, and designing scripts that controlled back-end components of the shopping experience
        with the Shopify native scripting language and occasionally Ruby. I was also responsible for maintaining team cohesion
        and flexibility around tight deadlines and ensuring the timely processing of product orders to meet proper release windows. 
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to me via any of the provided methods. Email is Preferred.',
  items: [
    {
      type: ContactType.Email,
      text: 'contact@emmagutierrez.net',
      href: 'mailto:contact@emmagutierrez.net',
    },
    {
      type: ContactType.Location,
      text: 'Fontana California',
      href: 'https://www.google.ca/maps/place/Fontana,+CA/@34.1087786,-117.5039689,13z',
    },
    {
      type: ContactType.Instagram,
      text: '@eclaireds',
      href: 'https://www.instagram.com/eclaireds/',
    },
    {
      type: ContactType.Github,
      text: 'AnEclaire',
      href: 'https://github.com/AnEclaire',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/AnEclaire'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ecgutierrez/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/eclaireds/'},
];
