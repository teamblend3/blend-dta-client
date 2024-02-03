import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header Component should", () => {
  it("includes Login button.", () => {
    render(<Header />);

    const LoginText = screen.getByText("Login");

    expect(LoginText).toBeInTheDocument();
  });
  it("includes Home button.", () => {
    render(<Header />);

    const HomeText = screen.getByText("Home");

    expect(HomeText).toBeInTheDocument();
  });
  it("includes Profile button.", () => {
    render(<Header />);

    const ProfileText = screen.getByText("Profile Image");

    expect(ProfileText).toBeInTheDocument();
  });
});
