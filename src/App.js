import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tapcart device: {window.Tapcart?.device.id}</h1>
    </div>
  );
}
