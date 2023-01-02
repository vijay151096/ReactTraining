import {render, screen} from "@testing-library/react";
import ProductDetail from "./ProductDetail";

describe("Testing the Product Details Modal Layout", () => {
    test("Testing the presence of Product Details Modal title", () => {
        render(<ProductDetail item={sampleItem[0]} handleClick={jest.fn()}/>)
        const textElement = screen.getByText(sampleItem[0].regex);
        expect(textElement).toBeInTheDocument()
    })

    test("Testing the presence of Product Details Modal meta", () => {
        render(<ProductDetail item={sampleItem[0]} handleClick={jest.fn()}/>)
        const textElement = screen.getByText(sampleItem[0].meta);
        expect(textElement).toBeInTheDocument()
    })

    test("Testing the presence of Product Details Modal details", () => {
        render(<ProductDetail item={sampleItem[0]} handleClick={jest.fn()}/>)
        const textElement = screen.getByText(sampleItem[0].details);
        expect(textElement).toBeInTheDocument()
    })

    test("Testing the presence of Product Details Modal price", () => {
        render(<ProductDetail item={sampleItem[0]} handleClick={jest.fn()}/>)
        const priceElementRegex = `Rs. ${sampleItem[0].price}`
        const textElement = screen.getByText(priceElementRegex);
        expect(textElement).toBeInTheDocument()
    })

    test("Check for Close Button in the Product Detail Modal", () =>{
        render(<ProductDetail item={sampleItem[0]} handleClick={jest.fn()}/>)
        const closeButton = screen.getByRole("button", {name: "Close"})
        expect(closeButton).toBeInTheDocument();

    })

})

const sampleItem = [
    {
        id: 3,
        name: "Beef - Ground Lean Fresh",
        regex: /Beef/i,
        price: 67,
        meta: "Managed actuating open architecture",
        cart: true,
        details: "Insertion of Radioactive Element into Pericardial Cavity, Percutaneous Endoscopic Approach",
        quantity: 1
    },{
        id: 99,
        name: "Appetizer - Veg Assortment",
        regex: /Appetizer - Veg Assortment/i,
        price: 22,
        meta: "Customizable didactic extranet",
        cart: true,
        details: "Supplement Spinal Meninges with Synthetic Substitute, Percutaneous Endoscopic Approach",
        quantity: 1
    }
]
