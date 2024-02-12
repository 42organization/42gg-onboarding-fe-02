import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecoilRoot } from 'recoil';
import App from './App.js';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const { worker } = await import('./mocks/node.js');
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  );
});
