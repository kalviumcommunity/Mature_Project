import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

import Dashboard from "./Components/Dashboard";

function App() {
  

  

  return (
    <>

    
    
    <Routes>
      
      <Route path="/Sign-up" element={< Signup/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>

      
    </Routes>
    </>
  );
}

export default App;
