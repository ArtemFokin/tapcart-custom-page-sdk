import { useEffect, useState } from "react";
import "./styles.css";
import { loadWebbridge, WebbridgeProvider } from "@tapcart/webbridge-react";
import Body from "./Body";

const webbridgeClient = loadWebbridge({ test: false });

export default function App() {
  const [state, setState] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log({
        tapcart: window.Tapcart,
      });
      setState((v) => v + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <WebbridgeProvider webbridgeClient={webbridgeClient}>
      <div className="App">
        <h1>
          Tapcart device: {window.Tapcart?.device.id} - {state}
        </h1>
        <Body />
      </div>
    </WebbridgeProvider>
  );
}
