import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Header } from "@/components/common/header";

describe("Header", () => {
  it("should render the heading with 2 props name and description", () => {
    render(<Header name="The Name" description="The Desc" />);
    const headerElementH1 = screen.getByRole("heading", { name: "The Name" });
    const headerElementH2 = screen.getByRole("heading", {
      name: "The Desc",
    });
    expect(headerElementH1).toBeInTheDocument();
    expect(headerElementH2).toBeInTheDocument();
  });
});
