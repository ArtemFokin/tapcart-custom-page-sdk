import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log({
        tapcart: window.Tapcart,
      });
      setState((v) => v + 1);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <h1>
        Tapcart device: {window.Tapcart?.device.id} - {state}
      </h1>
    </div>
  );
}
