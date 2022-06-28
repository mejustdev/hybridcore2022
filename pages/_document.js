import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className={'antialiased tracking-tight text-gray-200 bg-gray-900 font-inter'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
