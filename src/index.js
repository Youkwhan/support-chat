import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SupportAdmin from "./components/SupportAdmin"

const path = window.location.pathname

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* If we are on the support route render the SupportAdmin component else render App which will have support chat inside  */}
    {path.indexOf('/support') === -1 ? <App /> : <SupportAdmin />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
