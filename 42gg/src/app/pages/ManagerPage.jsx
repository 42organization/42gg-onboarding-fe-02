import { useEffect } from 'react';

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
    if (role !== 'manager') navigate('/');
  }, [role]);

  return (
    <div className='managerPage'>
      <div className='outlet'>
        <Navbar />
        <Sidebar />
      </div>
      <div className='viewPage'>{showComponent(page)}</div>
    </div>
  );
}

export default ManagerPage;
