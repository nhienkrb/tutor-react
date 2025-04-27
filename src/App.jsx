import DemoReducer from "./demoReducer";
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
      {/* <Foods />
      <hr />
      <PropsDemo person={person}  />
      <MessageBtn/>
      <hr />
      <Counter /> */}
      {/* <Heading />
      <Todo /> */}
      <DemoReducer />
    </div>
  );
}

export default App;
