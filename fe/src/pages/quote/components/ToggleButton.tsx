import { cn } from '@/util'

interface ToggleButtonProps {
  label: string
  isSelected: boolean
  onClick: () => void
}

export default function ToggleButton({
  label,
  isSelected,
  onClick,
}: ToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-196 h-60 p-auto rounded-lg border-1 text-main font-semibold transition-all duration-100 bg-white border-main',
        isSelected && 'bg-[#E2F2FF] border-none',
      )}
    >
      {label}
    </button>
  )
}
