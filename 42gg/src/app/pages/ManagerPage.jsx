import { useEffect } from 'react';
import '../css/HomePage.css';

import { useRecoilValue } from 'recoil';
import { userState } from '../../atom.jsx';
import { useNavigate } from 'react-router-dom';

function ManagerPage() {
  const { role } = useRecoilValue(userState);
  const navigate = useNavigate();
  useEffect(() => {
    if (role !== 'manager') navigate('/');
  }, []);

  return <div className='manager-page'>man</div>;
}
export default ManagerPage;
