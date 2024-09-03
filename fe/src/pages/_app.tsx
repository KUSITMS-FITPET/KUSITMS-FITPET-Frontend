import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import QueryProvider from '@/lib/QueryProvider'
import Header from '@/components/layout/Header'
import { Footer } from '@/components/layout/Index'

const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <div className={Pretendard.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </QueryProvider>
  )
}
