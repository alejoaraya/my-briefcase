import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectsSection } from "./ProjectsSection";
import { useTranslate } from "../../hooks/useTranslate";
import { es } from "../../traductions";

vi.mock('../../hooks/useTranslate.tsx', () => ({
  useTranslate: vi.fn()
}))

describe("ProjectsSection", () => {

  it("renders the four featured projects with their titles and badges", () => {
    vi.mocked(useTranslate).mockReturnValue({ lang: "es", switchLang: vi.fn(), t: es });

    render(<ProjectsSection />);

    const titles = screen.getAllByRole("heading", { level: 3 }).map((el) => el.textContent);
    expect(titles).toEqual(["Cachavacha", "RaxTech", "Cachavacha", "Braided"]);
  });

  it("only marks the Cachavacha ERP project as outstanding", () => {
    vi.mocked(useTranslate).mockReturnValue({ lang: "es", switchLang: vi.fn(), t: es });

    const { container } = render(<ProjectsSection />);

    const cards = container.querySelectorAll(".card");
    expect(cards).toHaveLength(4);
    expect(cards[0].className).toContain("border-2");
    expect(cards[1].className).not.toContain("border-2");
    expect(cards[2].className).not.toContain("border-2");
    expect(cards[3].className).not.toContain("border-2");
  });

  it("gives every project a working github link", () => {
    vi.mocked(useTranslate).mockReturnValue({ lang: "es", switchLang: vi.fn(), t: es });

    render(<ProjectsSection />);

    const githubLinks = screen
      .getAllByText("Github", { selector: "span" })
      .map((el) => el.closest("a")?.getAttribute("href"));
    expect(githubLinks).toEqual([
      "https://github.com/raxtech-solution/Cachavacha-Frontend",
      "https://github.com/raxtech-solution/raxtech-landing-page",
      "https://github.com/raxtech-solution/cachavacha-landing-page",
      "https://github.com/raxtech-solution/braided-landing-page",
    ]);
  });
});
