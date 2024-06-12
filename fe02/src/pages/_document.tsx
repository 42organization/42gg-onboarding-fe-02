import { Html, Head, Main, NextScript } from 'next/document';
import Nav from '../components/Nav';

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
