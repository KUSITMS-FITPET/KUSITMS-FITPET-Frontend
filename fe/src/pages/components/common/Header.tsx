import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
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
          <Link href="/" className="text-[#008cff] font-bold">홈</Link>
          <Link href="/compare" className="text-[#282828] font-medium">보험 비교</Link>
          <Link href="/tips" className="text-[#282828] font-medium">보험 팁</Link>
          <Link href="/reviews" className="text-[#282828] font-medium">고객 리뷰</Link>
          <Link href="/faq" className="text-[#282828] font-medium">FAQ</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
