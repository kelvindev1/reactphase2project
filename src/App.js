import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Homecard from "./components/Homecard";
import Navbar from "./components/Navbar";
import Joblistings from "./components/Joblistings";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Homecard />
        <Joblistings />
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
