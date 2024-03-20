import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Nav } from "@/components/common/nav/Nav";

describe("Desktop Nav", () => {
  describe("NavList", () => {
    it("navlist render", () => {
      render(<Nav />);
      const listEl = screen.getAllByTestId("desktop nav");
      expect(listEl.length).toBe(4);
    });
    it("navlist mouse over", () => {
      render(<Nav />);
      const listEl = screen.getAllByTestId("desktop nav");
      expect(listEl[0]).toHaveClass(
        "hover:scale-125 duration-300 hover:text-skin-accent"
      );
    });
  });
});
