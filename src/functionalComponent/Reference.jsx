import React, { useState, useRef, useEffect } from "react"
const Reference = () => {
    const [BatchSize, updateBatchSize] = useState('')
    const prevBatch = useRef(BatchSize);
    useEffect(() => {
        prevBatch.current = BatchSize;
    }, [BatchSize])
    return (
        <div>
            <h1>
                This is useRef
            </h1>
            <input type="text" placeholder='Type something' onChange={(event) => { updateBatchSize(event.target.value) }}></input>
            <h2 style={css}>The Text typed is {BatchSize}<br></br> and the previous typed is {prevBatch.current}</h2>
        </div>
    )
}
const css = {
    color: 'white'
}

export default Reference;