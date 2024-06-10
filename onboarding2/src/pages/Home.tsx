import { useNavigate } from 'react-router-dom';
import TodoList from '../components/TodoList';
import { useEffect } from 'react';
import { findUserFromStorage } from '../atoms/atoms';

function Home() {
  const userRole = findUserFromStorage();
  const navigator = useNavigate();

  console.log(userRole);
  useEffect(() => {
    if (userRole === undefined) {
      navigator('/login');
    }
  });

  return (
    <div>
      <TodoList />
    </div>
  );
}

export default Home;
