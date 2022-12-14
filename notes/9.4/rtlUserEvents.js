import React, {useState} from "react";

function App(){
  

  return(
    <div className="App">
      <Counter />
    </div>
  )
}

export default App;

// components below:

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

// tests below:

// import React from "react";

// import { render, screen } from '@testing-library/react'
// import userEvent from "@testing-library/user-event";
// import App from "./App";
// import { Counter } from "./App"
// // import * as rtl from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'

// test('increments count when increment button is clicked', async () => {
//     // Arrange
//     render(<Counter />);

//     // Act
//     const count = screen.getByText(/0/i);

//     // Get the button node
//     const buttonUp = screen.getByText(/increment/i);

//     // simulate a user click
//     userEvent.click(buttonUp);

//     // Assert
//     expect(count).toHaveTextContent('1');
//     expect(count).not.toHaveTextContent('0');
// });

// it('decrements count when decrement button is clicked', async () => {
//     render (<Counter />);

//     const count = screen.getByText(/0/i);

//     const buttonDown = screen.getByText(/decrement/i);
    
//     userEvent.click(buttonDown);

//     expect(count).toHaveTextContent('-1');
//     expect(count).not.toHaveTextContent('0');
// })

// it('decrements count twice then resets when reset button is clicked', async () => {
//     render (< Counter/>);

//     const count = screen.getByText(/0/i);

//     const buttonDown = screen.getByText(/decrement/i);
//     const buttonReset = screen.getByText(/reset/i);
    
//     userEvent.click(buttonDown);
//     userEvent.click(buttonDown);

//     expect(count).toHaveTextContent('-2');

//     userEvent.click(buttonReset);

//     expect(count).toHaveTextContent('0')
// })