import React, {useState} from "react";
import { render, screen } from '@testing-library/react'

function App(){
  

  return(
    <div className="App">
      <Greeting />
    </div>
  )
}

export default App;

// components below:

function Greeting(){

  return(
    <h1 className="greet">Hello World</h1>
  )
}

// tests below:

// import React from "react";
// import { render, screen } from '@testing-library/react';
// import App from "./App";
// import * as rtl from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'

// it('renders renders an element with the text Hello World', () => {
//     const wrapper = rtl.render(
//         <App />
//     );
    
//     const element = wrapper.queryByText(/hello world/i);
//     expect(element).toBeInTheDocument();
//     expect(element).toBeTruthy();
//     expect(element).toBeVisible();
// });