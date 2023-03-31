import TagManager  from 'react-gtm-module'
import { Head, Html, Main, NextScript } from 'next/document'
import { useEffect } from 'react';

const tagManagerArgs = {
  gtmID: 'GTM-P6DK3L7',
}


export default function Document() {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [])
  return (
    <Html className="scroll-smooth bg-white antialiased" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
