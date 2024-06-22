import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("General App Debug", () => {
  it("renders vite logo", () => {
    render(<App title="React" />);
    screen.debug();
    const viteLogo = screen.getByRole("img", {name: 'Vite logo'});
    expect(viteLogo).toBeInTheDocument();
  });
});
