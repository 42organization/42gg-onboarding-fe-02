import React from 'react';
import Navbar from '../component/navbar';
import Sidebar from '../component/sidebar';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authatoms';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function pages1() {
  const { isLoggedIn } = useRecoilValue(authState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default pages1;
