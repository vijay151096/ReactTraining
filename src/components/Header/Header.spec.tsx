import { render, fireEvent, act, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../store/UserContext";
import { useState } from "react";

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

  it("should display the button to go to cart page", () => {
    const mockComponent = (
      <UserContext.Provider
        value={{ isAuthenticated: true, login: jest.fn(), logout: jest.fn() }}
      >
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    );
    const { getByTestId } = render(mockComponent);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("cart-btn")).toHaveTextContent("cart");
  });

  it("should display the button to logout", () => {
    const mockComponent = (
      <UserContext.Provider
        value={{ isAuthenticated: true, login: jest.fn(), logout: jest.fn() }}
      >
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    );
    const { getByTestId } = render(mockComponent);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("logout-btn")).toHaveTextContent("Logout");
  });

  it("should have the link to go to cart page when cart button is clicked", () => {
    const mockComponent = (
      <UserContext.Provider
        value={{ isAuthenticated: true, login: jest.fn(), logout: jest.fn() }}
      >
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    );
    const { getByTestId } = render(mockComponent);

    expect(getByTestId("cart-link")).toHaveAttribute("href", "/cart");
  });

  it("should logout when logout button is clicked", () => {
    const logoutFunction = jest.fn();
    const mockComponent = (
      <UserContext.Provider
        value={{
          isAuthenticated: true,
          login: jest.fn(),
          logout: logoutFunction,
        }}
      >
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    );
    render(mockComponent);

    // eslint-disable-next-line testing-library/prefer-screen-queries,no-restricted-globals
    const logoutBtn = screen.getByTestId("logout-btn");
    // eslint-disable-next-line testing-library/no-unnecessary-act

    fireEvent.click(logoutBtn);

    expect(logoutFunction).toBeCalledTimes(1);
  });

  it("should not display logout Not Authenticated", () => {
    const logoutFunction = jest.fn();
    const mockComponent = (
      <UserContext.Provider
        value={{
          isAuthenticated: false,
          login: jest.fn(),
          logout: logoutFunction,
        }}
      >
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    );
    render(mockComponent);

    // eslint-disable-next-line testing-library/prefer-screen-queries,no-restricted-globals
    const logoutBtn = screen.queryByTestId("logout-btn");

    expect(logoutBtn).not.toBeInTheDocument();
  });
});
