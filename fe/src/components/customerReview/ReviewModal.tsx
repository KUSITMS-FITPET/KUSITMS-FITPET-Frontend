import React, { ReactNode } from 'react'
import Image from 'next/image'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

function ReviewModal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#161c24] bg-opacity-80">
      <div className="relative w-[730px] h-[700px]">
        {/* Background Image */}
        <Image src="/images/review _popup.svg" alt="modal-bg" layout="fill" />

        {/* Content Area (Shifted More to the Right and Down) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
          style={{ paddingLeft: '100px', paddingTop: '150px' }}
        >
          {children}
        </div>

        {/* Button (Shifted Further Down) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute bottom-2 left-1/2 transform translate-x-[50%] bg-blue-500 text-white py-2 px-4 rounded-lg"
        ></button>
      </div>
    </div>
  )
}

export default ReviewModal
