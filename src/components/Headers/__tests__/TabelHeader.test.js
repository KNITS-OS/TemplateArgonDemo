import "@testing-library/jest-dom";
import TableHeader from "../TableHeader";
import { render, screen } from "@testing-library/react";

// best practice to describe a test
describe("Table Header", () => {
  // what the test should be doing
  test("should render the component with passed title and text", () => {
    // component that we are testing
    render(<TableHeader title="Search Employees" text="Filters" />);

    // get element by role with given text (name)
    const headingElement = screen.getByRole("heading", {
      name: /search employees/i,
    });
    // get element with given text (this is regular expression so it would be case insensitive /i)
    const paragraphElement = screen.getByText(/filters/i);

    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });

  test("should render the component when passed title and text are the same", () => {
    render(<TableHeader title="Employees" text="Employees" />);

    // get all elements with given text (this is regular expression so it would be case insensitive /i)
    const elemets = screen.getAllByText(/employees/i);

    expect(elemets).toHaveLength(2);
  });
});
