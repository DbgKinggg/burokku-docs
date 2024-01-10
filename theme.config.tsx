import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: <Image
    src="/icon-full-white.svg"
    alt={'Burokku logo'}
    width={126}
    height={30}
  />,
  docsRepositoryBase: 'https://github.com/DbgKinggg/burokku-docs',
  footer: {
    text: 'Burokku Documentation',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="title" content="Burokku" />
      <meta property="description" content="The all-in-one Web3 dashboard." />
      <meta property="og:title" content="Burokku" />
      <meta property="og:description" content="The all-in-one Web3 dashboard." />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Burokku'
    }
  }
}

export default config
