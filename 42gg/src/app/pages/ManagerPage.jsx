import { useEffect } from 'react';
import '../css/HomePage.css';

import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, userState } from '../../atom.jsx';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import TodoPage from './TodoPage.jsx';
import DashboardPage from './DashboardPage.jsx';

function showComponent(pageName) {
  switch (pageName) {
    case 'todo':
      return <TodoPage />;
    case 'dashboard':
      return <DashboardPage />;
    default:
      return <TodoPage />;
  }
}

function ManagerPage() {
  const { role } = useRecoilValue(userState);
  const [page] = useRecoilState(pageState);

  const navigate = useNavigate();
  useEffect(() => {
    if (role === 'normal') navigate('/');
  }, [role]);

  return (
    <div className='admin-page'>
      <Navbar />
      <Sidebar />
      {showComponent(page)}
    </div>
  );
}

export default ManagerPage;
