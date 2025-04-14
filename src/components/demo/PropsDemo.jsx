export default function PropsDemo({ person }) {
  return (
    <div>
      (PropsDemo:) Name: {person.name} - Age: {person.age} - seatNumbers: {person.seatNumbers.join(", ")}
    </div>
  );
}
