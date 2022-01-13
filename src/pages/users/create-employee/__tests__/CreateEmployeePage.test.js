import { Provider } from "react-redux";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { store } from "store";

import { CreateEmployeePage } from "..";

const MockCreateGroupsPage = () => {
  return (
    <Provider store={store}>
      <CreateEmployeePage />
    </Provider>
  );
};

describe("Create Employees Page", () => {
  test("should write into input, see that this text was written and is on the screen", () => {
    render(<MockCreateGroupsPage />);

    // example with testid
    // const inputElement = screen.getByTestId(/firstName/i);
    const inputElement = screen.getByPlaceholderText(/First Name/i);
    const inputValue = "Hamli";

    // https://polvara.me/posts/five-things-you-didnt-know-about-testing-library
    // nr 5 explains why userEvent is better
    userEvent.type(inputElement, inputValue);

    // example with fireevent
    // fireEvent.change(inputElement, { target: { value: "Hamli" } });
    expect(inputElement.value).toBe(inputValue);
    expect(screen.getByDisplayValue("Hamli")).toBeInTheDocument();
  });
  describe("Snapshot tests", () => {
    test("should render correctly", () => {
      const { asFragment } = render(<MockCreateGroupsPage />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
