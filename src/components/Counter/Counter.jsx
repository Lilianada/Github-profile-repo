import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


  return (
    <section className="counterApp">
        <h1>Counter</h1>
        <div className="counter">
            <button className="counter__button" onClick={decrement} >-</button>
            <span className="counter__value">0</span>
            <button className="counter__button" onClick={increment} >+</button>
        </div>
    </section>
  );
}
