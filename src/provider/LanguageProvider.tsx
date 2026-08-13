import { PropsWithChildren, useEffect } from "react"
import { useLocation, useNavigate } from "react-router";
import { LanguageContext } from "../context/LanguageContext";
import { Lang } from "../__types__";
import { en, es } from "../traductions";


const dictionaries = { es, en }

export const LanguageProvider = ({ children }: PropsWithChildren) => {

    const location = useLocation();
    const navigate = useNavigate();

    const lang: Lang = location.pathname.startsWith('/en') ? 'en' : 'es'

    const switchLang = (lang: Lang) => {
        navigate(lang === 'en' ? '/' : '/en')
    }

    useEffect(() => {
        document.documentElement.lang = lang

        const setMeta = (selector: string, attr: string, value: string) => {
            document.querySelector(selector)?.setAttribute(attr, value)
        }

        document.title = lang === 'en' ? 'Alejo Araya — Front-End Developer' : 'Alejo Araya — Desarrollador Front-End'
        setMeta('meta[name="description"]', 'content', lang === 'en' ? 'Alejo Araya, Front-End Developer specialized in React, TypeScript and Tailwind CSS. Check out my projects and get in touch.' : 'Creo interfaces modernas, responsivas y funcionales, enfocadas en brindar una buena experiencia de usuario.')
        setMeta('link[rel="canonical"]', 'href', lang === 'en' ? 'https://www.alejoaraya.online/en' : 'https://www.alejoaraya.online/')
        setMeta('meta[property="og:title"]', 'content', lang === 'en' ? 'Alejo Araya — Front-End Developer' : 'Alejo Araya — Desarrollador Front - End')
        setMeta('meta[property="og:description"]', 'content', lang === 'en' ? 'Alejo Araya, Front-End Developer specialized in React, TypeScript and Tailwind CSS. Check out my projects and get in touch.' : 'Creo interfaces modernas, responsivas y funcionales, enfocadas en brindar una buena experiencia de usuario.')
        setMeta('meta[property="og:url"]', 'content', lang === 'en' ? 'https://www.alejoaraya.online/en' : 'https://www.alejoaraya.online/')
        setMeta('meta[property="og:locale"]', 'content', lang === 'en' ? 'en_US' : 'es_AR')
    }, [lang])

    return (
        <LanguageContext.Provider value={{ lang, switchLang, t: dictionaries[lang] }}>
            {children}
        </LanguageContext.Provider>
    )
}

