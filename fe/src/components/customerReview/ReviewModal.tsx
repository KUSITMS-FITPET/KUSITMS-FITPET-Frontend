import React, { ReactNode } from 'react'
import Image from 'next/image'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

function ReviewModal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#161c24] bg-opacity-80">
      <div className="relative w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]">
        {' '}
        {/* 반응형 크기 조정 */}
        {/* Background Image */}
        <Image
          src="/images/review_popup.svg"
          alt="modal-bg"
          layout="intrinsic"
          width={830}
          height={700}
        />
        {/* Content Area */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          style={{
            paddingLeft: '0px',
            paddingTop: '200px',
            paddingBottom: '0px',
          }} // 패딩 크기 줄임
        >
          {children}
        </div>
        {/* Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute bottom-10 lg:bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full px-1 lg:px-2 h-4 w-4 lg:h-6 lg:w-6" // 반응형 크기 조정, 가로 길이 더 작게
        />
      </div>
    </div>
  )
}

export default ReviewModal
