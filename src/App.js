import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Homecard from "./components/Homecard";
import Joblistings from "./components/Joblistings";
import ViewAllJobs from "./components/ViewAllJobs";
import Browsejobs from "./components/Browsejobs";
function App() {
  return (
    <>
      <Router>
        <Hero />
        <Homecard />
        <Joblistings />
        <Routes>
          <Route path="/jobs" element={<ViewAllJobs />} />
          <Route path="/kazi" element={<Browsejobs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
