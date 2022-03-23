import "./App.css";
import Home from "./component/Home";
import Signup from "./component/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import ProtectedRoute from './routes/ProtectedRoute';
function App() {
  //const user = localStorage.getItem("user");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>

          {/* <Route path="/login" element={<Login/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
