import Image from 'next/image'

export default function RightArticle() {
  return (
    <article className="max-w-md rounded-lg shadow-lg hidden md:block">
      <div className="bg-[#E2F2FF] text-main text-lg font-semibold py-13 text-center">
        SC는 이렇게 보내드려요 !
      </div>
      <div className="bg-bgColor3 p-30 space-y-10">
        <Image
          src="/images/quoteImage.svg"
          alt="quote"
          width={400}
          height={400}
        />
      </div>
    </article>
  )
}
