import Nav from '@/components/Nav';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <div id='app'>
          <Nav />
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
