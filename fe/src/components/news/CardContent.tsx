import Header from '@/components/layout/Header'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CardContent({
  title,
  content,
  image,
  onBack,
}: {
  title: string
  content: string
  image: string
  onBack: () => void
}) {
  const router = useRouter()
  useEffect(() => {
    const handlePopState = () => {
      onBack()
    }
    window.history.pushState(null, '', window.location.href)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [onBack, router])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
      <div className="relative w-screen h-screen bg-bgColor3 overflow-auto">
        <Header />
        <div className="flex flex-col gap-57 md:flex-row items-start justify-center max-w-6xl mx-auto py-100 h-auto">
          <div className="w-full mt-10 lg:w-1/2 flex justify-center">
            <Image
              src={image}
              alt="news"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>

          <section className="w-full gap-40 lg:w-1/3 flex flex-col justify-center">
            <h1 className="text-3xl leading-50 font-semibold">{title}</h1>
            <p className="text-base min-h-350 lg:text-lg leading-relaxed md:max-h-[50vh] md:overflow-y-scroll">
              {content}
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onBack}
                className="w-148 h-50 px-8 text-lg py-4 bg-main text-white rounded-lg hover:opacity-70"
              >
                목록으로
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
