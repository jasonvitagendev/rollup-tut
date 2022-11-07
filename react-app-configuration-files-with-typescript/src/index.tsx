import React from 'react';
import {createRoot} from 'react-dom/client';
import Practice from './features/practice';

const appId = document.getElementById('app');
if (appId) {
    createRoot(appId).render(<Practice />);
}
