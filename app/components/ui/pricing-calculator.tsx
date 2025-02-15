import React, {useState} from "react";
import {Counter} from "./counter";

export function PricingCalculator() {
  const [count, setCount] = useState(0);


  return (
    <div className="flex flex-row gap-5">
      <div className=" flex-1 rounded-3xl bg-white">
        a
      </div>
      <div className=" w-1/3 rounded-3xl bg-white flex flex-col">
        <Counter count={count} />
        <button onClick={() => setCount(count + 134)}>ahoj</button>
      </div>
    </div>
  )
}