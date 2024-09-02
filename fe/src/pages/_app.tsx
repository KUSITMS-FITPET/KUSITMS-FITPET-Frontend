import '@/styles/globals.css'; 
import type { AppProps } from 'next/app'; 
import Header from '@/components/layout/Header'; 
import Footer from '@/components/layout/Footer'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> 
      <Component {...pageProps} /> 
      <Footer />
    </>
  );
}

export default MyApp;
