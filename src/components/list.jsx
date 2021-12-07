// The goal is to render a list of people.
// The list should consist of a first name and their age seperated by one space.
// An array of people will be passed to the function. 
// Make use of component state for this challenge.
import React from 'react';

const people = [
    {
        firstName: 'Blob',
        age: 45
    },
    {
        firstName: 'freddy',
        age: 33
    },
    {
        firstName: 'dumbledore',
        age: 856
    },
    {
        firstName: 'whiskey',
        age: 2
    },
    {
        firstName: 'alicorn',
        age: 31
    },
]

const Users = (namesArr) => {
    return (
        <>
        <h3>List of Users:</h3>
        </>
    )
}

Users(people);

export default Users;