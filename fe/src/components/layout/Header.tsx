import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header: FC = function Header() {
  const router = useRouter()

  const navLinks = [
    { href: '/', label: '홈' },
    { href: '/quote', label: '펫보험 비교' },
    { href: '/news', label: '펫보험 팁' },
    { href: '/customerReview', label: '고객 리뷰' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <nav className="w-full h-16 sm:h-20 lg:h-78 bg-white flex items-center shadow-md font-pretendard">
      <div className="w-full flex justify-between items-center mx-auto">
        {/* 로고 */}
        <div className="flex-shrink-0 ml-4 lg:ml-35">
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

        {/* 네비게이션 */}
        <div className="flex flex-row items-center gap-6 sm:gap-10 lg:gap-70 text-base sm:text-lg lg:text-xl text-text-color mr-6 lg:mr-55">
          {' '}
          {/* 네비게이션 오른쪽 간격 추가 */}
          {navLinks.map(({ href, label }) =>
            router.pathname === href ? (
              <span key={href} className="text-[#008cff] font-bold">
                {label}
              </span>
            ) : (
              <Link key={href} href={href}>
                <span className="text-[#282828] font-medium">{label}</span>
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
