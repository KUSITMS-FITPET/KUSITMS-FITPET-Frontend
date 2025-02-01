import Image from 'next/image'
import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="fixed inset-0 flex justify-center pt-120 z-50 bg-black bg-opacity-50">
      <div className="relative">
        <Image
          src="/images/quote-success.svg"
          alt="modal-bg"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 mt-100 flex flex-col items-center justify-center text-center p-4">
          {children}
        </div>
      </div>
    </div>
  )
}
