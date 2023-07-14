import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import './MainNavigation.css';
import loginState from '../atom';

function MainNavigation() {
  const resetLoginState = useResetRecoilState(loginState);
  const isLoggedIn = useRecoilValue(loginState);

  useEffect(() => {
    console.log('HomePage - ', isLoggedIn);
  }, [isLoggedIn]);

  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.removeItem('user');
    resetLoginState();
    navigate('/');
  }
  return (
    <div>
      <header>
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to='/main/normal'>HOME</Link>
            </li>
            <li>
              <button type='button' onClick={handleLogOut}>
                SIGN OUT
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className='side-bar'>side bar</div>
    </div>
  );
}

export default MainNavigation;
