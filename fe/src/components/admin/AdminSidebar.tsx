import { cn } from '@/util'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function AdminSidebar() {
  const router = useRouter()
  const [isQuotationOpen, setIsQuotationOpen] = useState(false)
  const [isContentOpen, setIsContentOpen] = useState(false)

  const renderLink = (name: string, path: string) => (
    <Link
      href={path}
      className={cn(
        'block before:px-20 py-10',
        router.pathname === path ? 'text-main font-bold' : 'text-[#9CA3AF]',
        path.startsWith('admin/quotations') && isQuotationOpen && 'pl-10',
        path.startsWith('admin/contents') && isContentOpen && 'pl-10',
      )}
    >
      {name}
    </Link>
  )

  return (
    <div className="bg-white h-screen w-200 shadow-sm">
      <nav className=" pt-32 text-[#9CA3AF]">
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
                {renderLink('견적서 관리', 'admin/quotations/manage')}
                {renderLink('견적서 목록 조회', 'admin/quotations')}
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
                {renderLink('콘텐츠 목록 조회', '/contents')}
                {renderLink('콘텐츠 추가', '/contents/add')}
              </ul>
            )}
          </li>

          <li>{renderLink('사이트 통계', '/statistics')}</li>
          <li>{renderLink('환경 설정', '/settings')}</li>
        </ul>
      </nav>
    </div>
  )
}
