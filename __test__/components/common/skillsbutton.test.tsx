import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkillsButton from "@/components/common/SkillsButton";

describe("skillsButton", () => {
  it("should show name prop", () => {
    render(<SkillsButton name="props" />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
