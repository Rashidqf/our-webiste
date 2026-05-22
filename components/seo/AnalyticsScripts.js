import Head from 'next/head';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

/** GA4, Search Console verification, Facebook Pixel — enable via .env */
export default function AnalyticsScripts() {
  return (
    <Head>
      {/* SEO: Google Search Console verification */}
      {GSC_VERIFICATION && GSC_VERIFICATION !== 'your-google-site-verification-token' ? (
        <meta name="google-site-verification" content={GSC_VERIFICATION} />
      ) : null}

      {/* SEO: Google Analytics 4 */}
      {GA_ID && GA_ID !== 'GA_MEASUREMENT_ID' ? (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `,
            }}
          />
        </>
      ) : (
        <script
          id="ga4-placeholder"
          dangerouslySetInnerHTML={{
            __html: `/* SEO: Set NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX to enable GA4 */`,
          }}
        />
      )}

      {/* SEO: Facebook Pixel (optional) */}
      {FB_PIXEL_ID && FB_PIXEL_ID !== 'FB_PIXEL_ID' ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      ) : (
        <script
          id="fb-pixel-placeholder"
          dangerouslySetInnerHTML={{
            __html: `/* SEO: Set NEXT_PUBLIC_FB_PIXEL_ID to enable Facebook Pixel */`,
          }}
        />
      )}
    </Head>
  );
}
