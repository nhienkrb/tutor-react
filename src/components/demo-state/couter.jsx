import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [increaseBy, setIncreaseBy] = useState(1);
  return (
    <div>
      Count Value is: {count}
      <button onClick={() => setCount(increaseBy + count)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    <h3>Increase By: {increaseBy}</h3>
      <button onClick={() => setIncreaseBy(increaseBy + 1)}>Increase by</button>
    </div>
  );
}
