import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom'; // Import Navigate from React Router
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import VehicleDetails from './components/VehicleDetails';
import ChargingStations from './components/ChargingStations';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin() {
    setIsAuthenticated(true);
  }

  function handleLogout() {
    setIsAuthenticated(false);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Render Home component by default */}
          <Route path="/" element={<Home />} />
          {/* Render Login component if not authenticated */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/charging-stations" element={<ChargingStations />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
