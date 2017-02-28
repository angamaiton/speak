import React from 'react'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div id="root">
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="main">
      { children }
    </div>

  </div>
)