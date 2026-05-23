import Head from "next/head";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

/** Meta tag uses token only; DNS TXT uses `google-site-verification=<token>` */
function normalizeGscVerification(value) {
  if (!value || value === "your-google-site-verification-token") return null;
  return value.replace(/^google-site-verification=/i, "").trim();
}

const GSC_VERIFICATION = normalizeGscVerification(
  process.env.NEXT_PUBLIC_GSC_VERIFICATION,
);

const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_VERIFICATION;

/** GA4, Search Console verification, Facebook Pixel — enable via .env */
export default function AnalyticsScripts() {
  return (
    <>
      <Head>
        {GSC_VERIFICATION ? (
          <meta name="google-site-verification" content={GSC_VERIFICATION} />
        ) : null}

        {BING_VERIFICATION ? (
          <meta name="msvalidate.01" content={BING_VERIFICATION} />
        ) : null}
      </Head>

      {GA_ID && GA_ID !== "GA_MEASUREMENT_ID" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="lazyOnload"
          />
          <Script id="ga4-config" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      ) : null}

      {FB_PIXEL_ID && FB_PIXEL_ID !== "FB_PIXEL_ID" ? (
        <Script id="fb-pixel" strategy="lazyOnload">
          {`
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
          `}
        </Script>
      ) : null}
    </>
  );
}
