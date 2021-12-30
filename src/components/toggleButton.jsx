// Your goal is to modify the component 
// so that you can properly toggle the button to switch between an ON state and an OFF state. 
// When the button is on and it is clicked, it turns off and the text within it changes 
// from ON to OFF and vice versa. Make use of component state for this challenge.



import React, { useState } from 'react';

export default function ToggleBtn() {
  const [state, setState] = useState(true);
  return (
    <button onClick={() => setState(!state)}>{state ? 'on' : 'off'}</button>
  )
}
