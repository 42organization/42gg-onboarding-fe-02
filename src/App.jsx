import { RecoilRoot } from 'recoil';
import { Router } from './Router';
import { worker } from './mocks/browser';
import { Toaster } from 'react-hot-toast';

if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

function App() {
  return (
    <RecoilRoot>
      <Toaster />
      <Router />
    </RecoilRoot>
  );
}

export default App;
