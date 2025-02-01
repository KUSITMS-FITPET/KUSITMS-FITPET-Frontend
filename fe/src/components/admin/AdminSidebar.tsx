import { cn } from '@/util'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function AdminSidebar() {
  const router = useRouter()
  const [isQuotationOpen, setIsQuotationOpen] = useState(false)
  const [isContentOpen, setIsContentOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const renderLink = (name: string, path: string) => (
    <li>
      <button
        type="button"
        onClick={() => handleNavigation(path)}
        className={cn(
          'block px-20 py-10 text-left w-full',
          router.pathname === path ? 'text-main font-bold' : 'text-[#9CA3AF]'
        )}
      >
        {name}
      </button>
    </li>
  )

  return (
    <div className="bg-white h-screen w-200 shadow-sm">
      <nav className="pt-32 text-[#9CA3AF]">
        <ul className="space-y-20">
          {renderLink('대시보드', '/dashboard')}
          
          {/* 견적서 관리 */}
          <li>
            <button
              type="button"
              className="w-full text-left flex justify-between items-center"
              onClick={() => setIsQuotationOpen(!isQuotationOpen)}
            >
              <p className={cn('pl-40 py-10 flex justify-between w-full pr-20', isQuotationOpen && 'text-main')}>
                견적서 관리
                <span>{isQuotationOpen ? '▼' : '▶'}</span>
              </p>
            </button>
            {isQuotationOpen && (
              <ul className="bg-bgColor3 w-full py-10 pl-10">
                {renderLink('견적서 목록 조회', '/admin/quotations')}
                {renderLink('견적서 관리', '/admin/quotations/manage')}
              </ul>
            )}
          </li>

          {/* 콘텐츠 관리 */}
          <li>
            <button
              type="button"
              className="w-full text-left flex justify-between items-center"
              onClick={() => setIsContentOpen(!isContentOpen)}
            >
              <p className={cn('pl-40 py-10 flex justify-between w-full pr-20', isContentOpen && 'text-main')}>
                콘텐츠 관리
                <span>{isContentOpen ? '▼' : '▶'}</span>
              </p>
            </button>
            {isContentOpen && (
              <ul className="bg-bgColor3 w-full py-10 pl-10">
                {renderLink('콘텐츠 목록 조회', '/admin/contents')}
                {renderLink('콘텐츠 추가', '/admin/contents/add')}
              </ul>
            )}
          </li>

          {/* URL 관리 */}
          {renderLink('url 관리', '/admin/url')}

          {/* 환경 설정 */}
          <li>
            <button
              type="button"
              className="w-full text-left flex justify-between items-center"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            >
              <p className={cn('pl-40 py-10 flex justify-between w-full pr-20', isSettingsOpen && 'text-main')}>
                환경 설정
                <span>{isSettingsOpen ? '▼' : '▶'}</span>
              </p>
            </button>
            {isSettingsOpen && (
              <ul className="bg-bgColor3 w-full py-10 pl-10">
                {renderLink('계정 설정', '/settings/account')}
                {renderLink('관리자 목록 조회', '/admin/setting')}
              </ul>
            )}
          </li>

          {/* 사이트 통계 */}
          {renderLink('사이트 통계', '/statistics')}
        </ul>
      </nav>
    </div>
  )
}
