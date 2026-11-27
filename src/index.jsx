import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
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
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Stretch Armstrong
        </h1>
        <nav aria-label="Main navigation">
          <ul className="grid grid-cols-3 gap-2">
            <li>
                <NavLink to="/dashboard" className="block py-3 text-center bg-gray-100">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/workout" className="block py-3 text-center bg-gray-100">Workout</NavLink>
            </li>
            <li>
                <NavLink to="/history" className="block py-3 text-center bg-gray-100">History</NavLink>
            </li>
          </ul>
        </nav>

        <main>
            <Routes>
                 <Route path="/" element={<Navigate to="/dashboard" replace />}/>
                <Route path="/dashboard" element={
                  <div>
                    <h2 className="font-bold">Dashboard</h2>
                    <div className="mt-4 min-h-64 bg-gray-100 p-4">

                    </div>
                  </div>
                } 
                />
                <Route path="/workout" element={
                  <div>
                  <h2 className="font-bold">Workout</h2>
                  <div className="mt-4 min-h-64 bg-gray-100 p-4">

                  </div>
                  </div>
                  } 
                  />
                <Route path="/history" element={
                  <div>
                  <h2 className="font-bold">History</h2>
                  <div className="mt-4 min-h-64 bg-gray-100 p-4">

                  </div>
                  </div>
                  } 
                  />
                <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
        </main>
      </div>
    </BrowserRouter>
  );

