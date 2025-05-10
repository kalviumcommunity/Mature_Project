import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Incidents_Homepage from "./Components/Incidents_Homepage";
import Incidence_create from "./Components/Incidence_create";
import Incidet_community from "./Components/Incidet_community";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
   
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Incidents_Homepage />} />
            <Route path="/create" element={<Incidence_create />} />
            <Route path="/community" element={<Incidet_community />} />
          </Route>
        </Routes>
    
    </AuthProvider>
  );
}

export default App;
