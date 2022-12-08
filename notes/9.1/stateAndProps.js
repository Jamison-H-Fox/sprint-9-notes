import React from "react";

class App extends React.Component { // class based component
  constructor() {
    super();
    this.state = {
      welcomeMessage: 'world'
    };
  }

  updateStateMessage = (evt) => {
    this.setState({ welcomeMessage: evt.target.value })
  }
  
  render() {
    return (
      <div className="App">
        <WelcomBanner welcomeMessage={this.state.welcomeMessage} />
        <Form updateStateMessage={this.updateStateMessage} />
      </div>
    )
  }
}

// Child components below:

class WelcomBanner extends React.Component { // class based component

  render() {
    return (
      <div>
        <h1>Hello {this.props.welcomeMessage}!</h1>
        <h2>It's about to get krunk up in here.</h2>
      </div>
    )
  }
}

function Form(props) { // functional component

  return (
    <form>
      <input 
        placeholder="change state"
        onChange={props.updateStateMessage}
      />
    </form>
  )
}

export default App;
