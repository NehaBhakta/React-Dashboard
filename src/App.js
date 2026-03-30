import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Briefcaseicon from "./assets/icons/Briefcaseicon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Insight" element={<Profile />} />
        <Route path="/Invoices" element={<Profile />} />
        <Route path="/Products" element={<Profile />} />
        <Route path="/Reimburse" element={<Profile />} />
        <Route path="/Inbox" element={<Profile />} />
        <Route path="/People & Teams" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/Help & Center" element={<Settings />} />
        <Route path="/Dark Mode" element={<Briefcaseicon />} />
      </Routes>
    </Router>
  );
}

export default App;
