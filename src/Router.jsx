import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout, DefaultLayout } from "./layouts";
import { routes } from "./commons";
import { authType } from "./types";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                { routes.map(({ path, name, element, auth }) => (
                    auth === authType.PUBLIC ? 
                        <Route key={name} path="/" element={<DefaultLayout />}>
                            <Route path={path} element={element} />
                        </Route> :
                        <Route key={name} path="/" element={<AuthLayout auth={auth} />}>
                            <Route path={path} element={element} />
                        </Route>
                )) }
            </Routes>
        </BrowserRouter>
    );
}