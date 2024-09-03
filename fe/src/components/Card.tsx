import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Card({
  title,
  content,
  id,
}: {
  title: string
  content: string
  id: number
}) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/news/${id}`)
  }

  return (
    <div className="w-full max-w-sm rounded-xl shadow-sm bg-white hover-pointer hover:opacity-70 cursor-pointer">
      <button
        type="button"
        onClick={handleClick}
        className="relative w-full h-240 overflow-hidden rounded-t-xl"
      >
        <Image
          src="/images/temp.jpg"
          alt="card"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
      </button>
      <div className="m-4">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-base line-clamp-2">{content}</p>
      </div>
    </div>
  )
}
