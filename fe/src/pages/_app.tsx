import Header from '@/components/layout/Header' // Corrected import path for Header
import Footer from '@/components/layout/Footer' // Corrected import path for Footer
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import QueryProvider from '@/lib/QueryProvider'

const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp
