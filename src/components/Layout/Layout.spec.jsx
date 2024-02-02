import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout Component should", () => {
  it("includes Header.", () => {
    render(<Layout />);

    const HeaderText = screen.getByText("Header");

    expect(HeaderText).toBeInTheDocument();
  });
});

describe("Layout Component should", () => {
  it("includes Footer", () => {
    render(<Layout />);

    const FooterText = screen.getByText("Footer");

    expect(FooterText).toBeInTheDocument();
  });
});
