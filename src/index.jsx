import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(    
    <BrowserRouter>
      <div>
        <h1>Stretch Armstrong</h1>
        <nav aria-label="Main navigation">
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

        <main>
            <Routes>
                 <Route path="/" element={<Navigate to="/dashboard" replace />}/>
                <Route path="/dashboard" element={<h2>Dashboard</h2>} />
                <Route path="/workout" element={<h2>Workout</h2>} />
                <Route path="/history" element={<h2>History</h2>} />
                <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
        </main>
      </div>
    </BrowserRouter>
  );

