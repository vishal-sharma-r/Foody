import "@testing-library/jest-dom";
import Body from "../Body";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../../mocks/data";
import { StaticRouter } from "react-router-dom/server";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Search result on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(10);
  // console.log(shimmer);
});

test("Restaurants should load on Homepage", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(()=>expect(body.getByTestId("search-btn")))
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});
