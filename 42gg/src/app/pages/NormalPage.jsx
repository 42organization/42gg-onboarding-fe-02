import Navbar from '../components/NavBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import '../css/HomePage.css';
import TodoPage from './TodoPage.jsx';

function NormalPage() {
  return (
    <div className='admin-page'>
      <Navbar />
      <Sidebar />
      <TodoPage />
    </div>
  );
}

export default NormalPage;
