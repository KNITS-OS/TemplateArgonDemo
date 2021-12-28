import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { searchEmployees } from "redux/actions/employees";
import { searchWithFilters } from "redux/services/queries";
import store from "store";
import EmployeesPage from "../EmployeesPage";

const MockEmployeesPage = () => {
  return (
    <Provider store={store}>
      <EmployeesPage />
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

    test("should render multible table items", async () => {
      const { container } = render(<MockEmployeesPage />);

      store.dispatch(
        searchEmployees({
          businessUnitId: "",
          countryIsoCode3: "",
          hiringDate: null,
          lastName: "",
        }),
      );

      // const tables = await screen.findAllByRole("table");

      const text = await screen.findByText("Hamli");
      // console.log("text", text);
      // screen.debug();

      // const employeeTableElements = await tables.getElementsByClassName(
      //   "test-row-class",
      // );
      await waitFor(() => {
        // const employeeTableElements =
        //   container.querySelectorAll(".test-row-class");
        const data = screen.queryAllByRole("row");
        const filtered = data.filter(element => {
          return element.type === "tr";
          // && element.className === "test-row-class"
          // return element.pendingProps.className === "test-row-class";
        });
        // const data = document.querySelectorAll(".test-row-class");

        console.log("filtered2", filtered);
        // console.log("employeeTableElements", employeeTableElements);
      });
      expect(text).toBeInTheDocument();
    });

    test("should get employees data", async () => {
      const queryParams = new URLSearchParams({
        businessUnitId: "",
        countryIsoCode3: "",
        hiringDate: null,
        lastName: "",
      });
      const { data } = await searchWithFilters(queryParams);

      expect(data).toHaveLength(5);
    });

    test("should click on search and render employees", async () => {
      render(<MockEmployeesPage />);
      const button = screen.getByRole("button", {
        name: /search/i,
      });
      fireEvent.click(button);

      const text = await screen.findByText("Hamli");

      expect(text).toBeInTheDocument();
    });
  });
});
