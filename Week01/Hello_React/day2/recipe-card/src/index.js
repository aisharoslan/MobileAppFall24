// import react and reactdom libraries for use (no need to import in all component files cause this is the highest alrdy unless from scratch)
import React from 'react';
import ReactDOM from 'react-dom/client';

// import our main parent app component
import App from './App';

// grab and store our root div element as a variable
// use react dom to render our react project inside that div
const root = ReactDOM.createRoot(document.getElementById('root'));

// JSX is hybrid (like HTML but all JS components under the hood)
root.render(
  // require closing
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // self closing if no children - e.g RecipeTitle
);