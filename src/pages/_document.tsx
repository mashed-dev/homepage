import { Head, Html, Main, NextScript } from 'next/document';
import initialize from '@/initialize';
import { getCssText } from '@/stitches';

initialize();

const Document = () => (
  <Html>
    <Head>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
