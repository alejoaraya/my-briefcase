import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { Navbar } from "./Navbar";
import { useTranslate } from "../../hooks/useTranslate";
import { en, es } from "../../traductions";

vi.mock('../../hooks/useTranslate.tsx', () => ({
  useTranslate: vi.fn()
}))

describe('Navbar', () => {

  it('should show text in english', () => {
    vi.mocked(useTranslate).mockReturnValue({
      lang: 'en',
      switchLang: vi.fn(),
      t: en
    })

    render(<Navbar />)

    expect(screen.getByText('Español')).toBeTruthy()

  })

  it('should show text in spanish', () => {
    vi.mocked(useTranslate).mockReturnValue({
      lang: 'es',
      switchLang: vi.fn(),
      t: es
    })

    render(<Navbar />)

    expect(screen.getByText('English')).toBeTruthy()

  })

})
