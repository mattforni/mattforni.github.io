import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import './App.scss';

import Content from '../Content';
import Footer from '../Footer';

// Set the title of the document
document.title = 'mattforni.com';

/**
 * App is the top-level component in this application.
 * @returns The top-level component in this application.
 */
const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Content />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

