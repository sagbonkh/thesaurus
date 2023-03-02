import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className= {navbar ? 'navbar active' : 'navbar'}>
          <div className='navbar-container'>
              <Link to= '/' className='navbar-logo' onClick={closeMobileMenu}>
                Thesaurus 
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-regular fa-circle-xmark' : 'fa-regular fa-compass'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/streetwear' className='nav-links' onClick={closeMobileMenu}>
                    Streetwear
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/designers' className='nav-links' onClick={closeMobileMenu}>
                    Designers
                  </Link>
                </li>
                  <li className='nav-item'>
                    <Link to='/travel' className='nav-links' onClick={closeMobileMenu}>
                      Travel
                    </Link>
                  </li>
                <li>
                  <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Log in
                  </Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>Log in</Button>}
          </div>
      </nav>
    </>
  );
}

export default Navbar;
