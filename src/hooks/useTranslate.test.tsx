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
        // Se compara contra el diccionario real (fuente de verdad) en vez de
        // duplicar todo el contenido acá: así el test no se rompe cada vez
        // que se agrega/cambia un texto, y sigue detectando si el hook
        // devuelve el diccionario equivocado.
        expect(t).toEqual(es)
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
        expect(t).toEqual(en)
    })

    it('should throw a error the out of provider', async () => {
        expect(() => renderHook(() => useTranslate())).toThrow('Wrong context. Use in LanguageProvider')
    })

    it('should never return the same dictionary for es and en (regression guard)', () => {
        // Si alguna vez "en"/"es" terminan apuntando al mismo objeto (por un
        // mal merge en traductions/index.ts) los dos idiomas mostrarían el
        // mismo texto sin que ningún otro test lo note.
        expect(es).not.toBe(en)
        expect(es.navbar.lenguage).not.toBe(en.navbar.lenguage)
    })
})
