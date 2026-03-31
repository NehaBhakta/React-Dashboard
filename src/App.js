import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Briefcaseicon from "./assets/icons/Briefcaseicon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/insight" element={<Profile />} />
        <Route path="/invoices" element={<Profile />} />
        <Route path="/products" element={<Profile />} />
        <Route path="/reimburse" element={<Profile />} />
        <Route path="/inbox" element={<Profile />} />
        <Route path="/people-teams" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help-center" element={<Settings />} />
        <Route path="/dark-mode" element={<Briefcaseicon />} />
      </Routes>
    </Router>
  );
}

export default App;
