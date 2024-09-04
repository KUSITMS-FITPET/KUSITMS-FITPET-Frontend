import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import QueryProvider from '@/lib/QueryProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { usePathname } from 'next/navigation'

const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith('/admin')

  return (
    <QueryProvider>
      <div className={Pretendard.className}>
        {!isAdminPage && <Header />}
        <Component {...pageProps} />
        {!isAdminPage && <Footer />}
      </div>
    </QueryProvider>
  )
}
