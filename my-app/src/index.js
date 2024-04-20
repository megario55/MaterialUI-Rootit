import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { col } from './Components/ButtonColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ThemeProvider theme={col}>
       <App />
       </ThemeProvider>
);

