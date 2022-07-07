import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BrowserRouter><App /></BrowserRouter>);

serviceWorker.unregister();
