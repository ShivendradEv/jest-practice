import React, { useState } from 'react'

const ClickEvent = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }

    const handleDecrement = () => {
        setCount((prev) => prev - 1)
    }

    return (
        <div>
            <button onClick={handleDecrement} data-testid="decrement">-</button>
            <h1 >Count: <span data-testid="count">{count}</span></h1>
            <button onClick={handleIncrement} data-testid="increment">+</button>
        </div>
    )
}

export default ClickEvent
