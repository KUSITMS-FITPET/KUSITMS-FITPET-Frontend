// pages/_app.tsx
import '@/styles/globals.css'; // 글로벌 스타일 불러오기
import type { AppProps } from 'next/app'; // Next.js의 AppProps 타입 가져오기
import Header from '../pages/components/common/Header'; // 헤더 컴포넌트의 올바른 경로 수정
import Footer from '../pages/components/common/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> {/* 모든 페이지에 공통으로 포함되는 Header */}
      <Component {...pageProps} /> {/* 각 페이지의 컴포넌트 렌더링 */}
      <Footer />
    </>
  );
}

export default MyApp;
