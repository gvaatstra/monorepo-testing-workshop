import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import {Button} from "./button.tsx";

it("renders button", () => {
    render(<Button title="Hello" />);
    const headline = screen.getByText(/Hello/i);
    expect(headline).not.toBeNull();
});
