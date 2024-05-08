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
function App() {
  return (
    <>
      <Router>
        <Hero />
        <Homecard />
        <Joblistings />
        <Routes>
          <Route path="/jobs" element={<ViewAllJobs />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
