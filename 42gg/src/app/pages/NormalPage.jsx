import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import '../css/HomePage.css';
import TodoPage from './TodoPage.jsx';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atom.jsx';
import { useEffect } from 'react';

function NormalPage() {
  const navigate = useNavigate();
  const { role } = useRecoilValue(userState);
  useEffect(() => {
    if (!role) navigate('/');
  }, [role]);

  return (
    <div className='admin-page'>
      <Navbar />
      <Sidebar />
      <TodoPage />
    </div>
  );
}

export default NormalPage;
