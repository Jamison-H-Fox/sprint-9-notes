import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      message: '' 
    };
  }

  handleSingleClickEvent = () => {
    alert('Single Click Event Triggered')
  };
  handleDoubleClickEvent = () => {
    alert('Double Click Event Triggered')
  };
  handleMouseEnterEvent = () => {
    alert('Mouse Enter Event Triggered')
  };
  handleMouseLeaveEvent = () => {
    alert('Mouse Leave Event Triggered')
  };
  handleInputChange = (event) => {
    this.setState({ message: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <button
          onClick={this.handleSingleClickEvent}
        >Single Click Handler</button>
        <button
          onDoubleClick={this.handleDoubleClickEvent}
        >Double Click Handler</button>
        <div
          // onMouseEnter={this.handleMouseEnterEvent}
        >Mouse Enter</div>
        <div
          // onMouseLeave={this.handleMouseLeaveEvent}
        >Mouse Leave</div>
        <input 
          type='text'
          placeholder='Change Me!'
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default App;
