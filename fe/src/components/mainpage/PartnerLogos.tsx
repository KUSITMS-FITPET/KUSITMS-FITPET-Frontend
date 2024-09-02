import React from 'react';
import Image from 'next/image';

const PartnerLogos: React.FC = () => {
  const partners = [
    { src: '/images/partner1.svg', alt: 'Partner 1', width: 100, height: 100, offsetTop: '40px' },
    { src: '/images/partner2.svg', alt: 'Partner 2', width: 100, height: 100, offsetTop: '50px' },
    { src: '/images/partner3.svg', alt: 'Partner 3', width: 100, height: 100, offsetTop: '25px' },
    { src: '/images/partner4.svg', alt: 'Partner 4', width: 100, height: 100, offsetTop: '50px' },
    { src: '/images/partner5.svg', alt: 'Partner 5', width: 100, height: 100, offsetTop: '30px' },
  ];

  return (
    <div className="slider mb-0 mt-0 font-pretendard">
      <div className="slider-track">
        {Array.from({ length: 6 }).map((_, repeatIndex) => (
          <React.Fragment key={repeatIndex}>
            {partners.map((partner, index) => (
              <div key={index + repeatIndex * partners.length} className="slide">
                <div style={{ marginTop: partner.offsetTop }}>
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <style jsx>{`
        .slider {
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 120px;  /* Adjust height */
          background: white;
          margin-top: 0; /* 상단 여백 제거 */
        }

        .slider-track {
          display: flex;
          width: calc(250px * ${partners.length} * 6); 
          animation: scroll 90s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${partners.length} * 3)); 
          }
        }

        .slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-width: 250px;
          height: 100%; 
          padding: 0 80px; 
        }

        @media (max-width: 1024px) {
          .slider-track {
            width: calc(200px * ${partners.length} * 6);
          }
          .slide {
            min-width: 200px;
            padding: 0 60px; 
          }
        }

        @media (max-width: 768px) {
          .slider-track {
            width: calc(180px * ${partners.length} * 6);
          }
          .slide {
            min-width: 180px;
            padding: 0 40px; 
          }
        }

        @media (max-width: 480px) {
          .slider-track {
            width: calc(150px * ${partners.length} * 6);
          }
          .slide {
            min-width: 150px;
            padding: 0 30px; 
          }
        }
      `}</style>
    </div>
  );
};

export default PartnerLogos;
