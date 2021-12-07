// create a form  where you can input someones first name, last name, and phone number
// when you click the add person button, make it so the person gets added to the phone book.
// the data should be ordered like a phone book, where the last name comes first, then the first name and lastly the phone number. 

import React, { useState } from 'react';

const AddPersonForm = () => {
    return (
        <form>
            <input
                type='text'
                placeholder='first name'
            />
            <input 
                type='text'
                placeholder='last name'
            />
            <input
                type='text' 
                placeholder='phonenumber'
            />
            <button>add person</button>
        </form>
    )
}

const PhoneBookList = () => {
    return (
        <table>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Phone number</th>
            </tr>
        </table>
    )
}

class PhoneBook extends React.Component {
    constructor(props) {
      super(props);
    }
  
    handleClick() {
      // todo
    }
  
    render() {
      return (
        <>
            <AddPersonForm />
            <PhoneBookList />
        </>
      );
    }
  }

  export default PhoneBook;