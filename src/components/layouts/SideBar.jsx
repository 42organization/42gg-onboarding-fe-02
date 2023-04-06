import { Link } from 'react-router-dom';
import { sidebarContent } from '../../commons/sidebarContent';
import { useRecoilValue } from 'recoil';
import { userState } from '../../utils/user';

export function Sidebar() {
  const user = useRecoilValue(userState);
  if (!user) {
    return <></>;
  }
  return (
    <nav>
      <ul>
        {sidebarContent
          .filter((content) => content.auth <= user.role)
          .map((route) => (
            <li key={route.name}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
