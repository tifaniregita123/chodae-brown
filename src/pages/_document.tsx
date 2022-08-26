import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

import { extractCritical } from '@emotion/server'

/**
 * TODO REMOVE TS IGNORE DUE ITS PROHIBITED
 */
// @ts-ignore
export default class Documents extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage()
    const initialProps = await Document.getInitialProps(ctx)
    const { css, ids } = extractCritical(page.html)
    return {
      ...initialProps,
      styles: (
        <Fragment>
          {initialProps.styles}
          <style data-emotion={`css ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
        </Fragment>
      )
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
            *, body, p, span {
              font-family: 'louis', !important;
            }
            h1 {
              font-family: 'geraldine', sans-serif !important;
            }
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
          <script src="https://unpkg.com/react-copy-to-clipboard/build/react-copy-to-clipboard.js"></script>
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>AOS.init();</script>
        </body>
      </Html>
    )
  }
}
