import { cn } from '@/util'
import { ChangeEventHandler } from 'react'

interface RadioButtonProps {
  label: string
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function RadioButton({
  label,
  checked,
  onChange,
}: RadioButtonProps) {
  return (
    <label className="flex items-center cursor-pointer gap-10">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={cn(
          'w-18 h-18 rounded-full border-2 flex justify-center items-center border-mediumGray',
          checked && 'border-main',
        )}
      >
        {checked && <div className="w-8 h-8 rounded-full bg-main" />}
      </div>
      <span className={cn('ml-2 text-mediumGray', checked && 'text-black')}>
        {label}
      </span>
    </label>
  )
}
