import { Input, PasswordHidden } from '@/components'
import { usePostLogin } from '@/pages/api/admin/api'
import Image from 'next/image'
import { useCallback, useState } from 'react'

export default function Login() {
  const [adminId, setAdminId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isPassword, setIsPassword] = useState<boolean>(true)

  const { mutate } = usePostLogin({ adminId, adminPw: password })

  const handleLogin = useCallback(() => {
    mutate()
  }, [mutate])

  return (
    <div className="flex flex-col gap-45 items-center justify-center h-screen pb-50">
      <Image src="/images/logoImage.svg" height={66} width={66} alt="logo" />
      <article className="bg-white shadow-lg lg:w-440 max-h-2xl p-40 space-y-32 flex flex-col items-center justify-between ">
        <p className="text-lg font-semibold">로그인을 진행해주세요.</p>
        <div className="flex flex-col gap-20 w-full">
          <Input
            placeholder="아이디를 입력해주세요."
            wrapperClassName="w-full"
            onValueChange={setAdminId}
          />
          <Input
            placeholder="비밀번호를 입력해주세요."
            wrapperClassName="w-full"
            className="w-full"
            type={isPassword ? 'password' : 'text'}
            onValueChange={setPassword}
            endContent={
              <PasswordHidden
                className="cursor-pointer"
                onClick={() => setIsPassword((prev) => !prev)}
              />
            }
          />
        </div>

        <button
          type="button"
          className="bg-main w-full rounded-md text-white py-14"
          onClick={handleLogin}
        >
          로그인
        </button>
      </article>
    </div>
  )
}
