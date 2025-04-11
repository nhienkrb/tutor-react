import Fruit from "./Fruit";

function displayMessage() {
  return "Hello, this is a message from the displayMessage function!";
}
const foodList = [
  {name:"banana", price: 1.2, color: "yellow"},
  {name:"apple", price: 0.8, color: "red"},
  {name:"orange", price: 1.5, color: "orange"},
  {name:"grape", price: 2.0, color: "purple"},
  {name:"kiwi", price: 1.8, color: "green"},
]
export default function Foods() {
  return (
    <div>
      {foodList.map((food, index) => (
        <Fruit key={index} fruit={food} />
      ))}
    </div>
  );
}
