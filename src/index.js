import React from 'react';
import './index.css';
import 'tachyons';
import App from './app.js';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
