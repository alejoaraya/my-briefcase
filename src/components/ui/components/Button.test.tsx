import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";
import { CssIcon } from "../../../assets/icons";

describe('Button', () => {
  it('should show the text', () => {
    render(<Button text="buttonNameTest" />)
    expect(screen.getByText('buttonNameTest'))
  })

  it('should change the href for the url input', () => {
    render(<Button text="buttonNameTest" url="https://www.google.com/" />)

    const button = screen.getByRole('link')

    expect(button.getAttribute('href')).toBe("https://www.google.com/")
  })

  it('should be disabled', () => {
    const { container } = render(<Button text="buttonNameTest" url="https://www.google.com/" disabled />)

    const button = container.querySelector('a')

    expect(button?.getAttribute('aria-disabled')).toBe('true')
    expect(button?.getAttribute('href')).toBeNull()
  })

  it('if it disabled should not can click it ', () => {
    const user = userEvent.setup()
    const onClickMocked = vi.fn()

    render(<Button text="buttonNameTest" url="https://www.google.com/" disabled onClick={onClickMocked} />)

    const button = screen.getByText('buttonNameTest')

    user.click(button)

    expect(onClickMocked).toHaveBeenCalledTimes(0)
  })

  it('should get a icon', () => {
    render(<Button text="buttonNameTest" icon={CssIcon} />)

    const icon = screen.getByRole('img')

    expect(icon).toBeTruthy()
  })

  it('should the icon in the right side ', () => {
    const { container } = render(<Button text="buttonNameTest" icon={CssIcon} iconPosition="right" />)

    const button = container.querySelector('a')

    expect(button?.lastElementChild?.tagName).toBe("svg")
  })

  it('should the icon in the left side ', () => {
    const { container } = render(<Button text="buttonNameTest" icon={CssIcon} iconPosition="left" />)

    const button = container.querySelector('a')

    expect(button?.firstElementChild?.tagName).toBe("svg")
  })
})
