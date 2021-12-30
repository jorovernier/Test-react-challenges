// IMPORTANT!: ALL challenges are meant to be isolated to their single file. 
// Create all your work within each singular file to solve each challenge!
// nothing should be done on this file. 

// you can add classes and styles but keep everything in the same file.

import React from 'react';
import './App.css';

import ToggleBtn from './components/toggleButton';
import Counter from './components/counter';
// import List from './components/list';
import Languages from './components/languages';
import PhoneBook from './components/phoneBook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleBtn />
        <Counter />
        {/* <List /> */}
        <Languages />
        <PhoneBook />
      </header>
    </div>
  );
}

export default App;
