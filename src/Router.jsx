import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './commons';
import { authType } from './types';
import { RouteWithAuth } from './components/RouteWithAuth';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, name, element, auth }) =>
          auth === authType.PUBLIC ? (
            <Route key={name} path={path} element={element} />
          ) : (
            <Route key={name} element={<RouteWithAuth role={auth} />}>
              <Route path={path} element={element} />
            </Route>
          )
        )}
      </Routes>
    </BrowserRouter>
  );
}
