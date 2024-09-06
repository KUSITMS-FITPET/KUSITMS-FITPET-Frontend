import { CalendarIcon } from '@radix-ui/react-icons'
import { cn } from '@/util'
import { format } from 'date-fns'
import { DateRange } from 'react-day-picker'
import { ko } from 'date-fns/locale'
import { Button } from '../Button'
import { Popover, PopoverContent, PopoverTrigger } from '../Popover'
import { Calendar } from '../Calendar'

interface DateRangePickerProps {
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
  className?: string
}

export function DateRangePicker({
  date,
  setDate,
  className,
}: DateRangePickerProps) {
  return (
    <div className={cn('grid gap-8', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className={cn(
              'w-270 h-30  px-10 justify-start font-normal shadow-none border border-[#D1D5DB] rounded-lg',
              !date && 'text-[#9CA3AF]',
            )}
          >
            <CalendarIcon className="mr-5 h-16 w-16" />
            {date?.from ? (
              <>
                {format(date.from, 'PPP', { locale: ko })} -{' '}
                {date.to
                  ? format(date.to, 'PPP', { locale: ko })
                  : '종료 날짜 선택'}
              </>
            ) : (
              <span />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto flex bg-white" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
