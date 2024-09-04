import React, { ReactNode } from 'react'
import Image from 'next/image'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

function ReviewModal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#161c24] bg-opacity-80">
      <div className="relative w-[530px] h-[500px]">
        <Image src="/images/modal.svg" alt="modal-bg" layout="fill" />
        <div className="absolute inset-0 top-180 flex flex-col items-center justify-center text-center p-4">
          {children}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute bottom-8 bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          네, 확인했어요
        </button>
      </div>
    </div>
  )
}

export default ReviewModal
