import Body from "../Body";
import "@testing-library/jest-dom"
import { render, screen,fireEvent } from "@testing-library/react";
import mockData from "../../utils/mockData";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(mockData)
    })
})
//helper function!!
beforeAll(() => {
    console.log("Before All");
});

beforeEach(() => {
    console.log("Before Each");
});

afterAll(() => {
    console.log("After All");
});

afterEach(() => {
    console.log("After Each");
});

it("should rendered the body componante", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const cardsBeforeSearch = screen.getAllByTestId("card");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("card");

    expect(cardsAfterSearch.length).toBe(2);

     
});

it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("card");
  
    expect(cardsBeforeFilter.length).toBe(20);
  
    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedBtn);
  
    const cardsAfterFilter = screen.getAllByTestId("card");
    expect(cardsAfterFilter.length).toBe(13);
  });