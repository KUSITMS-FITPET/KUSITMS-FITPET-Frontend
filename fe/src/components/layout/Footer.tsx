import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const FooterSection: NextPage = () => {
  const router = useRouter();
  const isMainPage = router.pathname === '/';

  return (
    <div
      className={`${
        isMainPage ? 'bg-white' : 'bg-[#F4F7FA]'
      } w-full py-[40px] sm:py-[47px] px-4 sm:px-8 font-pretendard`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0">
        {/* 필수 안내사항 Section */}
        <div className="text-left sm:w-[60%] mb-[40px] sm:mb-0">
          <h3 className="text-lg sm:text-xl font-bold text-[#282828] mb-[24px] sm:mb-[28px]">[필수안내사항]</h3>
          <ul className="text-sm sm:text-base text-[#282828] list-none space-y-[6px] sm:space-y-[8px]">
            <li>※ 보험대리점 : 스마트커버 인슈어런스(주) | 등록번호 : 제2023120019호</li>
            <li>※ 본 광고는 광고심의기준을 준수하였으며, 유효기간은 심의일로부터 1년입니다.</li>
            <li className="text-[#d61f2d]">※ 보험계약자가 기존 보험계약을 해지하고 새로운 보험계약을 체결하는 과정에서 </li>
            <li className="text-[#d61f2d]">① 질병이력, 연령증가 등으로 가입이 거절되거나 보험료가 인상될 수 있습니다. </li>
            <li className="text-[#d61f2d]">② 가입 상품에 따라 새로운 면책기간 적용 및 보장 제한 등 기타 불이익이 발생할 수 있습니다.</li>
          </ul>
          <p className="text-xs sm:text-sm text-gray-500 mt-[28px] sm:mt-[32px]">
            준법심의필 제2024-07-0011호 (2024.07.26 ~ 2025.07.26)
          </p>
        </div>

        {/* 연락처 및 저작권 정보 Section */}
        <div className="text-left sm:w-[40%] space-y-[16px] sm:space-y-[20px] relative flex flex-col justify-between items-start">
          <div className="text-sm sm:text-base text-[#282828] flex justify-between items-center w-full">
            <p>Contact us</p>
            <button className="rounded-lg bg-black text-white text-xs sm:text-sm px-10 py-6">
              제휴 문의
            </button>
          </div>
          <div className="text-sm sm:text-base text-[#282828]">
            <p>| 010-5748-1800 (월~금 : 9am~6pm)</p>
            <p>| contact@smartcoverins.co.kr</p>
          </div>
          <div className="text-sm sm:text-base text-[#282828]">
            <p>스마트커버 인슈어런스(주) | 사업자등록번호 : 704-86-02268</p>
            <p>서울특별시 강남구 테헤란로 107길 6 B1 | 대표 : 고정욱</p>
          </div>
          <div className="text-xs sm:text-sm text-gray-500">
            <p>
              © smartcover ins All rights reserved.{' '}
              <a href="#" className="underline">
                이용약관
              </a>{' '}
              |{' '}
              <a href="#" className="underline">
                개인정보처리방침
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
