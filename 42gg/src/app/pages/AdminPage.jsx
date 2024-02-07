import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { userState } from '../../atom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';

function AdminPage() {
  const { role } = useRecoilValue(userState);
  const navigate = useNavigate();
  useEffect(() => {
    if (role !== 'admin') navigate('/');
  }, []);
  return (
    <div className='AdminPage'>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default AdminPage;
