import { render, fireEvent } from "@testing-library/react";
import Product from "./Product";
import "@testing-library/jest-dom";

describe("Product Component Layout", () => {
  const item = {
    id: 1,
    name: "Sunflower Seed Raw",
    price: 76,
    meta: "Up-sized disintermediate knowledge user",
    cart: false,
    details: "Removal of Drainage Device from Bladder, Open Approach",
  };

  it("should display button to add the product when rendered", () => {
    const { getByTestId } = render(<Product item={item} />);

    expect(getByTestId("add-btn")).toBeInTheDocument();
  });

  it("should have the icon to increase the quantity when rendered", () => {
    const { getByTestId } = render(<Product item={item} />);

    expect(getByTestId("plus-icon")).toBeInTheDocument();
  });

  it("should have the icon to decrease the quantity when rendered", () => {
    const { getByTestId } = render(<Product item={item} />);

    expect(getByTestId("minus-icon")).toBeInTheDocument();
  });

  it("should display the name of the item when rendered", () => {
    const { getByTestId } = render(<Product item={item} />);

    expect(getByTestId("item-name")).toHaveTextContent("Sunflower Seed Raw");
  });

  it("should display the meta data of the item when rendered", () => {
    const { getByTestId } = render(<Product item={item} />);

    expect(getByTestId("item-meta")).toHaveTextContent(
      "Up-sized disintermediate knowledge user"
    );
  });

  it("should display the price of the item when rendered", () => {
    const { getByTestId } = render(<Product item={item} />);

    expect(getByTestId("item-price")).toHaveTextContent("Rs. 76");
  });

  it("should display the image of the item when rendered", () => {
    const { getByTestId } = render(<Product item={item} />);

    expect(getByTestId("item-image")).toBeInTheDocument();
  });
});

describe("Product Functionality", () => {
  const item = {
    id: 1,
    name: "Sunflower Seed Raw",
    price: 76,
    meta: "Up-sized disintermediate knowledge user",
    cart: false,
    details: "Removal of Drainage Device from Bladder, Open Approach",
  };
  it("should increase the count when plus icon is clicked", () => {
    const { getByTestId } = render(<Product item={item} />);
    expect(getByTestId("item-quantity")).toHaveTextContent("1");

    fireEvent.click(getByTestId("plus-icon"));

    expect(getByTestId("item-quantity")).toHaveTextContent("2");
  });
  it("should not decrease the count when minus icon is clicked having item quantity as 1", () => {
    const { getByTestId } = render(<Product item={item} />);
    expect(getByTestId("item-quantity")).toHaveTextContent("1");

    fireEvent.click(getByTestId("minus-icon"));

    expect(getByTestId("item-quantity")).toHaveTextContent("1");
  });
  it("should decrease the count when minus icon is clicked and quantity is greater than 1", () => {
    const { getByTestId } = render(<Product item={item} />);
    fireEvent.click(getByTestId("plus-icon"));
    expect(getByTestId("item-quantity")).toHaveTextContent("2");

    fireEvent.click(getByTestId("minus-icon"));

    expect(getByTestId("item-quantity")).toHaveTextContent("1");
  });

  it("should send the request when user clicks on add button", () => {
    global.fetch = jest.fn(() => Promise.resolve({}));
    const { getByTestId } = render(<Product item={item} />);

    fireEvent.click(getByTestId("add-btn"));

    expect(global.fetch).toBeCalled();
  });
  it("should reset the count when user clicks on add button", () => {
    global.fetch = jest.fn(() => Promise.resolve({}));
    const { getByTestId } = render(<Product item={item} />);

    fireEvent.click(getByTestId("add-btn"));

    expect(global.fetch).toBeCalled();
    expect(getByTestId("item-quantity")).toHaveTextContent("1");
  });
});
