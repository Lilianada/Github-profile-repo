import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/NavBar";
import "./Counter.css";

const ErrorFallback = (props) => {
    return (
      <div role="alert" className="boundary__error">
        <p>Something went wrong!</p>
        <pre>{props.error.message}</pre>
        <Button onClick={props.resetErrorBoundary}>Restart app</Button>
      </div>
    );
  };

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    if (count === 4) {
      throw new Error("Crashed!!");
    }

  }
  const decrement = () => setCount(count - 1);

  return (
    <section className="counterApp">
      <Header/>
        <div className="counter">
          <h2>Counter App</h2>
          <button className="counterButton" onClick={decrement}>
            -
          </button>
          <span className="counterValue"> {count} </span>
          <button className="counterButton" onClick={increment}>
            +
          </button>
        </div>
      <Footer/>
    </section>
  );
}

