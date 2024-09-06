import { useState } from 'react'
import Image from 'next/image'
import CardContent from './CardContent'

export default function Card({
  title,
  content,
  image,
}: {
  title: string
  content: string
  id: number
  image: string
}) {
  const [showContent, setShowContent] = useState(false)

  const handleClick = () => {
    setShowContent(true)
  }

  return showContent ? (
    <CardContent
      title={title}
      content={content}
      image={image}
      onBack={() => setShowContent(false)}
    />
  ) : (
    <div className="w-full min-w-sm rounded-xl shadow-md bg-white hover-pointer hover:opacity-70 cursor-pointer">
      <button
        type="button"
        onClick={handleClick}
        className="relative w-full h-[20rem] overflow-hidden rounded-t-xl"
      >
        <Image
          src={image}
          alt="card"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
      </button>
      <div className="p-30">
        <h1 className="text-2xl font-semibold mb-20">{title}</h1>
        <p className="text-base line-clamp-2">{content}</p>
      </div>
    </div>
  )
}
