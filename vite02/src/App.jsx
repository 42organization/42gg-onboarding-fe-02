import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/App.scss';
import { RouteMain, RouteAll, RouteManagerAdmin, RouteAdmin, RouteNormal, RouteManager} from './component/utils/AuthRoute';
import NotFound from './page/NotFound';
import { LoginPage } from './page/LoginPage';
import HomePage from './page/HomePage';
import PageContents from './page/PageContents';
import SettingPage from './page/SettingPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [darkMode, isDarkMode] = React.useState("light");

  const onClickDark = () => {
    if (darkMode === "light") {
      isDarkMode("dark");
    } else {
      isDarkMode("light");
    }
  };

  const darkTheme = createTheme({
    palette: {
      mode: darkMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <div>
          <button className={darkMode} onClick={onClickDark}>{(darkMode === "light") ? "dark" : "light"}</button>
        </div>
        <Routes>

          {/* 메인 로그인페이지 */}
          <Route element={<RouteMain />}>
            <Route path="/" element={<LoginPage />}>
            </Route>
          </Route>

          {/* 모두 접근 가능 */}
          <Route element={<RouteAll />}>
            <Route path="/home/" element={<HomePage />}>
              <Route path="recommend-list" element={<PageContents title="추천 목록" />}></Route>
              <Route path="product-list" element={<PageContents title="상품 목록" />}></Route>
                  
              {/* 매니저, 관리자만 가능 */}
              <Route element={<RouteManagerAdmin />}>
                <Route path="product-manage" element={<PageContents title="상품 관리" />}></Route>
              </Route>

              {/* 관리자만 가능 */}
              <Route element={<RouteAdmin />}>
                <Route path="user-auth" element={<PageContents title="사용자 권한 관리" />}></Route>
                <Route path="admin-setting" element={<SettingPage />}></Route>
              </Route>

              {/* 노말만 가능 */}
              <Route element={<RouteNormal />}>
                <Route path="normal-setting" element={<SettingPage />}></Route>
              </Route>
              
              {/* 매니저만 가능 */}
              <Route element={<RouteManager />}>
                <Route path="manager-setting" element={<SettingPage />}></Route>
              </Route>
              
            </Route>
          </Route>



          {/* 없는 경로 접근 시 뜨는 페이지 */}
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App;
