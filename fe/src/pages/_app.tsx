import '@/styles/globals.css'; // Global styles import
import type { AppProps } from 'next/app'; // Importing Next.js AppProps type
import Header from '@/components/layout/Header'; // Corrected import path for Header
import Footer from '@/components/layout/Footer'; // Corrected import path for Footer

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> {/* Header component that will be common across all pages */}
      <Component {...pageProps} /> {/* Rendering the main content of the page */}
      <Footer /> {/* Footer component that will be common across all pages */}
    </>
  );
}

export default MyApp;
