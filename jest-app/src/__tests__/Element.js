import React from "react";
import { render, screen, waitFor } from "@testing-library/react"
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

    // if there are multiple elements with same role it will throw an error to resoleve eother use "{ name: "Hello" }" in getByRole or use getAllByRole
    test('Test heading by role', () => {
        render(<Element />)
        const btn = screen.getByRole("heading", { name: "Hello" });
        expect(btn).toBeInTheDocument();
    })

});

describe('Test button using queryBy', () => {

    // using queryBy we can test elements that are rendering conditionally
    test('Test hidden button', () => {
        render(<Element />)
        const btn = screen.queryByRole("button");
        expect(btn).not.toBeInTheDocument();
    })

})

describe('Test using findBy query', () => {

    test('Test timeout function', async () => {

        render(<Element />);

        const div = screen.getByTestId("timeout");
        await waitFor(() => {
            expect(div.textContent).toBe("Timeout");
        }, { timeout: 2000 })

        // Below code is failing because component is taking some time to render and findByTestId checks it after 2s but its not available so use waitFor() to avoid this issue
        // const div = await screen.findByTestId("timeout", { timeout: 2000 });
        // expect(div.textContent).toBe("Timeout");

    })

})

