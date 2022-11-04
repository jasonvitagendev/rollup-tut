import React from 'react';
import {createRoot} from 'react-dom/client';

const appId = document.getElementById('app');
if (appId) {
    createRoot(appId).render(<div>hello</div>);
}
