import React from 'react'

const TestProps = (props) => {

    return (
        <button onClick={props.handleIncrement}>{props.title}</button>
    )
}

export default TestProps
