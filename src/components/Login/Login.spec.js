import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Header from "../Header/Header";
import UserContext from "../../store/UserContext";
import Login from "./Login";

describe("Login Page", () => {

    test("Should Have Two Input Fields for username and password ", () => {
        const mockComponent =
            <UserContext.Provider value={{ isAuthenticated: false, login: jest.fn(), logout: jest.fn() }} >
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </UserContext.Provider>

        render(mockComponent)
        const childElements = screen.getAllByTestId(/login_/i);
        // eslint-disable-next-line testing-library/no-node-access
        expect(childElements.length).toBe(3);
    })


    test("Should Have Field to enter UserName ", () => {
        const mockComponent =
        <UserContext.Provider value={{ isAuthenticated: false, login: jest.fn(), logout: jest.fn() }} >
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </UserContext.Provider>

        render(mockComponent)
        const userNameElement = screen.getByTestId("login_username");
        expect(userNameElement).toBeInTheDocument();
    })

    test("Should Have Field to enter Password ", () => {
        const mockComponent =
            <UserContext.Provider value={{ isAuthenticated: false, login: jest.fn(), logout: jest.fn() }} >
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </UserContext.Provider>

        render(mockComponent)
        const userNameElement = screen.getByTestId("login_password");
        expect(userNameElement).toBeInTheDocument();
    })

    test("Should Have Button to Login", () => {
        const mockComponent =
            <UserContext.Provider value={{ isAuthenticated: false, login: jest.fn(), logout: jest.fn() }} >
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </UserContext.Provider>

        render(mockComponent)
        const buttonElement = screen.getByTestId("login_signin");
        expect(buttonElement).toBeInTheDocument();
    })

})