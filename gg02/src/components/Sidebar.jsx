import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { FaUser, FaListCheck, FaChartLine, FaGear } from 'react-icons/fa6';
import userState from '../userAtom';
import './Sidebar.scss';
import '../styles.scss';

function SideBar() {
  const resetUserState = useResetRecoilState(userState);
  const authority = useRecoilValue(userState);

  return (
    <div className='side-bar'>
      <ul>
        <li>
          <Link to='/main/profile'>
            <FaUser size='35' />
          </Link>
        </li>
        <li>
          <Link to='/main/todos'>
            <FaListCheck size='35' />
          </Link>
        </li>
        {(authority === 'manager' || authority === 'admin') && (
          <li>
            <Link to='/main/manager'>
              <FaChartLine size='35' />
            </Link>
          </li>
        )}
        {authority === 'admin' && (
          <li>
            <Link to='/main/admin'>
              <FaGear size='35' />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default SideBar;
