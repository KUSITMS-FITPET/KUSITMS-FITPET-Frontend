import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import QueryProvider from '@/lib/QueryProvider';
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <div className={Pretendard.className}>
        <Header />
        <main className="min-h-screen">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </QueryProvider>
  );
}