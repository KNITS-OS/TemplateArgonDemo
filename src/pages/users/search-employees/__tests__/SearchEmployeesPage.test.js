import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import { employeeService } from "redux/employees";

import { store } from "store";

import { SearchEmployeesPage } from "..";

const MockEmployeesPage = () => {
  return (
    <Provider store={store}>
      <SearchEmployeesPage />
    </Provider>
  );
};

describe("Employees Page", () => {
  describe("Filters", () => {
    test("should render input element with 'Last Name' as label", () => {
      render(<MockEmployeesPage />);

      const inputElement = screen.getByLabelText(/Last Name/i);

      expect(inputElement).toBeInTheDocument();
    });
    test("should render button with text Search", () => {
      render(<MockEmployeesPage />);

      const buttonElement = screen.getByRole("button", {
        name: /search/i,
      });

      expect(buttonElement).toBeInTheDocument();
    });
  });
  describe("Table", () => {
    beforeEach(() => {
      jest.mock("../../../../__mocks__/axios");
    });

    test("should get employees data", async () => {
      const queryParams = new URLSearchParams({
        businessUnitId: "",
        countryIsoCode3: "",
        hiringDate: null,
        lastName: "",
      });
      const { data } = await employeeService.searchEmployees(queryParams);

      expect(data).toHaveLength(5);
    });

    test("should click on search and render employees", async () => {
      render(<MockEmployeesPage />);
      const button = screen.getByRole("button", {
        name: /search/i,
      });
      userEvent.click(button);

      const text = await screen.findByText("Hamli");

      expect(text).toBeInTheDocument();
    });
  });
  describe("Snapshot tests", () => {
    test("should render correctly", () => {
      const { asFragment } = render(<MockEmployeesPage />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
