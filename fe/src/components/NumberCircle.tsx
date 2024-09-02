import { cn } from '@/util'

interface NumberCircleProps {
  number: number
  color?: 'blue' | 'black'
}

export default function NumberCircle({
  number,
  color = 'black',
}: NumberCircleProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-30 rounded-full bg-bgColor3 text-textColor',
        color === 'blue' && 'bg-[#E2F2FF] text-main',
      )}
    >
      {number}
    </div>
  )
}
