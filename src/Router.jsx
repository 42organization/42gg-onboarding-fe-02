import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './commons';
import { roleType } from './types';
import { RouteWithAuth } from './components/RouteWithAuth';
import { DefaultLayout, PublicLayout } from './layouts';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, name, element, auth }) =>
          auth === roleType.PUBLIC ? (
            <Route key={name} element={<PublicLayout />}>
              <Route path={path} element={element} />
            </Route>
          ) : (
            <Route key={name} element={<DefaultLayout />}>
              <Route element={<RouteWithAuth auth={auth} />}>
                <Route path={path} element={element} />
              </Route>
            </Route>
          )
        )}
      </Routes>
    </BrowserRouter>
  );
}
