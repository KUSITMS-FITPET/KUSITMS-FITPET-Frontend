import NumberCircle from '@/components/NumberCircle'
import {
  ChangeEvent,
  Dispatch,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Input from '@/components/common/Input'
import { cn } from '@/util'
import { Down, Question } from '@/components/common/Icons'
import Image from 'next/image'
import Modal from '@/components/common/Modal'
import { useRouter } from 'next/navigation'
import { usePostQuotation } from '@/api/quote'
import { dogList } from '../../../../public/content/dogList'
import { catList } from '../../../../public/content/catList'
import ToggleButton from './ToggleButton'
import { privacyPolicy } from '../../../../public/content/privacyPolicy'

export default function Quote() {
  const { mutate } = usePostQuotation()

  const [filteredBreeds, setFilteredBreeds] = useState<string[]>([])
  const [showImage, setShowImage] = useState(false)
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [breed, setBreed] = useState('')
  const [agreement, setAgreement] = useState(false)
  const [ageError, setAgeError] = useState('')
  const [nameError, setNameError] = useState('')
  const [notes, setNotes] = useState('')
  const [phone2, setPhone2] = useState('')
  const [phone3, setPhone3] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [showModal, setShowModal] = useState(false)

  const breedList = petType === 'dog' ? dogList : catList
  const isSection1Complete = petType && name && age && breed
  const isCompleted =
    isSection1Complete &&
    phone2 &&
    phone3 &&
    agreement &&
    !ageError &&
    !nameError &&
    !phoneError

  const phone2Ref = useRef<HTMLInputElement>(null)
  const phone3Ref = useRef<HTMLInputElement>(null)

  const { push } = useRouter()

  useEffect(() => {
    if (breed) {
      const filtered = breedList.filter((b) =>
        b.toLowerCase().includes(breed.toLowerCase()),
      )
      setFilteredBreeds(filtered)
    } else {
      setFilteredBreeds([])
    }
  }, [breed])

  const validateName = (value: string) => {
    const regex = /^[가-힣]+$/
    if (!regex.test(value)) {
      setNameError('이름은 한글만 입력 가능합니다.')
    } else {
      setNameError('')
    }
  }

  const validatePhone = (value: string) => {
    if (phone3 && value.length !== 4) {
      setPhoneError('올바른 전화번호를 입력해주세요.')
    } else {
      setPhoneError('')
    }
  }

  const validateAge = (value: string) => {
    const numberRegex = /\d/
    const ageValue = parseInt(value, 10)

    if (!numberRegex.test(value)) {
      setAgeError('나이는 숫자를 포함하여 입력 가능합니다.')
    } else if (ageValue > 10) {
      setAgeError('현재 펫보험은 만 0-10세만 가능합니다.')
    } else {
      setAgeError('')
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setName(value)
    validateName(value)
  }

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setAge(value)
    validateAge(value)
  }

  const handlePhoneChange = (
    e: ChangeEvent<HTMLInputElement>,
    setPhone: Dispatch<React.SetStateAction<string>>,
    maxLength: number,
    nextInputRef?: RefObject<HTMLInputElement>,
  ) => {
    const { value } = e.target
    if (/^\d*$/.test(value) && value.length <= maxLength) {
      setPhone(value)
      if (value.length === maxLength && nextInputRef?.current) {
        nextInputRef.current.focus()
      }
    }
    validatePhone(value)
  }
  const handleSubmit = useCallback(() => {
    if (ageError || nameError || phoneError) {
      alert('에러')
      console.log(ageError, nameError)
    }
    mutate(
      {
        petName: name,
        petSpecies: petType,
        petAge: parseInt(age, 10),
        phoneNumber: `010${phone2}${phone3}`,
        moreInfo: notes,
        agreement: true,
      },
      {
        onSuccess: () => {
          setShowModal(true)
        },
        onError: () => {
          alert('잠시 후 다시 시도해주세요.')
        },
      },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="max-w-2xl mx-auto pl-10">
      {showModal && (
        <Modal>
          <div>
            <h1 className="text-2xl font-medium mb-22 leading-36">
              펫보험 비교 신청이 정상적으로 접수되었어요. <br />
              비교 견적서를 카카오톡으로 보내드릴게요.
            </h1>
            <p className="text-md mb-40 leading-24">
              견적서는 접수된 순으로 순차적으로 발송드립니다. <br />
              접수 후 발송가지 최대 1~3일 정도 소요됩니다.
            </p>
            <button
              type="button"
              onClick={() => push('/')}
              className="bg-main text-white font-bold w-full rounded-lg py-13"
            >
              네, 확인했어요
            </button>
          </div>
        </Modal>
      )}
      <div className="flex items-center mb-36 w-auto relative">
        <h1 className="text-3xl font-semibold mr-16">펫보험 견적서 입력</h1>
        <Question />
        <div
          className="relative"
          onMouseEnter={() => setShowImage(true)}
          onMouseLeave={() => setShowImage(false)}
        >
          <p className="text-main ml-8 cursor-pointer w-auto">
            견적서 예시 보기
          </p>
          {showImage && (
            <div className="absolute z-20 top-full mt-4 left-0 w-[40vw] h-auto">
              {/* TODO: 견적서 예시 이미지 추가 */}
              <Image
                src="/images/temp.jpg"
                alt="견적서예시"
                layout="responsive"
                width={500}
                height={746}
                objectFit="contain"
              />
            </div>
          )}
        </div>
      </div>

      <form>
        {/* Section 1 */}
        <div className="relative flex flex-row mb-53">
          <div className="flex flex-col items-center justify-center">
            <NumberCircle color="blue" number={1} />
            <div className="w-1 h-full my-12 bg-[#E2F2FF]" />
          </div>

          <div className="ml-20 w-full space-y-36">
            <h2 className="text-xl font-semibold">반려동물 정보</h2>
            <div className="flex gap-16">
              <ToggleButton
                label="강아지"
                isSelected={petType === 'dog'}
                onClick={() => setPetType('dog')}
              />
              <ToggleButton
                label="고양이"
                isSelected={petType === 'cat'}
                onClick={() => setPetType('cat')}
              />
            </div>
            <div className="flex gap-25 items-start">
              <div className="w-2/3">
                <label className="block mb-8 font-medium">
                  이름 <span className="text-red">*</span>
                </label>
                <Input
                  value={name}
                  onChange={handleNameChange}
                  className="w-full"
                  wrapperClassName={nameError && 'border-red'}
                  placeholder="이름을 입력해주세요"
                />
                {nameError && <p className="text-red mt-2">{nameError}</p>}
              </div>

              <div className="w-1/3">
                <label className="block mb-8 font-medium">
                  나이 <span className="text-red">*</span>
                </label>
                <Input
                  value={age}
                  onChange={handleAgeChange}
                  className="w-full"
                  wrapperClassName={ageError && 'border-red'}
                  placeholder="ex. 만 3세"
                />
                {ageError && <p className="text-red mt-2">{ageError}</p>}
              </div>
            </div>
            <div className="mb-4 relative">
              <div className="w-full">
                <label className="block mb-8 font-medium">
                  품종 <span className="text-red">*</span>
                </label>
                <Input
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  onFocus={() => setFilteredBreeds(breedList)}
                  className="w-full"
                  placeholder="품종을 입력하거나, 목록에서 선택해주세요"
                  endContent={<Down />}
                />
              </div>
              {filteredBreeds.length > 0 && (
                <ul className="absolute z-10 bg-white border border-[#333333] rounded-md w-full pl-10 max-h-400 overflow-y-auto">
                  {filteredBreeds.map((b) => (
                    <div
                      key={b}
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        setBreed(b)
                        setTimeout(() => setFilteredBreeds([]), 0)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setBreed(b)
                          setTimeout(() => setFilteredBreeds([]), 0)
                        }
                      }}
                      className="px-10 py-2 cursor-pointer hover:bg-[#E2F2FF]"
                    >
                      {b}
                    </div>
                  ))}
                </ul>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-8 font-medium">특이사항</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-auto rounded-8 border border-[#D1D5DB] py-12 px-20 focus:outline-none"
                placeholder="병력 여부 및 기타 문의사항을 적어주세요"
                rows={1}
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="relative flex flex-row mb-53">
          <div className="flex flex-col items-center justify-center">
            <NumberCircle
              color={isSection1Complete ? 'blue' : 'black'}
              number={2}
            />
            <div
              className={cn(
                'w-1 h-full bg-bgColor3 my-12',
                isSection1Complete && 'bg-[#E2F2FF]',
              )}
            />
          </div>

          <div className="ml-20 w-full">
            <h2 className="text-xl font-semibold mb-23">보호자 정보</h2>
            <div className="mb-8">
              <label className="block mb-8 font-medium">
                연락처 <span className="text-red">*</span>
              </label>
              <div className="flex gap-10 mb-8 items-center text-md text-[#9CA3AF]">
                <Input
                  type="text"
                  value="010"
                  disabled
                  className="w-77 text-textColor text-center"
                />
                -
                <Input
                  ref={phone2Ref}
                  type="text"
                  value={phone2}
                  onChange={(e) =>
                    handlePhoneChange(e, setPhone2, 4, phone3Ref)
                  }
                  className="w-120 text-center text-textColor"
                  wrapperClassName={phoneError && 'border-red'}
                  maxLength={4}
                />
                -
                <Input
                  ref={phone3Ref}
                  type="text"
                  value={phone3}
                  onChange={(e) => handlePhoneChange(e, setPhone3, 4)}
                  className="w-120 text-center text-textColor"
                  wrapperClassName={phoneError && 'border-red'}
                  maxLength={4}
                />
              </div>
              {phoneError && <p className="text-red mt-2">{phoneError}</p>}
            </div>
            <p className="text-main ml-3">
              작성해주신 연락처의 카카오톡으로 견적서를 보내드려요
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="relative flex flex-row items-start">
          <div className="flex flex-col items-center justify-center">
            <NumberCircle color={agreement ? 'blue' : 'black'} number={3} />
          </div>

          <div className="ml-20 w-full ">
            <h2 className="text-xl font-semibold mb-23">
              개인정보 수집 및 이용 동의
            </h2>
            <p className="bg-[#F7F8F9] mb-4 text-sm p-16 text-[#646F7C]">
              {privacyPolicy.content}
            </p>
            <div className="flex gap-10 mt-20 mb-68">
              <input
                type="checkbox"
                checked={agreement}
                onChange={() => setAgreement(!agreement)}
                className="w-20"
              />
              <label className="text-sm font-medium">
                개인정보 수집 및 이용에 동의합니다
              </label>
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              className={cn(
                'w-full h-52 text-lg font-semibold bg-main rounded-md text-white',
                !isCompleted && 'bg-white border border-main text-main',
              )}
              disabled={!isCompleted}
            >
              펫보험 비교 견적서 신청하기
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
