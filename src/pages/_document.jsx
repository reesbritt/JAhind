import TagManager  from 'react-gtm-module'
import { Head, Html, Main, NextScript } from 'next/document'
import { useEffect } from 'react';
import Script from 'next/script';

const tagManagerArgs = {
  gtmID: 'GTM-P6DK3L7',
}
const metaPixelId = '222932703738150';


export default function Document() {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageview',
        pagePath: 'jahind',
        pageTitle: 'jahind',
      }
    })
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(metaPixelId);
        ReactPixel.pageView();
      });
  }, [])
  return (
    <Html className="scroll-smooth bg-white antialiased" lang="en">
      <Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-P6DK3L7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-P6DK3L7');
        `}
      </Script>
        <Script  strategy='afterInteractive' id='meta-pixel' dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
            `}}
        />
        <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=222932703738150&ev=PageView&noscript=1"
        />`}}/>

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
      <noscript dangerouslySetInnerHTML={{ __html: <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6DK3L7"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>}}/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
