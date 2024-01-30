import React from 'react';
import { createRoot } from 'react-dom/client'; // 변경된 부분
import { RecoilRoot } from 'recoil';
import App from './App';

// createRoot 함수를 사용하여 렌더링합니다.
const root = createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
