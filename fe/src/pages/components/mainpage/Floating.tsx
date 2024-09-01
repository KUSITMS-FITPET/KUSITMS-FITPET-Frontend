import type { NextPage } from 'next';
import React from 'react';

const Floating: NextPage = () => {
  const handleCallClick = () => {
    const confirmCall = confirm('연결하시겠습니까?');
    if (confirmCall) {
      window.location.href = 'tel:01057461800';
    }
  };

  const handleChatClick = () => {
    window.location.href = 'https://pf.kakao.com/_cxdAfG/chat';
 // 카카오톡 플러스 친구 연결
  };

  return (
    <div className="fixed top-[32px] right-[8px] lg:top-[64px] lg:right-[16px] shadow-[0px_6px_20px_rgba(0,_0,_0,_0.2)] rounded-lg bg-white w-[72px] h-[164px] lg:w-[100px] lg:h-[260px] overflow-hidden text-center text-sm text-darkslategray font-pretendard z-50">
      {/* 전문가 전화 상담 */}
      <div onClick={handleCallClick} className="cursor-pointer flex flex-col items-center justify-center h-[50%] py-[6px] lg:py-[8px]">
        <div className="w-[38px] h-[38px] lg:w-[48px] lg:h-[48px] relative mb-[8px] lg:mb-[12px]">
          <img
            className="absolute inset-0 w-full h-full object-contain"
            alt="전문가 전화 상담"
            src="/images/call.svg" // 전문가 전화 상담 아이콘 경로
          />
        </div>
        <div className="text-gray-800 font-semibold">
          <p className="m-0 text-xs lg:text-sm">전문가</p>
          <p className="m-0 text-xs lg:text-sm">전화 상담</p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-full h-[1px] lg:h-[2px]">
        <img
          src="/images/vector.svg" // 구분선 이미지 경로
          alt="구분선"
          className="w-full h-full"
        />
      </div>

      {/* 톡문의 */}
      <div onClick={handleChatClick} className="cursor-pointer flex flex-col items-center justify-center h-[50%] py-[6px] lg:py-[8px]">
        <div className="w-[38px] h-[38px] lg:w-[48px] lg:h-[48px] relative mb-[8px] lg:mb-[12px]">
          <img
            className="absolute inset-0 w-full h-full object-contain"
            alt="톡문의"
            src="/images/kakao.svg" // 카카오톡 아이콘 경로
          />
        </div>
        <div className="text-gray-800 font-semibold text-xs lg:text-sm">톡문의</div>
      </div>
    </div>
  );
};

export default Floating;