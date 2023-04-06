import { useNavigate } from 'react-router-dom';

export const useRoute = () => {
  const navigate = useNavigate();
  return {
    currentPath: window.location.pathname,
    router: (path) => navigate(path),
  };
};
