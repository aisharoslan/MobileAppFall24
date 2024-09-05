// package.json has all dependencies
// package-lock.json just locks it in
// .gitignore will ignore the files listed from git commit

// top of project - import everything here - then will be put into index.html 
// from node_modules (npm install) - need dependencies
// import'react' and 'react-dom/client' from node modules folder 
// importing React so we can use it later on
import React from 'react';

// make react elements for desktop/mobile browsers
// will be ReactNative for mobile
// importing ReactDOM to make a react website
// import ReactDOM so we can create a root element in our ... (look at repo)
// if making a mobile app, it'd be ReactNative
import ReactDOM from 'react-dom/client';

// App is first React component (top-level React component)
// import a component so we can render it
import App from './App';

// createRoot is from ReactDOM, then document.getElementById('root) looking for div with id root in index.html - create root element
// grabbing our #root div from index.html (in our public folder) and tell it to become our root element to inject react
const root = ReactDOM.createRoot(document.getElementById('root'));

// now i have a root - render the app/component
// render is a React function - render my App component inside root
root.render(
  // this is JSX
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// load from a data file instead of vanilla HTML/CSS/JS
// React used for templating
// Props!!
// Plain HTML/CSS is not the point of React - wanna dynamically do it