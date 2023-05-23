//@ts-ignore
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Smartsupp Live Chat script --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.Userback = window.Userback || {};
              Userback.access_token = '34205|74630|feFBHSwBx7PTI5EUihPEBFcWu';
              (function(d) {
                  var s = d.createElement('script');s.async = true;
                  s.src = 'https://static.userback.io/widget/v1.js';
                  (d.head || d.body).appendChild(s);
              })(document);`,
            }}
          />
          <script>
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start'
            :new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PL8GSMG');
            `}
          </script>
        </Head>
        <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PL8GSMG"
          height="0" width="0" style={{display:"none;visibility:hidden"}}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}