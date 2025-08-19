import React from 'react';
import { createRoot } from 'react-dom/client';

import './assets/fonts/PermanentMarker/PermanentMarker-Regular.ttf';
import './assets/fonts/Quicksand/Quicksand-VariableFont.ttf';
import './index.scss';

import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
