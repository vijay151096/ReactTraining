import { render, act } from "@testing-library/react";
import ProductList from "./ProductList";

describe("Product List functionality", () => {
  it("should fetch the products data when component is rendered", async() => {
    const promise = Promise.resolve({
      json: () => {
        return response
      },
      ok: true
    });

    global.fetch = jest.fn(() => promise );
    await promise;
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      render(<ProductList />);
    });

    expect(global.fetch).toBeCalled();
  });


  const response = [
    {
      id: 1,
      name: "Sunflower Seed Raw",
      price: 76,
      meta: "Up-sized disintermediate knowledge user",
      cart: false,
      details: "Removal of Drainage Device from Bladder, Open Approach",
    },
    {
      id: 2,
      name: "Lettuce - California Mix",
      price: 52,
      meta: "Sharable exuding circuit",
      cart: false,
      details:
          "Replacement of Left Ankle Joint with Synthetic Substitute, Cemented, Open Approach",
    },
    {
      id: 3,
      name: "Beef - Ground Lean Fresh",
      price: 67,
      meta: "Managed actuating open architecture",
      cart: true,
      details:
          "Insertion of Radioactive Element into Pericardial Cavity, Percutaneous Endoscopic Approach",
    },
    {
      id: 4,
      name: "Yokaline",
      price: 1,
      meta: "Digitized needs-based algorithm",
      cart: true,
      details:
          "Excision of Left Trunk Tendon, Open Approach, Diagnostic",
    },
  ];
});
