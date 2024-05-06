import "./App.css";
import Hero from "./components/Hero";
import Homecard from "./components/Homecard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Homecard />
    </div>
  );
}

export default App;
