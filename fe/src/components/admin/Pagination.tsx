import { cn } from '@/util'
import Image from 'next/image'

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
  return (
    <div className="flex text-[#9CA3AF] text-14">
      <ul className="flex flex-row">
        <li className={cn('relative', { invisible: currentPage === 1 })}>
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            className="text-center bg-transparent"
            disabled={currentPage === 1}
          >
            <Image src="/images/left.svg" alt="left" width={16} height={16} />
          </button>
        </li>
        <li className="mx-10 h-16 text-center flex items-center justify-center">
          <span>
            {currentPage} / {totalPages}
          </span>
        </li>
        <li
          className={cn('relative', { invisible: currentPage === totalPages })}
        >
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            className="text-center bg-transparent"
            disabled={currentPage === totalPages}
          >
            <Image src="/images/right.svg" alt="right" width={16} height={16} />
          </button>
        </li>
      </ul>
    </div>
  )
}
