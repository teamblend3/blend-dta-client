import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component Rendering", () => {
  it("App component should show 'hello world'", () => {
    render(<App />);
    const headingElement = screen.getByText(/hello world/i);
    expect(headingElement).toBeInTheDocument();
  });
});

describe("App Component Dark mode", () => {
  it("App component should default Light mode", () => {
    render(<App />);
    expect(screen.getByText("light mode")).toBeInTheDocument();
  });
  it("When click 'TOGGLE' button App component should change to Dark mode", () => {
    render(<App />);
    const toggleButton = screen.getByRole("button", { name: "TOGGLE" });
    fireEvent.click(toggleButton);
    expect(screen.getByText("dark mode")).toBeInTheDocument();
  });
});
