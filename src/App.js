import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";

// let dir = [
//   {
//     id: 1,
//     name: "Vishal",
//     phone: 111111111
//   },
//   {
//     id: 2,
//     name: "Vaibhav",
//     phone: 222222222
//   },
//   {
//     id: 3,
//     name: "Mahesh",
//     phone: 333333333
//   },
//   {
//     id: 4,
//     name: "Sathya",
//     phone: 444444444
//   },
// ]

class App extends Component {
  constructor(){
    super();
    this.state = {
      subList: []
    }
  }
  render() {
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        </div>
        {this.subList?.map((detail, id) => {
          return (
            <div className="grid-container">
              <span key={id} className="grid-item">
                {detail.name}
              </span>
              <span key={id} className="grid-item">
                {detail.phone}
              </span>
              <button className="custom-btn del-btn">Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
