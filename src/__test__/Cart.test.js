import {render, screen, fireEvent, cleanup, waitFor} from "@testing-library/react";
import Cart from "../components/Cart";

describe("Testing Carts", () => {

    const sampleItem = {
        id: 3,
        name: "Beef - Ground Lean Fresh",
        regex: /Beef - Ground Lean Fresh/i,
        price: 67,
        meta: "Managed actuating open architecture",
        cart: true,
        details: "Insertion of Radioactive Element into Pericardial Cavity, Percutaneous Endoscopic Approach",
        quantity: 1
    }

    describe("Testing the Carts Layout", () => {

        test("testing Cart Item Name", async() => {
            await render(<Cart />);
            const productElement = await screen.findByText(sampleItem.regex)
            expect(productElement).toBeInTheDocument();
            expect(productElement.textContent).toBe(sampleItem.name)
        })

        test("testing Cart Item Price", async() => {
            await render(<Cart />);
            const productElement = await screen.findByTestId(`ItemPrice_${sampleItem.id}` )
            expect(productElement).toBeInTheDocument();
            expect(productElement.textContent).toBe(`Price : ${sampleItem.price}`)
        })

        test("testing Cart Item Quantity", async() => {
            await render(<Cart />);
            const productElement = await screen.findByTestId(`ItemQuantity_${sampleItem.id}`)
            expect(productElement).toBeInTheDocument();
            expect(productElement.textContent).toBe(`Quantity : ${sampleItem.quantity}`)
        })

        test("testing the availability of Remove Button", async() => {
            await render(<Cart />);
            const removeButtonElement = await screen.findByTestId(`removeProduct_${sampleItem.id}`)
            expect(removeButtonElement).toBeInTheDocument();
            expect(removeButtonElement.textContent).toBe("Remove");
        })

        test("testing the availability of Avatar", async() => {
            await render(<Cart />);
            const avatarElement = await screen.findByAltText(sampleItem.name)
            expect(avatarElement).toBeInTheDocument();
        })

    })

    describe("Testing the Carts Functionality", () => {

        test("testing Cart Total Amount Div To be Present at all times", () => {
            render(<Cart />);
            const cartElement = screen.getByRole("heading", {name: /Total Amount/i});
            expect(cartElement).toBeInTheDocument();
        })

        test("testing Whether Product Gets Added to the Cart From Dashboard",  async() => {
            await render(<Cart />)
            const productElement = await screen.findByText(sampleItem.regex)
            expect(productElement).toBeInTheDocument()
        })

        test("testing Cart Total Amount to the product of quantity and price", async() => {
            await render(<Cart />);
            const cartElement = await screen.findByRole("heading", {name: /Total Amount/i});
            expect(cartElement).toBeInTheDocument();
            expect(cartElement.textContent).toBe(`Total Amount = ${sampleItem.price * sampleItem.quantity}`)
        })

        test( "remove the Element from the Cart When Remove Button is pressed", async() => {
            await render(<Cart/>)
            const removeButtonElement = await screen.findByTestId('removeProduct_3')
            clearProductList();
            fireEvent.click(removeButtonElement)
            const cartElement = await screen.findByRole("heading", {name: /Total Amount/i});
            expect(cartElement.textContent).toBe("Total Amount = 0")

        })

        const clearProductList =  () => {
            const response = [];
            global.fetch = jest.fn(() => Promise.resolve({
                    response: response,
                    json: () => { return response }
                }
            ));
        }
    })


    beforeEach( async() => {
        await prePopulateProductList();
    } )


    afterEach( () => {
        cleanup();
    } )

    const prePopulateProductList =  async() => {
        const response = [{ ...sampleItem}];
        global.fetch = await jest.fn(() => Promise.resolve({
                response: response,
                json: () => { return response }
            }
        ));
    }
})
