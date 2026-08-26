import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { RouterApp } from "./RouterApp";

vi.mock("../pages", () => ({
  BriefcasePage: () => <div>briefcase-page</div>,
  ErrorPage: () => <div>error-page</div>,
}));

describe("RouterApp", () => {
  it("renders the briefcase page on the spanish root path (/)", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <RouterApp />
      </MemoryRouter>
    );

    expect(screen.getByText("briefcase-page")).toBeInTheDocument();
  });

  it("renders the briefcase page on the english root path (/en/)", () => {
    render(
      <MemoryRouter initialEntries={["/en/"]}>
        <RouterApp />
      </MemoryRouter>
    );

    expect(screen.getByText("briefcase-page")).toBeInTheDocument();
  });

  it("renders the error page for any unknown path instead of crashing", () => {
    render(
      <MemoryRouter initialEntries={["/this-page-does-not-exist"]}>
        <RouterApp />
      </MemoryRouter>
    );

    expect(screen.getByText("error-page")).toBeInTheDocument();
  });
});
