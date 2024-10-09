// Importing necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM.createRoot for React 18
import App from './App'; // Import the main App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS for components like modals and dropdowns

// Creating a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
