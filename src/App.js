import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Browsejobs from "./components/Browsejobs";
import Homelayout from "./components/Homelayout";
import ReadmoreDetails from "./components/ReadmoreDetails";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homelayout />} />
          <Route path="/kazi" element={<Browsejobs />} />
          <Route path="/details/:id" element={<ReadmoreDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
