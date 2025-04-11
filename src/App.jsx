import Foods from "./components/Foods";
import PropsDemo from "./components/PropsDemo";

function App() {
  const person = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      state: "NY",
    },
    seatNumbers: [1, 4, 6, 7],
    hobbies: ["reading", "traveling", "cooking"],
  };
  return (
    <div className="App">
      <Foods />
      <hr />
      <PropsDemo person={person}  />
    </div>
  );
}

export default App;
