import { useState } from 'react'
import Image from 'next/image'
import { NewAdmin } from '@/api/admin/adminlist'

interface AdminModalProps {
  onSubmit: (formData: NewAdmin) => Promise<boolean>
  onClose: () => void
}

// 명시적으로 함수형 컴포넌트를 함수 선언으로 변경
function AdminModal({ onSubmit, onClose }: AdminModalProps) {
  const [formData, setFormData] = useState<NewAdmin>({
    adminId: '',
    adminPw: '',
    name: '',
    roleContents: false,
    roleEstimates: false,
    roleSites: false,
    roleMaster: false,
    createdAt: new Date().toISOString(),
  })

  const [errors, setErrors] = useState({
    name: '',
    adminId: '',
    adminPw: '',
  })

  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: '',
      adminId: '',
      adminPw: '',
    }

    // 이름 유효성 검사
    if (!formData.name) {
      newErrors.name = '이름을 입력해주세요.'
      valid = false
    } else if (!/^[a-zA-Z가-힣]{1,10}$/.test(formData.name)) {
      newErrors.name = '이름은 10자 이내의 한글/영문 조합이어야 합니다.'
      valid = false
    }

    // 아이디 유효성 검사
    if (!formData.adminId) {
      newErrors.adminId = '아이디를 입력해주세요.'
      valid = false
    } else if (!/^[a-zA-Z0-9]{8,10}$/.test(formData.adminId)) {
      newErrors.adminId =
        '아이디는 8자 이상 10자 이내의 영문/숫자 조합만 가능합니다.'
      valid = false
    }

    // 비밀번호 유효성 검사
    if (!formData.adminPw) {
      newErrors.adminPw = '비밀번호를 입력해주세요.'
      valid = false
    } else if (!/^[a-zA-Z0-9!@#$%^&*]{8,10}$/.test(formData.adminPw)) {
      newErrors.adminPw =
        '비밀번호는 8자 이상 10자 이내의 영문/숫자/기호 조합만 가능합니다.'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    const isSuccess = await onSubmit(formData)
    if (isSuccess) {
      alert('관리자가 성공적으로 등록되었습니다.')
    } else {
      alert('관리자 등록에 실패했습니다.')
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-[#161c24] bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[909px] h-[543px] bg-white rounded-lg relative">
        {/* 모달 닫기 버튼 */}
        <button
          type="button"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <Image src="/images/close.svg" alt="Close" width={24} height={24} />
        </button>

        {/* 모달 헤더 */}
        <div className="text-center text-[#282828] text-xl font-bold mt-20">
          새로운 관리자 등록
        </div>

        {/* 프로필 이미지 */}
        <div className="absolute left-[116px] top-[142px]">
          <Image
            src="/images/admin.svg"
            alt="관리자 프로필 이미지"
            width={180}
            height={180}
            className="rounded-full"
          />
        </div>

        {/* 관리자명 입력 */}
        <div className="absolute left-[78px] top-[346px]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="관리자명을 입력하세요"
            className={`w-[255px] h-46 px-5 py-3 bg-white border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black placeholder-gray-400`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* 아이디 */}
        <div className="absolute left-[428px] top-[124px]">
          <div className="text-[#282828] text-base font-bold">아이디</div>
          <div className="text-gray-400 text-sm">
            아이디는 8자 이상 10자 이내의 영문/숫자 조합입니다.
          </div>
          <input
            type="text"
            name="adminId"
            value={formData.adminId}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
            className={`w-[364px] h-46 px-5 py-3 bg-white border ${errors.adminId ? 'border-red-500' : 'border-gray-300'} rounded-lg mt-2 text-black placeholder-gray-400`}
          />
          {errors.adminId && (
            <p className="text-red-500 text-sm">{errors.adminId}</p>
          )}
        </div>

        {/* 비밀번호 */}
        <div className="absolute left-[428px] top-[254px]">
          <div className="text-[#282828] text-base font-bold">비밀번호</div>
          <div className="text-gray-400 text-sm">
            비밀번호는 8자 이상 10자 이내의 영문/숫자/기호 조합입니다.
          </div>
          <input
            type="password"
            name="adminPw"
            value={formData.adminPw}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
            className={`w-[364px] h-46 px-5 py-3 bg-white border ${errors.adminPw ? 'border-red-500' : 'border-gray-300'} rounded-lg mt-2 text-black placeholder-gray-400`}
          />
          {errors.adminPw && (
            <p className="text-red-500 text-sm">{errors.adminPw}</p>
          )}
        </div>

        {/* 권한 설정 */}
        <div className="absolute left-[428px] top-[385px]">
          <div className="text-[#282828] text-base font-bold">권한 설정</div>
          <div className="flex space-x-8 mt-4">
            {[
              { key: 'roleEstimates', label: '견적서 관리' },
              { key: 'roleContents', label: '콘텐츠 관리' },
              { key: 'roleSites', label: '사이트 통계' },
              { key: 'roleMaster', label: '마스터 계정' },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name={key}
                  checked={!!formData[key as keyof NewAdmin]}
                  onChange={handleChange}
                  className="hidden"
                />
                <div
                  className={`w-12 h-12 border border-gray-300 rounded-sm flex justify-center items-center cursor-pointer ${
                    formData[key as keyof NewAdmin] ? 'bg-main' : 'bg-white'
                  }`}
                >
                  {formData[key as keyof NewAdmin] && (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span className="ml-2 text-[#282828] text-base">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 등록하기 버튼 */}
        <div className="absolute w-full h-[63px] bottom-0 bg-main flex justify-center items-center cursor-pointer">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full h-full text-white text-xl font-bold"
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminModal
