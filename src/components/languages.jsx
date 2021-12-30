// You have an array of favorite languages. 
// make it so when I click favorite language button, that it will toggle which language is my favorite from the LangeList array.
// the initial favorite language should be the first one in the array. 
// manage your state in a seperate location (in this file, dont create another file) 
// and use the useContext API to transport your state and changes to your child component.
// Make use of component state for this challenge. (hint: you will use the createContext and useContext hooks) 

import React, {createContext, useContext, useState} from 'react';

const LangList = ['JavaScript', 'Python'];

// const lang = createContext();

const FavoriteLang = () => {
    const [lang, setLang] = useState(0);
    return (
        <>
            <p>my favorite language is {LangList[lang]}</p>
            <button onClick={() => setLang(lang+1)}>favorite language</button>
        </>
    )
}


export default function Languages() {
    return (
        <>
            <FavoriteLang />
        </>
    )
}