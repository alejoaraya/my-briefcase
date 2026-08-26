import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectItem } from "./ProjectItem";
import { ReactIcon, TypescriptIcon } from "../../../assets/icons";

const baseProps = {
  title: "TestProject",
  badgeName: "SPA",
  description: "A test project description",
  demoButtonText: "Ver Demo",
  info_url: {
    github: "https://github.com/example/repo",
    demo: "https://example-demo.com",
    figma: "https://figma.com/example",
  },
  stack: [
    { icon: ReactIcon, name: "React" },
    { icon: TypescriptIcon, name: "TypeScript" },
  ],
};

describe("ProjectItem", () => {
  it("renders the title, badge and description", () => {
    render(<ProjectItem {...baseProps} />);

    expect(screen.getByText("TestProject")).toBeInTheDocument();
    expect(screen.getByText("SPA")).toBeInTheDocument();
    expect(screen.getByText("A test project description")).toBeInTheDocument();
  });

  it("falls back to the default image when image_url is not provided", () => {
    render(<ProjectItem {...baseProps} />);

    const image = screen.getByAltText("TestProject - SPA");
    expect(image.getAttribute("src")).toBe("/assets/projects-images/25729.webp");
  });

  it("uses the provided image_url and alt text", () => {
    render(<ProjectItem {...baseProps} image_url="/assets/projects-images/custom.webp" />);

    const image = screen.getByAltText("TestProject - SPA");
    expect(image.getAttribute("src")).toBe("/assets/projects-images/custom.webp");
  });

  it("wires the demo, github and figma buttons to their urls", () => {
    render(<ProjectItem {...baseProps} />);

    // Los SVG de estos íconos traen su propio <title>Github</title> /
    // <title>Figma</title> para accesibilidad, que también matchea con
    // getByText: por eso acotamos la búsqueda al <span> de texto del botón.
    expect(
      screen.getByText("Ver Demo", { selector: "span" }).closest("a")?.getAttribute("href")
    ).toBe("https://example-demo.com");
    expect(
      screen.getByText("Github", { selector: "span" }).closest("a")?.getAttribute("href")
    ).toBe("https://github.com/example/repo");
    expect(
      screen.getByText("Figma", { selector: "span" }).closest("a")?.getAttribute("href")
    ).toBe("https://figma.com/example");
  });

  it("disables the demo button instead of linking nowhere when no demo url is set", () => {
    render(
      <ProjectItem
        {...baseProps}
        info_url={{ github: baseProps.info_url.github }}
      />
    );

    const demoLink = screen.getByText("Ver Demo").closest("a");
    expect(demoLink?.getAttribute("href")).toBeNull();
    expect(demoLink?.getAttribute("aria-disabled")).toBe("true");
  });

  it("disables the figma button instead of linking nowhere when no figma url is set", () => {
    render(
      <ProjectItem
        {...baseProps}
        info_url={{ github: baseProps.info_url.github, demo: baseProps.info_url.demo }}
      />
    );

    const figmaLink = screen.getByText("Figma", { selector: "span" }).closest("a");
    expect(figmaLink?.getAttribute("href")).toBeNull();
    expect(figmaLink?.getAttribute("aria-disabled")).toBe("true");
  });

  it("renders every technology passed in the stack", () => {
    render(<ProjectItem {...baseProps} />);

    // Mismo motivo que arriba: el <svg> de cada tecnología trae su propio
    // <title>React</title>, así que acotamos al <span> con el nombre.
    expect(screen.getByText("React", { selector: "span" })).toBeInTheDocument();
    expect(screen.getByText("TypeScript", { selector: "span" })).toBeInTheDocument();
  });

  it("applies the outstanding styling when outstanding is true", () => {
    const { container } = render(<ProjectItem {...baseProps} outstanding />);

    const card = container.querySelector(".card");
    expect(card?.className).toContain("border-2");
  });

  it("does not apply the outstanding styling by default", () => {
    const { container } = render(<ProjectItem {...baseProps} />);

    const card = container.querySelector(".card");
    expect(card?.className).not.toContain("border-2");
  });
});
