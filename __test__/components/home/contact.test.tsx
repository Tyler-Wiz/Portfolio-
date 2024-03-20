import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Contact } from "@/components/home/Contact";
import { act } from "react-dom/test-utils";

describe("contact from", () => {
  describe("should render", () => {
    it("name", () => {
      render(<Contact />);
      const nameInput = screen.getByPlaceholderText("name");
      expect(nameInput).toBeInTheDocument();
    });
    it("email", () => {
      render(<Contact />);
      const emailInput = screen.getByPlaceholderText("email");
      expect(emailInput).toBeInTheDocument();
    });
    it("message", () => {
      render(<Contact />);
      const messageInput = screen.getByPlaceholderText("message");
      expect(messageInput).toBeInTheDocument();
    });
    it("button Component", () => {
      render(<Contact />);
      const sendButton = screen.getByTestId("buttonComponent");
      expect(sendButton).toBeInTheDocument();
    });
  });
});

describe("Submit", () => {
  describe("with valid input", () => {
    it("calls the onSubmit function", async () => {
      const { getByPlaceholderText, getByTestId } = render(<Contact />);
      await act(async () => {
        fireEvent.change(getByPlaceholderText("name"), {
          target: { value: "test" },
        });
        fireEvent.change(getByPlaceholderText("email"), {
          target: { value: "email@test.com" },
        });
        fireEvent.change(getByPlaceholderText("message"), {
          target: { value: "test" },
        });
      });
      await act(async () => {
        fireEvent.submit(getByTestId("buttonComponent"));
      });
      await act(async () => {
        fireEvent.submit(getByTestId("form"));
      });
    });
  });
});
