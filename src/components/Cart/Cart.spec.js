import {render, screen, fireEvent, cleanup, waitFor} from "@testing-library/react";
import Cart from "./Cart";
import {act} from "react-dom/test-utils";

describe("Testing the Carts Layout", () => {

    it("testing Cart Item Name", async() => {
        await prePopulateProductList();
        await render(<Cart />);
        const productElement = await screen.findByText(sampleItem[0].regex)
        expect(productElement).toBeInTheDocument();
        expect(productElement.textContent).toBe(sampleItem[0].name)
    })

    it("testing Cart Item Price", async() => {
        await prePopulateProductList();
        await render(<Cart />);
        const productElement = await screen.findByTestId(`ItemPrice_${sampleItem[0].id}` )
        expect(productElement).toBeInTheDocument();
        expect(productElement.textContent).toBe(`Price : ${sampleItem[0].price}`)
    })

    it("testing Cart Item Quantity", async() => {
        await render(<Cart />);
        const productElement = await screen.findByTestId(`ItemQuantity_${sampleItem[0].id}`)
        expect(productElement).toBeInTheDocument();
        expect(productElement.textContent).toBe(`Quantity : ${sampleItem[0].quantity}`)
    })

    it("testing the availability of Remove Button", async() => {
        await render(<Cart />);
        const removeButtonElement = await screen.findByTestId(`removeProduct_${sampleItem[0].id}`)
        expect(removeButtonElement).toBeInTheDocument();
        expect(removeButtonElement.textContent).toBe("Remove");
    })

    it("testing the availability of Avatar", async() => {
        await render(<Cart />);
        const avatarElement = await screen.findByAltText(sampleItem[0].name)
        expect(avatarElement).toBeInTheDocument();
    })

})

describe("Testing the Carts Functionality", () => {

    it("testing Cart when No Items are in Cart", () => {
        render(<Cart />);
        const cartElement = screen.getByRole("heading", {name: /No Items in Cart/i});
        expect(cartElement).toBeInTheDocument();
    })

    it("testing Whether Product Gets Added to the Cart From Dashboard",  async() => {
        await render(<Cart />)
        const productElement = await screen.findByText(sampleItem[0].regex)
        expect(productElement).toBeInTheDocument()
    })

    it("testing Cart Total Amount to the product of quantity and price", async() => {
        await render(<Cart/>)
        let cartElement = await screen.findByRole("heading", {name: /Total Amount/i})
        expect(cartElement.textContent).toBe(`Total Amount = ${sampleItem[0].price * sampleItem[0].quantity}`)
    })

    it("testing More Items in the Cart", async() => {
        await prePopulateProductList(true);
        await render(<Cart/>)
        let cartElement = await screen.findAllByTestId(/ItemName_/i)
        expect(cartElement.length).toBe(2)
    })

    it( "remove the Element from the Cart When Remove Button is pressed", async() => {
        await render(<Cart/>)
        const removeButtonElement = await screen.findByTestId('removeProduct_3')
        clearProductList();
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(() => {
            fireEvent.click(removeButtonElement)
        })

        const cartElement = await screen.findByRole("heading", {name: /No Items in Cart/i});
        expect(cartElement.textContent).toBe("No Items in Cart")

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

const prePopulateProductList =  async(moreItem) => {
    let response = [sampleItem[0]];
    if(moreItem){
        response = [sampleItem[0], sampleItem[1]];
    }
    global.fetch = await jest.fn(() => Promise.resolve({
            response: response,
            json: () => { return response }
        }
    ));
}


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
