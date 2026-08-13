import { createContext } from "react";
import { Lang } from "../__types__";
import { es } from '../traductions';


export interface LanguageContextProps {
    lang: Lang,
    t: typeof es
    switchLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextProps | null>(null);
