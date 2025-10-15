import {
  useState,
} from "react";
import './App.css';
export const App = ()=>{
  const [
    count,
    setCount,
  ] = useState (0);

  return (
    <div className={`container`}>
      <h2>
        {`React Counter App`}
      </h2>
      <h2>
        {count}
      </h2>
      <div className={`buttons`}>
        <button onClick={()=>{
          setCount (count - 1);
        }}
        >
          {`Decrease count`}
        </button>
        <button onClick={()=>{
          setCount (0);
        }}
        >
          {`Reset count`}
        </button>
        <button onClick={()=>{
          setCount (count + 1);
        }}
        >
          {`Increase count`}
        </button>
      </div>
    </div>
  );
};
