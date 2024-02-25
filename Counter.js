import { useState } from "react"
import "./Counter.modules.scss";

const Counter = () => {
    const [count, setCount] = useState(0);
  
    const addCount = () => {
      setCount(count => count + 1);
    };
  
    const reduceCount = () => {
      setCount(count => count - 1);
    };
  
    return (
      <span>
        <button className="btn" type="button" onClick={addCount}>
          +
        </button>
        <button className="btn" type="button" onClick={reduceCount}>
          -
        </button>
        <span className="number">{count}</span>
      </span>
    );
  };
export default Counter;
