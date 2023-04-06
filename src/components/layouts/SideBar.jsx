import { Link } from 'react-router-dom';
import { routes } from '../../commons';

export function Sidebar() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.name}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
