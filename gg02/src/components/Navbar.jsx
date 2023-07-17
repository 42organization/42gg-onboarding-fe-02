import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import loginState from '../loginAtom';
import userState from '../userAtom';
import './Navbar.scss';

function NavBar() {
  const resetLoginState = useResetRecoilState(loginState);
  const resetUserState = useResetRecoilState(userState);
  const isLoggedIn = useRecoilValue(loginState);

  let buttonText = 'SIGN OUT';
  if (!isLoggedIn) {
    buttonText = 'SIGN IN';
  }
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.removeItem('user');
    resetLoginState();
    resetUserState();
    navigate('/', { replace: true });
  }

  return (
    <header>
      <nav className='nav-bar'>
        <ul>
          <li>
            <Link to='/main'>HOME</Link>
          </li>
          <li>
            <button type='button' onClick={handleLogOut}>
              {buttonText}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
