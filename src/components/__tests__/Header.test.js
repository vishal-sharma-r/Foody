import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);
  const logo = header.getAllByTestId("logo");
  // console.log(logo[0]);
  // check if logo is loaded
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});
test("Online status on rendering header should be green", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);
  const onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("🟢");
});
test("cart should have 0 items", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);
  const cart = header.getByTestId("cart");
 
  expect(cart.innerHTML).toBe("Cart 0 items");
});
