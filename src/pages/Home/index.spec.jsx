import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Home from "./index";

describe("Header Component should", () => {
  it("includes Login button.", () => {
    render(<Home />);

    const infoText = screen.getByText("TeamBlend");

    expect(infoText).toBeInTheDocument();
  });
});
