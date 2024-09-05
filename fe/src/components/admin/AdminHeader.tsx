import Image from 'next/image'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import AdminSidebar from './AdminSidebar'

export default function AdminHeader({ children }: { children: ReactNode }) {
  const router = useRouter()
  if (router.pathname === '/admin') {
    return <>{children}</>
  }

  return (
    <>
      <header className="bg-main text-white">
        <div className="flex justify-between items-center mr-30">
          <div>
            <Image
              alt="logo"
              src="/images/admin-logo.svg"
              width={180}
              height={68}
            />
          </div>

          {/* TODO: 아이콘 추가 */}
          <nav className="">아이콘1</nav>
        </div>
      </header>
      <main className="flex flex-row w-full">
        <AdminSidebar />
        <div className="p-25 h-full w-full">{children}</div>
      </main>
    </>
  )
}
