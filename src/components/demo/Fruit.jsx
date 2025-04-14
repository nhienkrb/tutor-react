export default function Fruit({ fruit }) {
  return (
    <div>
      {" "}
      {fruit.price > 1 ? (<li style={{ color: "red" }}>{fruit.name} - {fruit.price} - {fruit.color}</li>) : (<li>{fruit.name} - {fruit.price} - {fruit.color}</li>)}
    </div>
  );
}
