import { Component, useState } from "react";
import './App.css';


export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }


  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };



  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {

    const { count } = this.state;



    return (
      <div className="counter">

        <h1> Counter App </h1>
  
        <div className="count">
          Count: {count}
        </div>
  
        <div className="buttons">
  
          <button onClick={this.handleIncrement}> Increment </button>
  
          <button onClick={this.handleDecrement}> Decrement </button>
  
        </div>
        
      </div>
    );

  }


}
