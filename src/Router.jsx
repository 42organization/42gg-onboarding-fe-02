import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './commons';
import { roleType } from './types';
import { RouteWithAuth } from './components/RouteWithAuth';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {routes.map(({ path, name, element, role }) =>
            role === roleType.PUBLIC ? (
              <Route key={name} path={path} element={element} />
            ) : (
              <Route key={name} element={<RouteWithAuth role={role} />}>
                <Route path={path} element={element} />
              </Route>
            )
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
