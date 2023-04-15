import HomePage from "./HomePage/HomePage";
import NavBar from "./NavBar/NavBar";
import {RegisterPage} from "./RegisterPage"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <RegisterPage/>
      <HomePage></HomePage>
      
    </div>
  );
}

export default App;
