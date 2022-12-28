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
});
