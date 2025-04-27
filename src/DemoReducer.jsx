import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.incrementBy }; //state + action.payload;
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "incrementBy":
      return { ...state, incrementBy: +action.payload };
    default:
      throw new Error();
  }
}

function DemoReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 0 });

  return (
    <div className="App">
      <input
        type="text"
        value={state.incrementBy} 
        onChange={(e) =>
          dispatch({ type: "incrementBy", payload: Number(e.target.value) })
        }
      />
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Up
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Down
      </button>
    </div>
  );
}

export default DemoReducer;