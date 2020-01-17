import React, { Component } from "react";

class StatePractice extends Component {
  constructor() {
    super();
    this.state = {
      message: "piece of state",
      imageWidth: 0
    };
    this.displayTrmCnd = this.displayTrmCnd.bind(this);
    this.clearMesssage = this.clearMesssage.bind(this);
    this.imageWidth = this.imageWidth.bind(this);
  }

  displayTrmCnd() {
    this.setState({
      message: "Please agree to the website terms and conditions"
    });
  }

  clearMesssage() {
    this.setState({
      message: ""
    });
  }

  imageWidth(e) {
    this.setState(
      {
        imageWidth: e.target.width
      },
      () => {
        if (this.state.imageWidth > 100) {
          console.log("Image Is Too Big");
        }
      }
    );
  }

  render() {
    return (
      <div>
        <img
          onLoad={this.imageWidth}
          alt=""
          src="https://images.pexels.com/photos/3484702/pexels-photo-3484702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <h3 onMouseEnter={this.clearMesssage}>{this.state.message}</h3>
        <input onFocus={this.displayTrmCnd} type="text"></input>
      </div>
    );
  }
}

export default StatePractice;
