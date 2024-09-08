import { cn } from '@/util'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function AdminSidebar() {
  const router = useRouter()
  const [isQuotationOpen, setIsQuotationOpen] = useState(false)
  const [isContentOpen, setIsContentOpen] = useState(false)

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const renderLink = (name: string, path: string) => (
    <button
      type="button"
      onClick={() => handleNavigation(path)}
      className={cn(
        'block before:px-20 py-10 text-left w-full',
        router.pathname === path ? 'text-main font-bold' : 'text-[#9CA3AF]',
        path.startsWith('admin/quotations') && isQuotationOpen && 'pl-10',
        path.startsWith('admin/contents') && isContentOpen && 'pl-10',
      )}
    >
      {name}
    </button>
  )

  return (
    <div className="bg-white h-screen w-200 shadow-sm">
      <nav className="pt-32 text-[#9CA3AF]">
        <ul className="space-y-20">
          <li>{renderLink('대시보드', '/dashboard')}</li>
          <li>
            <button
              type="button"
              className="w-full text-left flex justify-between items-center"
              onClick={() => setIsQuotationOpen(!isQuotationOpen)}
            >
              <p
                className={cn(
                  'pl-40 py-10 flex justify-between w-full pr-20',
                  isQuotationOpen && 'text-main',
                )}
              >
                견적서 관리
                <span>{isQuotationOpen ? '<' : '>'}</span>
              </p>
            </button>
            {isQuotationOpen && (
              <ul className="bg-bgColor3 w-full py-10">
                <li>{renderLink('견적서 목록 조회', '/admin/quotations')}</li>
                <li>{renderLink('견적서 관리', '/admin/quotations/manage')}</li>
              </ul>
            )}
          </li>

          <li>
            <button
              type="button"
              className="w-full text-left flex justify-between items-center"
              onClick={() => setIsContentOpen(!isContentOpen)}
            >
              <p
                className={cn(
                  'pl-40 py-10 flex justify-between w-full pr-20',
                  isContentOpen && 'text-main',
                )}
              >
                콘텐츠 관리
                <span>{isContentOpen ? '<' : '>'}</span>
              </p>
            </button>
            {isContentOpen && (
              <ul className="bg-bgColor3 w-full py-10">
                <li>{renderLink('콘텐츠 목록 조회', '/admin/contents')}</li>
                <li>{renderLink('콘텐츠 추가', '/admin/contents/add')}</li>
              </ul>
            )}
          </li>

          <li>{renderLink('url 관리', '/admin/url')}</li>
          <li>{renderLink('환경 설정', '/admin/settings')}</li>
        </ul>
      </nav>
    </div>
  )
}
