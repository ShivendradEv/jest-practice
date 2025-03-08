import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ClickEvent from "../components/events/ClickEvent";

describe('Test counter', () => {

    beforeEach(() => {
        render(<ClickEvent />);
    });

    test("increment function", () => {
        const count = screen.getByTestId("count");
        const incrementBtn = screen.getByTestId("increment");
        fireEvent.click(incrementBtn);
        expect(Number(count.textContent)).toBe(1);
    });

    test("decrement function", () => {
        const count = screen.getByTestId("count");
        const decrementBtn = screen.getByTestId("decrement");
        fireEvent.click(decrementBtn);
        expect(Number(count.textContent)).toBe(-1);
    });

})
