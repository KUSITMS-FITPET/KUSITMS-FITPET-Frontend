import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="w-full h-16 sm:h-20 lg:h-78 bg-white flex items-center px-4 sm:px-8 shadow-md font-pretendard">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex-shrink-0"> 
          <Link href="/" aria-label="Homepage">
            <Image 
              src="/images/logo.svg"  
              alt="Logo"
              width={200}  
              height={28}  
              className="object-contain"
              priority
            />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-row items-center justify-end gap-6 sm:gap-10 lg:gap-54 text-base sm:text-lg lg:text-xl text-text-color">
<<<<<<< HEAD
          <Link href="/" className={router.pathname === "/" ? "text-[#008cff] font-bold" : "text-[#282828] font-medium"}>홈</Link>
          <Link href="/compare" className={router.pathname === "/compare" ? "text-[#008cff] font-bold" : "text-[#282828] font-medium"}>보험 비교</Link>
          <Link href="/tips" className={router.pathname === "/tips" ? "text-[#008cff] font-bold" : "text-[#282828] font-medium"}>보험 팁</Link>
          <Link href="/reviews" className={router.pathname === "/reviews" ? "text-[#008cff] font-bold" : "text-[#282828] font-medium"}>고객 리뷰</Link>
          <Link href="/faq" className={router.pathname === "/faq" ? "text-[#008cff] font-bold" : "text-[#282828] font-medium"}>FAQ</Link>
=======
          <Link href="/" className="text-[#008cff] font-bold">홈</Link>
          <Link href="/compare" className="text-[#282828] font-medium">보험 비교</Link>
          <Link href="/news" className="text-[#282828] font-medium">보험 팁</Link>
          <Link href="/reviews" className="text-[#282828] font-medium">고객 리뷰</Link>
          <Link href="/faq" className="text-[#282828] font-medium">FAQ</Link>
>>>>>>> c65ad77566717b65d3b253f66a9fef10964669a5
        </div>
      </div>
    </nav>
  );
};

export default Header;
