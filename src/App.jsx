import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Research from "./pages/Research";
import Analytics from "./pages/Analytics";
import Recognition from "./pages/Recognition";
import Collaboration from "./pages/Collaboration";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/research" element={<Research />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
