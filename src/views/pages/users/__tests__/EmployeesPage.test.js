import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import EmployeesPage from "../EmployeesPage";

describe("Employees Page", () => {
  describe("Filters", () => {
    test("should render input element with 'Last Name' as label", () => {
      render(<EmployeesPage />);

      const inputElement = screen.getByLabelText(/Last Name/i);

      expect(inputElement).toBeInTheDocument();
    });
    test("should render button with text Search", () => {
      render(<EmployeesPage />);

      const buttonElement = screen.getByRole("button", {
        name: /search/i,
      });

      expect(buttonElement).toBeInTheDocument();
    });
  });
  describe("Table", () => {});
});
