import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("scrolls back to the top when the back-to-top button is clicked", async () => {
    const user = userEvent.setup();
    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;

    render(<Footer />);

    await user.click(screen.getByRole("button", { name: /volver arriba/i }));

    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "smooth" });
  });
});
