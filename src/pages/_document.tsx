import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { siteConfig } from "../config/siteConfig";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fa" dir="rtl">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content={siteConfig.brand.description} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteConfig.brand.name} />
          <meta property="og:image" content="/api/og" />
          <meta
            property="og:description"
            content={siteConfig.brand.description}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
