// The goal is to create a function that increments or decrements by 1. 
// when I click on increment, the count should go up by one.
// when I click on decrement, the count should go down by one.
// Make use of component state for this challenge.
import React from 'react';

function Counter() {
    return (
        <>
            <p>count: 0</p>
            <button>increment</button>
            <button>decrement</button>
        </>
    )
}

export default Counter;