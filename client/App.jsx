import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import "./styles.css";
import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";
import History from "./pages/History";

export default function App() {
  return (
    <Router>
      <header className="app-header">
        <h1>Stretch Armstrong</h1>

        <nav className="app-nav" aria-label="Main navigation">
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/workout">Workout</NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
  <Route
    path="/"
    element={<Navigate to="/dashboard" replace />}
  />

  <Route
    path="/dashboard"
    element={<Dashboard />}
  />

  <Route
    path="/workout"
    element={<Workout />}
  />

  <Route
    path="/history"
    element={<History />}
  />

  <Route
    path="*"
    element={<h2>Page not found</h2>}
  />
</Routes>
      </main>
    </Router>
  );
}