import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Product Component Layout", () => {
  it("should display the image of the item when rendered", () => {
    const mockComponent = (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const { getByTestId } = render(mockComponent);

    expect(getByTestId("title")).toHaveTextContent("Ecommerce");
  });

  // it("should display the button to go to cart page", () => {
  //   const mockComponent = (
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   );
  //   const { getByTestId } = render(mockComponent);
  //
  //   expect(getByTestId("cart-btn")).toHaveTextContent("cart");
  // });
  //
  // it("should have the link to go to cart page when cart button is clicked", () => {
  //   const mockComponent = (
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   );
  //   const { getByTestId } = render(mockComponent);
  //
  //   expect(getByTestId("cart-link")).toHaveAttribute("href", "/cart");
  // });
});
