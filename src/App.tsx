import { useState } from "react";
import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  const nameData = {
    first: "Sowmiya",
    last: "Shree",
  };

  const [color, setColor] = useState(false);
  
  const handleClick = () => {
    setColor(true);
  };
  
  return (
    <div className="App" style={{ background: color ? "pink" : "yellow"}}>
      <Greet language="Typescript" value={20} period={false} name={nameData} />
      <button onClick={handleClick}>COLOR</button>
    </div>
  );
}

export default App;
