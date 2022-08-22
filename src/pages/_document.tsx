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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"></link>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            *, body {
              font-family: 'Mulish', sans-serif !important;
            }
            h1 {
              font-family: 'Dancing Script', cursive !important;
            }
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>AOS.init();</script>
        </body>
      </Html>
    )
  }
}
