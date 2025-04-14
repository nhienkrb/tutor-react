import Heading from "./components/todo-list/heading";
import Todo from "./components/todo-list/Todo";
import css from './app.css'; // phải lùi ra 1 cấp
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
      <Heading />
      <Todo />
    </div>
  );
}

export default App;
