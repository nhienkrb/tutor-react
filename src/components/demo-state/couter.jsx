import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <div>Count Value is: {count}
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
  </div>;
}
