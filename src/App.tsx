import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  const nameData = {
    first: "Sowmiya",
    last: "Shree",
  };

  return (
    <div className="App">
      <Greet language="Typescript" value={20} period={false} name={nameData} />
    </div>
  );
}

export default App;
