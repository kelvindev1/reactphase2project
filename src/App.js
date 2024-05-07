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
import Jobspage from "./pages/Jobspage";
function App() {
  return (
    <>
      <Router>
        <div className="navbar">
          <NavLink> Home </NavLink>
          <NavLink to={Jobspage}> Jobs </NavLink>
          <NavLink> Add Jobs </NavLink>
        </div>
        ;
        <Hero />
        <Homecard />
        <Joblistings />
        <Routes>
          <Route path="/jobs" element={<ViewAllJobs />}></Route>
          <Route path="/jobs" element={<Jobspage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
