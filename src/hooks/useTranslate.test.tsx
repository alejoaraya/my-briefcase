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
        expect(es).not.toBe(en)
        expect(es.navbar.lenguage).not.toBe(en.navbar.lenguage)
    })
})
