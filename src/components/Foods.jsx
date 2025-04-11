function displayMessage() {
  return "Hello, this is a message from the displayMessage function!";
}

export default function Foods() {
  const food = "Banana";
  return (
    <div>This is a components list Foods: food one: {food}  - food two: {displayMessage()}</div>
  );
}
