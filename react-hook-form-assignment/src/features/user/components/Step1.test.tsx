import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Step1 from "./Step1";

test("renders name and email inputs", () => {
  render(<Step1 register={() => ({})} formState={{ errors: {} }} />);

  expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
});
