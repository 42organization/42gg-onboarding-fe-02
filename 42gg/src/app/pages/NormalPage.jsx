import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
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
    <div className='normalPage'>
      <div className='outlet'>
        <Navbar />
        <Sidebar />
      </div>
      <div className='viewPage'>
        <TodoPage />
      </div>
    </div>
  );
}

export default NormalPage;
