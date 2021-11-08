import { categoriesData } from "mock-data/categories";
import { LOAD_CATEGORIES } from "redux/actions/types";

const categoryReducer = (categories = categoriesData, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_CATEGORIES:
      return [payload];

    default:
      return categories;
  }
};

export default categoryReducer;
