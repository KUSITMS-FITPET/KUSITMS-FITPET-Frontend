import { cn } from '@/util'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const [pageRange, setPageRange] = useState<number[]>([])

  useEffect(() => {
    let start = currentPage - 1
    let end = currentPage + 1

    if (currentPage === 1) {
      start = 1
      end = Math.min(3, totalPages)
    }

    if (currentPage === totalPages) {
      start = Math.max(1, totalPages - 2)
      end = totalPages
    }

    setPageRange(Array.from({ length: end - start + 1 }, (_, i) => start + i))
  }, [currentPage, totalPages])

  return (
    <div className="flex justify-center mt-25 text-[#3e3e3e] text-10">
      <ul className="flex flex-row">
        <li className={cn('relative', { invisible: currentPage === 1 })}>
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            className="text-center bg-transparent"
            disabled={currentPage === 1}
          >
            <Image src="/images/left.svg" alt="left" width={25} height={25} />
          </button>
        </li>
        {pageRange.map((page) => (
          <li key={page} className="mx-10 w-24 h-24 text-center text-15">
            <button
              type="button"
              onClick={() => onPageChange(page)}
              className={cn(
                'w-full h-full text-black flex items-center justify-center',
                page === currentPage &&
                  'text-white font-bold bg-black rounded-full',
              )}
            >
              {page}
            </button>
          </li>
        ))}
        <li
          className={cn('relative', { invisible: currentPage === totalPages })}
        >
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            className="text-center bg-transparent"
            disabled={currentPage === totalPages}
          >
            <Image src="/images/right.svg" alt="right" width={25} height={25} />
          </button>
        </li>
      </ul>
    </div>
  )
}
