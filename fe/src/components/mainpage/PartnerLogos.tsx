import React from 'react'
import Image from 'next/image'

function PartnerLogo() {
  return (
    <div className="slider">
      <div className="slider-track">
        <Image
          src="/images/Partnerlogo.svg"
          alt="Partner Logo"
          width={1800}
          height={400}
          priority
        />
        <Image
          src="/images/Partnerlogo.svg"
          alt="Partner Logo"
          width={1800}
          height={400}
          priority
        />
      </div>
      <style jsx>{`
        .slider {
          overflow: hidden;
          position: relative;
          width: 100vw;
          height: 170px;
          background: white;
        }

        .slider-track {
          display: flex;
          width: calc(1800px * 2);
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-1800px);
          }
        }
      `}</style>
    </div>
  )
}

export default PartnerLogo
