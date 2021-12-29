import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { searchGroups } from "redux/actions/groups";
import { fetchGroupData } from "redux/services/queries";
import store from "store";
import GroupsPage from "../GroupsPage";

const MockGroupsPage = () => {
  return (
    <Provider store={store}>
      <GroupsPage />
    </Provider>
  );
};

describe("Groups Page", () => {
  describe("Table", () => {
    beforeEach(() => {
      jest.mock("../../../../__mocks__/axios");
    });

    test("should render multible table items", async () => {
      render(<MockGroupsPage />);

      store.dispatch(searchGroups());

      const text = await screen.findByText("Brainy Buddies");
      expect(text).toBeInTheDocument();
    });

    test("should get groups data", async () => {
      const { data } = await fetchGroupData();

      expect(data).toHaveLength(5);
    });

    test("should click on search and render groups", async () => {
      render(<MockGroupsPage />);
      const button = screen.getByRole("button", {
        name: /search/i,
      });
      userEvent.click(button);

      const text = await screen.findByText("Brainy Buddies");

      expect(text).toBeInTheDocument();
    });
  });
});
