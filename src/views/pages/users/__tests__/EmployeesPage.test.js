import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { searchEmployees } from "redux/actions/employees";
import { searchWithFilters } from "redux/services/queries";
import store from "store";
import EmployeesPage from "../EmployeesPage";
import userEvent from "@testing-library/user-event";

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
      render(<MockEmployeesPage />);

      store.dispatch(
        searchEmployees({
          businessUnitId: "",
          countryIsoCode3: "",
          hiringDate: null,
          lastName: "",
        }),
      );

      const text = await screen.findByText("Hamli");
      // await waitFor(() => {
      //   const data = screen.queryAllByRole("row");
      //   const filtered = data.filter(element => {
      //     return element.type === "tr";
      //     // && element.className === "test-row-class"
      //     // return element.pendingProps.className === "test-row-class";
      //   });
      //   // const data = document.querySelectorAll(".test-row-class");

      //   console.log("filtered2", filtered);
      //   // console.log("employeeTableElements", employeeTableElements);
      // });
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
      userEvent.click(button);

      const text = await screen.findByText("Hamli");

      expect(text).toBeInTheDocument();
    });

    // test("should click on search, render employees, filter using input and not find anything", async () => {
    //   render(<MockEmployeesPage />);
    //   const buttonElement = screen.getByRole("button", {
    //     name: /search/i,
    //   });
    //   fireEvent.click(buttonElement);
    //   setTimeout(() => {
    //     const inputElement =
    //       screen.getByPlaceholderText("Search Employees");

    //     fireEvent.change(inputElement, { target: { value: "Hamli" } });
    //     const text = screen.getByText("Hamli");

    //     expect(text).not.toBeInTheDocument();
    //   }, 1000);
    // });
  });
  describe("Snapshot tests", () => {
    test("should render correctly", () => {
      const { asFragment } = render(<MockEmployeesPage />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
