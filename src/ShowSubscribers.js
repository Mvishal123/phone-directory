import React, { Component } from "react";
import Header from "./Header.js";
import "./ShowSubscribers.css";

class ShowSubscribers extends Component {
  constructor(){
    super();
    // this.state = {
    //   subscribersListToBeAdded: []
    // }
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
        {this.props.subscribersList?.map((detail, id) => {
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
export default ShowSubscribers;
