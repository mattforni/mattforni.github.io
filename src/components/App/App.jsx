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
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

