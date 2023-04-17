import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/App.scss';
import MainPage from './page/MainPage';
import { NormalLoginPage, ManagerLoginPage, AdminLoginPage } from './page/LoginPage';
import NormalPage from './page/normal/NormalPage';
import ManagerPage from './page/manager/ManagerPage';
import AdminPage from './page/admin/AdminPage';
import { RouteMain, RouteNormal, RouteManager, RouteAdmin } from './component/utils/AuthRoute';
import { RecoilRoot } from 'recoil';
import NotFound from './page/NotFound';
import Content from './component/Content';
import SettingPage from './page/SettingPage';

function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <Routes>

          {/* 메인, 로그인페이지 */}
          <Route element={<RouteMain />}>
            <Route path="/" element={<MainPage />}>
              <Route path="/normal-login" element={<NormalLoginPage/>}/>
              <Route path="/manager-login" element={
                <ManagerLoginPage/>}/>
              <Route path="/admin-login" element={<AdminLoginPage/>}/>
            </Route>
          </Route>

          {/* 노말페이지 */}
          <Route element={<RouteNormal />}>
            <Route path="/normal" element={<NormalPage/>}>
              <Route path="/normal/recommend-list" element={<Content title="추천 목록" sub="빈 컨텐츠"/>} />
              <Route path="/normal/product-list" element={<Content title="상품 목록" sub="빈 컨텐츠"/>} />
              <Route path="/normal/setting" element={<SettingPage/>} />
            </Route>
          </Route>

          {/* 매니저페이지 */}
          <Route element={<RouteManager/>}>
            <Route path="/manager" element={<ManagerPage/>}>
              <Route path="/manager/user-list" element={<Content title="사용자 목록" sub="빈 컨텐츠"/>} />
              <Route path="/manager/product-manage" element={<Content title="상품 관리" sub="빈 컨텐츠"/>} />
              <Route path="/manager/statistics" element={<Content title="통계" sub="빈 컨텐츠"/>} />
              <Route path="/manager/setting" element={<SettingPage/>}/>
            </Route>
          </Route>

          {/* 관리자페이지 */}
          <Route element={<RouteAdmin />}>
            <Route path="/admin" element={<AdminPage/>}>
              <Route path="/admin/user-list" element={<Content title="사용자 목록" sub="빈 컨텐츠"/>}  />
              <Route path="/admin/design-mode" element={<Content title="디자인 모드" sub="빈 컨텐츠"/>}  />
              <Route path="/admin/user-auth" element={<Content title="사용자 관리" sub="빈 컨텐츠"/>}  />
              <Route path="/admin/setting" element={<SettingPage />} />
            </Route>
          </Route>

          {/* 없는 경로 접근 시 뜨는 페이지 */}
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </RecoilRoot>
    </div>
  )
}

export default App;
