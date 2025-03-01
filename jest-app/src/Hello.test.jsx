import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("renders hello world", () => {
    render(<Hello />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});