import {
  BrowserRouter as Router,
} from 'react-router-dom';

import './App.scss';

import Content from '../Content';
import Footer from '../Footer'
import Header from '../Header';

// Set the title of the document
document.title = 'mattforni.com';

/**
 * App is the top-level component in this application.
 * @returns {JSX.Element} The top-level component in this application.
 */
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

