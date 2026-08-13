import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export const useTranslate = () => {
    const context = useContext(LanguageContext)
    if (!context) throw new Error('Wrong context. Use in LanguageProvider')
    return context
}

