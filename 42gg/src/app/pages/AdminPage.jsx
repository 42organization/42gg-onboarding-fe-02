import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { pageState, userState } from '../../atom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import TodoPage from './TodoPage';
import DashboardPage from './DashboardPage';
import PermissionPage from './PermissionPage';

function showComponent(pageName) {
  switch (pageName) {
    case 'todo':
      return <TodoPage />;
    case 'dashboard':
      return <DashboardPage />;
    case 'permission':
      return <PermissionPage />;
    default:
      return <TodoPage />;
  }
}

function AdminPage() {
  const { role } = useRecoilValue(userState);
  const [page] = useRecoilState(pageState);

  const navigate = useNavigate();
  useEffect(() => {
    if (role !== 'admin') navigate('/');
  }, [role]);

  return (
    <div className='adminPage'>
      <div className='outlet'>
        <Navbar />
        <Sidebar />
        {showComponent(page)}
      </div>
      <div className='viewPage'>{}</div>
    </div>
  );
}

export default AdminPage;
