import React from "react";
import { ReactDOM } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Jamison'
    };
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}!</h1>
        <h2>It's about to get krunk up in here.</h2>
      </div>
    )
  }
}

export default App;

/*
 * CCR:
    Class
    Constructor
    Render & Return

    *   Functional components vs class based components:
        -Class based components give you access to a bunch of built in methods extended from
            the Base class built into React
 */