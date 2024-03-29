import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BrowserRouter><App /></BrowserRouter>);

serviceWorker.unregister();
