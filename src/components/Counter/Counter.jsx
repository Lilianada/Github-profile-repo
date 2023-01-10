import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/NavBar";
import "./Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  handleDecrement() {
    this.setState(({ counter }) => ({
      counter: counter - 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return (
      <>
        <Header />
        <section className="counterApp">
          <div className="counter">
            <h1>Counter App</h1>
            <button className="counterButton" onClick={this.handleDecrement}>
              -
            </button>
            <span className="counterValue"> {this.state.counter} </span>
            <button className="counterButton" onClick={this.handleIncrement}>
              +
            </button>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Counter;
