import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ChangeEvent from "../components/events/ChangeEvent";

describe('Test input element', () => {

    beforeEach(() => {
        render(<ChangeEvent />);
    });

    test("check if input exists", () => {
        const textInput = screen.getByTestId("textbox");
        expect(textInput).toBeInTheDocument();
    });

    test("test change function", () => {
        const textInput = screen.getByTestId("textbox");
        fireEvent.change(textInput, { target: { value: "Hello" } });
        expect(textInput.value).toBe("Hello");
    });

});
