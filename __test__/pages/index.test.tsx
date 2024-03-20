import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "@/pages";
import "@testing-library/jest-dom";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

jest.mock("@/components/common/nav/Nav", () => ({
  Nav: () => <main data-testid="Nav">Nav</main>,
}));

jest.mock("@/components/home/About", () => ({
  About: () => <main data-testid="About">About</main>,
}));

jest.mock("@/components/home/Footer", () => ({
  Footer: () => <main data-testid="Footer">Footer</main>,
}));

jest.mock("@/components/home/Hero", () => ({
  Hero: () => <main data-testid="Hero">Hero</main>,
}));

jest.mock("@/components/home/Projects", () => ({
  Projects: () => <main data-testid="Projects">Projects</main>,
}));

jest.mock("@/components/home/Skills", () => ({
  Skills: () => <main data-testid="Skills">Skills</main>,
}));

describe("Home Components", () => {
  it("should show Navbar", () => {
    mockAllIsIntersecting(true);
    render(<Home />);
    const navComponent = screen.getByTestId("Nav");
    expect(navComponent).toBeInTheDocument();
  });
  it("should show Hero Component", () => {
    mockAllIsIntersecting(true);
    render(<Home />);
    const heroComponent = screen.getByTestId("Hero");
    expect(heroComponent).toBeInTheDocument();
  });

  it("should show About Component", () => {
    mockAllIsIntersecting(true);
    render(<Home />);
    const aboutComponent = screen.getByTestId("About");
    expect(aboutComponent).toBeInTheDocument();
  });

  it("should show Project Component", () => {
    mockAllIsIntersecting(true);
    render(<Home />);
    const projectsComponent = screen.getByTestId("Projects");
    expect(projectsComponent).toBeInTheDocument();
  });

  it("should show Footer Component", () => {
    mockAllIsIntersecting(true);
    render(<Home />);
    const footerComponent = screen.getByTestId("Footer");
    expect(footerComponent).toBeInTheDocument();
  });
});
