import {Redirect, Route, Switch} from "react-router-dom";

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
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route exact path='/activities'>
          <Activities />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default Content;
