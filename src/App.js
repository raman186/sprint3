import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Products from "./components/Products";

function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}>  </Route>
      <Route path="/login" element={<LogIn />}>  </Route>
      <Route path="/products" element={<Products />}></Route>

    </Routes>
    
   </div>
}

export default App;
