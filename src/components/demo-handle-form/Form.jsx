import  { useState } from "react";
export default function Form() {
  const [name, setName] = useState({firstName:"",lastName:""});

  function handleChange(event) {
    setName({...name, firstName: event.target.value});
  }

  return (
  <div> 
    <p>First Name: {name.firstName}</p>
    <form>
      <input
        onChange={ handleChange}
        type="text"
        placeholder="Name"
        value={name.firstName}
      />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
