import React from 'react'

const Element = () => {
    return (
        <div>
            <label htmlFor='textInput'>Name</label>
            <input type='text' placeholder='Enter name' id='textInput' defaultValue="shivendra" data-testid="textbox" />
        </div>
    )
}

export default Element
