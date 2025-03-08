import React from "react";
import { render, screen } from "@testing-library/react"
import Element from "../components/elements/Element";

describe('Text input testing', () => {

    test('Check if text input exists', () => {
        render(<Element />);
        const textInput = screen.getByTestId("textbox");
        expect(textInput).toBeInTheDocument();
    })

    test('Check if text input has all the required attributes', () => {
        render(<Element />);
        const textInput = screen.getByTestId("textbox");
        // toHaveAttribute second argument is optional
        expect(textInput).toHaveAttribute("placeholder", "Enter name");
        expect(textInput).toHaveAttribute("id", "textInput");
        // use defaultValue in element if no chnage event is added
        expect(textInput).toHaveAttribute("value");
    })

});
