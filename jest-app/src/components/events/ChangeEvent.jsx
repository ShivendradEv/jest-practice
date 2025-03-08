import React, { useState } from 'react'

const ChangeEvent = () => {

    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <label htmlFor='textInput'>Enter text</label>
            <input type='text' data-testid="textbox" id='textInput' onChange={(e) => handleTextChange(e)} value={text} />
        </div>
    )
}

export default ChangeEvent
