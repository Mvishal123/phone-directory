import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>Phone directory</div>
        <button>Add</button>
        <div>
          <span>Name</span><br/>
          <span>Phone</span>
        </div>
      </div>
    );
  }
}
export default App;
