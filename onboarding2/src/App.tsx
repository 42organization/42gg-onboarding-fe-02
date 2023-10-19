import './App.scss';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Admin from './pages/Admin';
import Manager from './pages/Manager';
import Normal from './pages/Normal';
import { useRecoilState } from 'recoil';
import { userState } from './atoms/atoms';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigator = useNavigate();
  const userRole = useRecoilState(userState);
  if (!userRole) {
    navigator('/login');
  }

  return (
    <>
      <NavBar></NavBar>
      <div className='APP'>
        <div className='content'>
          <div className='main-content'>
            <Routes>
              <Route path='/login' Component={Login} />
              <Route path='/' Component={Home} />
              <Route path='/admin' Component={Admin} />
              <Route path='/manager' Component={Manager} />
              <Route path='/normal' Component={Normal} />
            </Routes>
          </div>
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default App;
