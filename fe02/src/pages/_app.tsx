import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Nav from '@/components/Nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id='app'>
      <Nav />
      <Component {...pageProps} />;
    </div>
  );
}
