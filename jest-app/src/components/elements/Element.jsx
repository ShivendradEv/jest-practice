import React, { useEffect, useState } from 'react'

const Element = () => {

    const [isAuth] = useState(true);
    const [data, setData] = useState("");

    useEffect(() => {

        setTimeout(function () {
            setData("Timeout");
        }, 1000)

    }, [])

    return (
        <div>

            <label htmlFor='textInput'>Name</label>
            <input type='text' placeholder='Enter name' id='textInput' defaultValue="shivendra" data-testid="textbox" />

            {!isAuth && <button>Click 1</button>}

            <h2>Hello</h2>

            <h1>Hello11</h1>

            <div data-testid="timeout">{data}</div>

        </div>
    )
}

export default Element
