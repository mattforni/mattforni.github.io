import './Content.scss';
import About from "../About";

/**
 * The Content component represent the main content window in the application.
 * @returns {JSX.Element} The main content of the application.
 */
const Content = () => {
  return (
    <div className='Content'>
      <About />
    </div>
  );
}

export default Content;
