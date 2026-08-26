import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  it('should call switchLang with the current language when clicked, starting from spanish', async () => {
    const user = userEvent.setup()
    const switchLangMock = vi.fn()

    vi.mocked(useTranslate).mockReturnValue({
      lang: 'es',
      switchLang: switchLangMock,
      t: es
    })

    render(<Navbar />)

    await user.click(screen.getByRole('button'))

    expect(switchLangMock).toHaveBeenCalledTimes(1)
    expect(switchLangMock).toHaveBeenCalledWith('es')
  })

  it('should call switchLang with the current language when clicked, starting from english', async () => {
    const user = userEvent.setup()
    const switchLangMock = vi.fn()

    vi.mocked(useTranslate).mockReturnValue({
      lang: 'en',
      switchLang: switchLangMock,
      t: en
    })

    render(<Navbar />)

    await user.click(screen.getByRole('button'))

    expect(switchLangMock).toHaveBeenCalledTimes(1)
    expect(switchLangMock).toHaveBeenCalledWith('en')
  })

})
