import './Header.scss';

/**
 * The Header component represents the header content in the application.
 * @returns {JSX.Element} The main content of the application.
 */
const Header = () => {
  return (
    <div className='Header'>
      <div className='NavigationBar'>
        <div className='Logo'>
          <a href='/'>
            Matt Forni
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
