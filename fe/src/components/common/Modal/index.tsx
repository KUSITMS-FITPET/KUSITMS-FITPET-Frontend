import Image from 'next/image'
import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative w-[530px] h-[500px]">
        <Image src="/images/modal.svg" alt="modal-bg" layout="fill" />
        <div className="absolute inset-0 top-180 flex flex-col items-center justify-center text-center p-4">
          {children}
        </div>
      </div>
    </div>
  )
}
