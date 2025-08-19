import {Routes, Route, Navigate} from "react-router-dom";

import './Content.scss';
import About from "../About";
import Activities from "../Activities";

/**
 * The Content component represent the main content window in the application.
 * @returns {JSX.Element} The main content of the application.
 */
const Content = () => {
  return (
    <div className='Content'>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/activities' element={<Activities />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default Content;
