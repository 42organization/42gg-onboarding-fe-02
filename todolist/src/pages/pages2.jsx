import React from 'react';
import Navbar from '../component/navbar';
import Sidebar from '../component/sidebar';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authatoms';
import { useNavigate } from 'react-router-dom';

function pages2() {
  const { isLoggedIn, userRole } = useRecoilValue(authState);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/');
  }
  if (userRole == 'geust') {
    navigate('/Lobby');
  }
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default pages2;
