import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Timer from './Time';
import getTimeLeft from './getTime';
import './tailwind.output.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <App />
    <Timer timeLeft={getTimeLeft()}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
