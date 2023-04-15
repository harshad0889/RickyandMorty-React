import HomePage from "./HomePage/HomePage";
import Charecter from "./Charecter/Charecter";
import NavBar from "./NavBar/NavBar";
// import {RegisterPage} from "./RegisterPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  console.log("enter");
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <div style={{marginTop:50}}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/charecter" element={<Charecter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
