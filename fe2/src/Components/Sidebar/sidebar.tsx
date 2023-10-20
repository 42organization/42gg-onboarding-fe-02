import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { roleState } from '../../Atoms/role';

import './sidebar.scss';

const Sidebar = () => {
    
    const [role, setRole] = useRecoilState(roleState);
  return (
    <div className="sidebar">
        <Link to={'/main'}>Main</Link>
        {role !== 'guest' ? <Link to={'/user'}>Users</Link> : null}
        {(role === 'manager' || role === 'admin') ? <Link to={'/manager'}>Manager</Link> : null}
        {role === 'admin' ? <Link to={'/admin'}>Admin</Link> : null}
    </div>
  );
};

export default Sidebar;