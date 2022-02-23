import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="og:image" content="/images/meta.png" />
          <title>Eduardo Flores</title>
        </Head>
        <body>
          <a title="Real Time Web Analytics" href="http://clicky.com/101355158">
            <img
              alt="Clicky"
              src="//static.getclicky.com/media/links/badge.gif"
              border="0"
            />
          </a>
          <script async src="//static.getclicky.com/101355158.js"></script>
          <noscript>
            <p>
              <img
                alt="Clicky"
                width="1"
                height="1"
                src="//in.getclicky.com/101355158ns.gif"
              />
            </p>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}