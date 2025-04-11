import Foods from "./components/Foods";
import PropsDemo from "./components/PropsDemo";

function App() {
  return (
    <div className="App">
      <Foods />
      <hr/>
      <PropsDemo name="I owner Website" message="Hello! "/>
    </div>
  );
}

export default App;
