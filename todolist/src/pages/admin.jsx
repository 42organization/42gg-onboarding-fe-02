import React from 'react';
import Navbar from '../component/navbar';
import Sidebar from '../component/sidebar';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authatoms';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function admin() {
  const { isLoggedIn, userRole } = useRecoilValue(authState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
    console.log(userRole);
    if (userRole === 'guest' || userRole === 'manage') {
      navigate('/Lobby');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default admin;
