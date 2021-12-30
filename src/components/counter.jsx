// The goal is to create a function that increments or decrements by 1. 
// when I click on increment, the count should go up by one.
// when I click on decrement, the count should go down by one.
// Make use of component state for this challenge.
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>count: {count}</p>
            <button onClick={() => setCount(count+1)}>increment</button>
            <button onClick={() => setCount(count-1)}>decrement</button>
        </>
    )
}

export default Counter;