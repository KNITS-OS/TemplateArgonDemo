import { fireEvent, render, screen } from "@testing-library/react";
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

    const mockDispatch = jest.fn();
    jest.mock("react-redux", () => ({
      useSelector: jest.fn(),
      useDispatch: () => mockDispatch,
    }));

    // test("should render multible table items", async () => {
    //   const { container } = render(<MockEmployeesPage />);
    //   const mockedDispatch = jest.fn();
    //   // const button = screen.getByRole("button", {
    //   //   name: /search/i,
    //   // });
    //   // fireEvent.click(button);
    //   const data = await searchEmployees({
    //     businessUnitId: "",
    //     countryIsoCode3: "",
    //     hiringDate: null,
    //     lastName: "",
    //   });
    //   console.log("data", data);
    //   // const tables = await screen.findAllByRole("table");

    //   const text = await screen.findByText("Hamli");
    //   // console.log("text", text);
    //   // screen.debug();

    //   expect(text).toBeInTheDocument();

    //   // const employeeTableElements = await tables.getElementsByClassName(
    //   //   "test-row-class",
    //   // );
    //   const employeeTableElements =
    //     container.getElementsByClassName("test-row-class");
    //   console.log("employeeTableElements", employeeTableElements);

    //   // // get the table data
    //   // const tableBody = employeeTableElements.querySelectorAll("tbody");

    //   // console.log("tableBody", tableBody);
    //   // const tableData = tableBody.querySelectorAll("tr");

    //   // console.log(tableData);
    //   // expect(tableData).toBeInTheDocument();
    //   // expect(employeeTableElements).toHaveClass("table");
    //   // expect(employeeTableElements).toHaveLength(5);
    // });
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
  });
});
