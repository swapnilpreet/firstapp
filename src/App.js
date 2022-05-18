import "./App.css";
import List from "./Components/List";
function App() {
  let os = [
    { brand: "Android" },
    { brand: "BlackBerry" },
    { brand: "Iphone" },
    { brand: "Windows phone" },
  ];
  let manufacturer = [
    { brand: "SamSong" },
    { brand: "HTC" },
    { brand: "Apple" },
    { brand: "OnePlus" },
  ];
  return (
    <div className="App">
      <h2>Mobile Operating System</h2>
      {os.map((OS) => (
        <List {...OS} />
      ))}

      <h2>Mobile manufacturer</h2>
      {manufacturer.map((mnf) => (
        <List key={manufacturer.index} {...mnf} />
      ))}
    </div>
  );
}

export default App;