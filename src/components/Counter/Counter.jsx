import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


  return (
    <section className="counterApp">
        <ErrorBoundary>
            <div className="counter">
                <h1>Counter App</h1>
                <button className="counterButton" onClick={decrement} >-</button>
                <span className="counterValue"> {count} </span>
                <button className="counterButton" onClick={increment} >+</button>
            </div>
        </ErrorBoundary>
    </section>
  );
}
