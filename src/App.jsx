import { Router } from './Router';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

function App() {
  return <Router />;
}

export default App;
