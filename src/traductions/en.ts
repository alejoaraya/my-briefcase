import { es } from './es';
export const en = {

    navbar: {
        lenguage: 'Español'
    },
    hero: {
        hireBadge: 'Available for work',
        specialization: 'Front-End Developer',
        gretting: "Hi, I'm Alejo Araya",
        shortDescription: 'I build modern, responsive and functional interfaces, focused on delivering a great user experience.',
        navigateProjects: "View my projects",
        downloadCV: "Download CV",
        datatipMailIn: "Click to copy",
        datatipMailOut: "Copied!",
    },
    workspace: {
        title: "PROFESSIONAL EXPERIENCE",
        currentJobInformation: {
            title: 'Help Desk Analyst',
            enterprise: 'KONECTA',
            dateStart: 'Jun 2025',
            dateEnd: 'Present',
            desctiption: 'First-level technical support and incident resolution for telecommunications customers, ticket management and documentation ensuring follow-up through final resolution, and escalation protocols for complex issues along with guidance on configuration and connectivity.',
        },
        devJobInformation: {
            title: 'Freelance Software Support & Developer',
            enterprise: 'RaxTech',
            dateStart: 'Jul 2024',
            dateEnd: 'Present',
            desctiption: 'Design, development and implementation of custom software services and automations for small and medium businesses, integration of AI tools to optimize operational tasks and client workflows, and preventive and corrective technical support for the applications built, including unit tests to ensure stability.',

        },
        supportJobInformation: {
            title: 'Computer Maintenance and Repair',
            enterprise: 'Self-employed',
            dateStart: 'Feb 2021',
            dateEnd: 'Present',
            desctiption: 'Diagnosis and resolution of software and hardware failures at the component level.',

        },
        subtitle: "Education",
        studyUniversitaryInformation: {
            title: 'ADVANCED TECHNICAL DEGREE IN PROGRAMMING',
            academy: 'UNIVERSIDAD TECNOLÓGICA NACIONAL',
            dateStart: 'Aug 2021',
            dateEnd: 'Nov 2023',
        },
        supportStudyInformation: {
            title: 'Computer Maintenance and Repair',
            academy: 'NEWTON - ESCUELA DE CAPACITACIÓN',
            dateStart: 'Mar 2018',
            dateEnd: 'Mar 2019',
        },
    },
    projects: {
        title: "FEATURED PROJECTS",
        cachavachaERPInformation: {
            description: "Web platform for digitizing and managing costume rentals. Centralizes customers, stock, bookings, and receipts in real time.",
            arialLabel: "View demo of Cachavacha's ERP",
        },
        raxtechSPAInformation: {
            description: "Landing page for RaxTech, a tech solutions studio: websites, management systems, task automation, and AI assistants.",
            arialLabel: "View demo of Raxtech's SPA",
        },
        cachavachaSPAInformation: {
            description: "Landing page for a costume rental business in Mendoza. Showcases the character catalog for themed parties.",
            arialLabel: "View demo of Cachavacha's SPA",
        },
        braidedSPAInformation: {
            description: "Landing page for Braided: custom apparel printing and sublimation in Mendoza, for businesses, events, and individuals.",
            arialLabel: "View demo of Braided's SPA",
        },
        buttomTag: "View Demo",
    },
    skills: {
        title: 'SKILLS',
        backendTag: "Back-end / Database",
        toolsTag: "Tools",
        supportTag: "Support / Automation",
        softSkillTag: "Soft Skills",
        softSkillBadges: [
            { title: 'Problem Solving', isImportant: true },
            { title: 'Communication', isImportant: true },
            { title: 'Analytical Thinking', isImportant: true },
            { title: 'Adaptability', isImportant: true },
        ]
    },
    about: {
        title: 'ABOUT ME',
        firstParagraph: "I'm a Front-End Developer with experience in technical support and web application development. I enjoy building clear, functional, and well-structured interfaces, paying attention to both user experience and code quality.",
        secondParagraph: "I currently work with technologies such as React, TypeScript, JavaScript, and Tailwind CSS. I'm interested in continuing to grow as a developer, taking part in real projects, and delivering practical solutions through technology.",

    },
    footer: {
        madeBy: "Made by me"
    }
} as typeof es
