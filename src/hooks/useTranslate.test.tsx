import { describe, expect, it, vi } from "vitest";
import { useTranslate } from "./useTranslate";
import { renderHook } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { en, es } from "../traductions";

describe('useTranslate', () => {
    it('should return corrects spanish params ', async () => {
        const { result } = renderHook(() => useTranslate(), {
            wrapper: ({ children }: PropsWithChildren) => (
                <LanguageContext.Provider value={{ lang: "es", switchLang: vi.fn(), t: es }}>
                    {children}
                </LanguageContext.Provider>
            )
        })

        const { lang, switchLang, t } = result.current


        expect(lang).toBe('es')
        expect(switchLang).toHaveBeenCalledTimes(0)
        expect(t).toEqual({
            navbar: {
                lenguage: 'English'
            },
            hero: {
                hireBadge: 'Disponible para trabajar',
                specialization: 'Desarrollador Front-End',
                gretting: 'Hola, soy Alejo Araya',
                shortDescription: 'Creo interfaces modernas, responsivas y funcionales, enfocadas en brindar una buena experiencia de usuario.',
                navigateProjects: "Ver mis proyectos",
                downloadCV: "Descargar CV",
                datatipMailIn: "Click para copiar",
                datatipMailOut: "¡Copiado!",
            },
            workspace: {
                title: "EXPERIENCIA PROFESIONAL",
                currentJobInformation: {
                    title: 'Help Desk Analyst',
                    enterprise: 'KONECTA',
                    dateStart: 'Jun 2025',
                    dateEnd: 'Actualidad',
                    desctiption: 'Atención y registro de incidencias técnicas, soporte remoto en software y hardware, escalamiento de problemas a nivel superior, seguimiento y cierre de tickets, y documentación de soluciones en la base de conocimientos.',
                },
                devJobInformation: {
                    title: 'Desarrollador Web',
                    enterprise: 'RED DE SALUD TECNOLÓGICA (RST)',
                    dateStart: 'May 2023',
                    dateEnd: 'Jul 2024',
                    desctiption: 'Colaboración en el desarrollo de la interfaz de usuario, desarrollo de componentes de React, integración de APIs, optimización del rendimiento y mantenimiento del código.',

                },
                supportJobInformation: {
                    title: 'Mantenimiento y Reparación de Computadoras',
                    enterprise: 'Emprendimiento',
                    dateStart: 'Mar 2019',
                    dateEnd: 'Actualidad',
                    desctiption: 'Resolución de problemas de software, armado de PC, recuperación de datos y mantenimiento de servidores.',

                },
                subtitle: "Estudios",
                studyUniversitaryInformation: {
                    title: 'TECNICATURA SUPERIOR EN PROGRAMACIÓN',
                    academy: 'UNIVERSIDAD TECNOLÓGICA NACIONAL',
                    dateStart: 'Ago 2021',
                    dateEnd: 'Nov 2023',
                },
                supportStudyInformation: {
                    title: 'Mantenimiento y Reparación de Computadoras',
                    academy: 'NEWTON - ESCUELA DE CAPACITACIÓN',
                    dateStart: 'Mar 2018',
                    dateEnd: 'Mar 2019',
                },
            },
            projects: {
                title: "PROYECTOS DESTACADOS",
                cachavachaERPInformation: {
                    description: "Plataforma web para digitalización y gestión de alquileres de disfraces. Centraliza clientes, stock, reservas y comprobantes en tiempo real.",
                },
                raxtechSPAInformation: {
                    description: "Landing page de RaxTech, estudio de soluciones tecnológicas: sitios web, sistemas de gestión, automatización de tareas y asistentes con IA.",
                },
                cachavachaSPAInformation: {
                    description: "Landing page de alquiler de disfraces en Mendoza. Muestra el catálogo de personajes para fiestas temáticas, con foco en variedad y calidad.",
                },
                braidedSPAInformation: {
                    description: "Landing page de Braided: estampado, sublimado y vinilo textil para indumentaria en Mendoza, para empresas, eventos y particulares.",
                },
                buttomTag: "Ver Demo",
            },
            skills: {
                title: 'HABILIDADES',
                backendTag: "Back-end / Base de datos",
                toolsTag: "Herramientas",
                softSkillTag: "Habilidades blandas",
                softSkillBadges: [
                    { title: 'Resolución de Problemas', isImportant: true },
                    { title: 'Comunicación', isImportant: true },
                    { title: 'Capacidad Analitica', isImportant: true },
                    { title: 'Adaptabilidad', isImportant: true },
                ]
            },
            about: {
                title: 'SOBRE MÍ',
                firstParagraph: 'Soy desarrollador Front-End con experiencia en soporte técnico y desarrollo de aplicaciones web. Me gusta crear interfaces claras, funcionales y bien estructuradas, cuidando tanto la experiencia del usuario como la calidad del código.',
                secondParagraph: 'Actualmente trabajo con tecnologías como React, TypeScript, JavaScript y Tailwind CSS. Me interesa seguir creciendo como desarrollador, participar en proyectos reales y aportar soluciones prácticas a través de la tecnología.',

            },
            footer: {
                madeBy: "Hecho por mí"
            }
        })

    })

    it('should return corrects english params ', async () => {
        const { result } = renderHook(() => useTranslate(), {
            wrapper: ({ children }: PropsWithChildren) => (
                <LanguageContext.Provider value={{ lang: "en", switchLang: vi.fn(), t: en }}>
                    {children}
                </LanguageContext.Provider>
            )
        })

        const { lang, switchLang, t } = result.current


        expect(lang).toBe('en')
        expect(switchLang).toHaveBeenCalledTimes(0)
        expect(t).toEqual({

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
                    desctiption: 'Handling and logging of technical incidents, remote support for software and hardware, issue escalation, ticket follow-up and closure, and documentation of solutions in the knowledge base.',
                },
                devJobInformation: {
                    title: 'Web Developer',
                    enterprise: 'RED DE SALUD TECNOLÓGICA (RST)',
                    dateStart: 'May 2023',
                    dateEnd: 'Jul 2024',
                    desctiption: 'Collaboration on user interface development, React component development, API integration, performance optimization, and code maintenance.',

                },
                supportJobInformation: {
                    title: 'Computer Maintenance and Repair',
                    enterprise: 'Self-employed',
                    dateStart: 'Mar 2019',
                    dateEnd: 'Present',
                    desctiption: 'Software troubleshooting, PC assembly, data recovery, and server maintenance.',

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
                },
                raxtechSPAInformation: {
                    description: "Landing page for RaxTech, a tech solutions studio: websites, management systems, task automation, and AI assistants.",
                },
                cachavachaSPAInformation: {
                    description: "Landing page for a costume rental business in Mendoza. Showcases the character catalog for themed parties.",
                },
                braidedSPAInformation: {
                    description: "Landing page for Braided: custom apparel printing and sublimation in Mendoza, for businesses, events, and individuals.",
                },
                buttomTag: "View Demo",
            },
            skills: {
                title: 'SKILLS',
                backendTag: "Back-end / Database",
                toolsTag: "Tools",
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
        })

    })

    it('should throw a error the out of provider', async () => {
        expect(() => renderHook(() => useTranslate())).toThrow('Wrong context. Use in LanguageProvider')
    })
})