import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  ;<meta
    httpEquiv="Content-Security-Policy"
    content="upgrade-insecure-requests"
  />
  return (
    <Html lang="ko">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <body className="bg-bgColor3">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
