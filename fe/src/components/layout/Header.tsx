import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  const navLinks = [
    { href: '/', label: '홈' },
    { href: '/compare', label: '보험 비교' },
    { href: '/news', label: '보험 팁' },
    { href: '/customerReview', label: '고객 리뷰' },  
    { href: '/faq', label: 'FAQ' },
  ];

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
      
        <div className="flex flex-row items-center justify-end gap-6 sm:gap-10 lg:gap-54 text-base sm:text-lg lg:text-xl text-text-color">
          {navLinks.map(({ href, label }) => (
            router.pathname === href ? (
              <span key={href} className="text-[#008cff] font-bold">
                {label}
              </span>
            ) : (
              <Link key={href} href={href}>
                <span className="text-[#282828] font-medium">
                  {label}
                </span>
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
