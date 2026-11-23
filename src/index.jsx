import React from 'react';
import { createRoot } from 'react-dom/client';
import RecoveryCheckIn from './components/RecoveryCheckIn';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<RecoveryCheckIn />);
