import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Browsejobs from "./components/Browsejobs";
import Homelayout from "./components/Homelayout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homelayout />} />
          <Route path="/kazi" element={<Browsejobs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
