import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router";
import { LanguageProvider } from "./LanguageProvider";
import { useTranslate } from "../hooks/useTranslate";

// Componente auxiliar para leer el contexto de idioma desde dentro del provider
const Consumer = () => {
  const { lang, switchLang, t } = useTranslate();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="navbar-text">{t.navbar.lenguage}</span>
      <button onClick={() => switchLang(lang)}>switch</button>
    </div>
  );
};

// Componente auxiliar para leer a qué ruta navegó react-router
const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location">{location.pathname}</div>;
};

const renderAt = (initialPath: string) =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <LanguageProvider>
        <Consumer />
        <LocationDisplay />
      </LanguageProvider>
    </MemoryRouter>
  );

describe("LanguageProvider", () => {
  beforeEach(() => {
    // El provider actualiza metatags existentes por selector; sin ellos en
    // el DOM los asserts de SEO no podrían verificar nada.
    document.head.innerHTML = `
      <meta name="description" content="" />
      <link rel="canonical" href="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:url" content="" />
      <meta property="og:locale" content="" />
    `;
  });

  it("detects spanish as the default language on the root path", () => {
    renderAt("/");
    expect(screen.getByTestId("lang").textContent).toBe("es");
  });

  it("detects english when the path starts with /en", () => {
    renderAt("/en");
    expect(screen.getByTestId("lang").textContent).toBe("en");
  });

  it("provides the matching dictionary for the detected language", () => {
    renderAt("/en");
    expect(screen.getByTestId("navbar-text").textContent).toBe("Español");
  });

  it("navigates from spanish to /en when switching language", () => {
    renderAt("/");
    fireEvent.click(screen.getByText("switch"));
    expect(screen.getByTestId("location").textContent).toBe("/en");
  });

  it("navigates from english back to / when switching language", () => {
    renderAt("/en");
    fireEvent.click(screen.getByText("switch"));
    expect(screen.getByTestId("location").textContent).toBe("/");
  });

  it("sets the <html lang> attribute to match the current language", () => {
    renderAt("/en");
    expect(document.documentElement.lang).toBe("en");

    renderAt("/");
    expect(document.documentElement.lang).toBe("es");
  });

  it("sets spanish SEO metadata on the root path", () => {
    renderAt("/");

    expect(document.title).toBe("Alejo Araya — Desarrollador Front-End");
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute("href")
    ).toBe("https://www.alejoaraya.online/");
    expect(
      document.querySelector('meta[property="og:locale"]')?.getAttribute("content")
    ).toBe("es_AR");
    expect(
      document.querySelector('meta[property="og:url"]')?.getAttribute("content")
    ).toBe("https://www.alejoaraya.online/");
  });

  it("sets english SEO metadata on the /en path", () => {
    renderAt("/en");

    expect(document.title).toBe("Alejo Araya — Front-End Developer");
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute("href")
    ).toBe("https://www.alejoaraya.online/en");
    expect(
      document.querySelector('meta[property="og:locale"]')?.getAttribute("content")
    ).toBe("en_US");
    expect(
      document.querySelector('meta[property="og:url"]')?.getAttribute("content")
    ).toBe("https://www.alejoaraya.online/en");
  });

  it("treats any unknown path as spanish (fallback), not as a crash", () => {
    renderAt("/some/random/path");
    expect(screen.getByTestId("lang").textContent).toBe("es");
  });
});
