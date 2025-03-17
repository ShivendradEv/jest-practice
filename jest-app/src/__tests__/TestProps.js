import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TestProps from '../components/props/TestProps';

// 1. Testing Props by Rendering the Component
describe('Test props of a button', () => {

    test("test button props", () => {

        render(<TestProps title="hello" />);
        const button = screen.getByRole("button");
        expect(button.textContent).toBe("hello");

    })

})

// 2. Testing Props with Mock Functions
describe('Test props with mock function', () => {

    test("test icrement function", () => {

        const mockIncrement = jest.fn();
        render(<TestProps handleIncrement={mockIncrement} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(mockIncrement).toHaveBeenCalledTimes(1);
    })

})

// 3. Testing Props Using rerender
describe('Test props using re render', () => {

    test("test with different props", () => {

        const { rerender } = render(<TestProps title="Hello1" />);
        const button = screen.getByRole("button");
        expect(button.textContent).toBe("Hello1");

        rerender(<TestProps title="Hello2" />);
        expect(button.textContent).toBe("Hello2");

    })

})


