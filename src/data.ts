import {
  Code2,
  FileCode2,
  MonitorSmartphone,
  Palette,
  LayoutTemplate,
  Terminal,
  Database,
  Github,
  Globe
} from 'lucide-react';

import portfolioMockup from './assets/images/portfolio_website_mockup_1779812786912.png';
import agencyMockup from './assets/images/creative_agency_mockup_1779812808870.png';

import sizzlerMenuMockup from './assets/images/sizzler_cafe_menu_mockup_1779813628384.png';
import sizzlerReservationMockup from './assets/images/sizzler_cafe_reservation_mockup_1779813654359.png';
import sizzlerGalleryMockup from './assets/images/sizzler_cafe_gallery_mockup_1779813675150.png';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work Samples', href: '#work-samples' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const WORK_SAMPLES = [
  {
    title: 'Sizzler Cafe UI - Senses Menu',
    description: 'An interactive, sensory-rich menu showcase for an upscale Delhi cafe. Features curated photography, pricing layouts, and an elegant dark aesthetic.',
    review: '"Delhi\'s new obsession. The aesthetics are as undeniable as the flavors." — Lifestyle Magazine',
    image: sizzlerMenuMockup,
    tags: ['Restaurant UI', 'E-commerce', 'Editorial'],
    link: '#'
  },
  {
    title: 'Sizzler Cafe - Reservation & Experience',
    description: 'A seamless booking experience and nightlife showcase. Integrating social proof directly into the high-end dark luxury interface.',
    review: '"Best Indo-Chinese in Mayur Vihar. Period. The dark aesthetic is perfect for dates." — @DelhiNightlife',
    image: sizzlerReservationMockup,
    tags: ['UX Design', 'Booking System', 'Dark UI'],
    link: '#'
  },
  {
    title: 'Sizz. - Atmosphere & Reviews',
    description: 'A gallery and testimonial-driven landing page that highlights the cafe\'s warm ambient lighting and luxurious dining vibe.',
    review: '"Perfect place for an anniversary dinner. The staff makes every evening special." — Food Lovers Verified',
    image: sizzlerGalleryMockup,
    tags: ['Layout', 'Visual Flow', 'Brand Setup'],
    link: '#'
  }
];

export const SKILLS = [
  { name: 'HTML', icon: FileCode2, color: 'text-orange-500' },
  { name: 'CSS', icon: Palette, color: 'text-blue-500' },
  { name: 'JavaScript', icon: Terminal, color: 'text-yellow-400' },
  { name: 'React', icon: Code2, color: 'text-cyan-400' },
  { name: 'Tailwind CSS', icon: LayoutTemplate, color: 'text-teal-400' },
  { name: 'GitHub', icon: Github, color: 'text-white' },
  { name: 'Responsive Design', icon: MonitorSmartphone, color: 'text-purple-400' },
  { name: 'UI/UX Design', icon: Palette, color: 'text-pink-400' },
];

export const PROJECTS = [
  {
    title: 'Modern Portfolio Website',
    description: 'A premium portfolio designed with dark aesthetic, glassmorphism, and smooth Framer Motion animations.',
    image: portfolioMockup,
    tags: ['React', 'Tailwind', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'E-commerce UI',
    description: 'A complete frontend for a luxury e-commerce brand featuring sleek item transitions.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Redux', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Business Landing Page',
    description: 'High-converting responsive landing page designed for an emerging tech startup.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['HTML', 'Tailwind CSS', 'JS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Creative Agency Website',
    description: 'An interactive hero and portfolio showcase built for a creative design agency.',
    image: agencyMockup,
    tags: ['React', 'Framer Motion', 'CSS'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const SERVICES = [
  {
    title: 'Responsive Website Design',
    description: 'Creating websites that look and perform flawlessly across all device screen sizes.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Landing Pages',
    description: 'Designing high-conversion landing pages tailored to specific marketing campaigns.',
    icon: LayoutTemplate,
  },
  {
    title: 'Portfolio Websites',
    description: 'Showcasing your work and skills with premium, highly interactive portfolio designs.',
    icon: Globe,
  },
  {
    title: 'Business Websites',
    description: 'Building robust, professional web presences to elevate modern enterprise brands.',
    icon: Database,
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive, user-centric interfaces focused on engaging user experiences.',
    icon: Palette,
  },
  {
    title: 'Modern Web Interfaces',
    description: 'Developing sleek, futuristic web elements using the latest frontend technologies.',
    icon: Code2,
  }
];
