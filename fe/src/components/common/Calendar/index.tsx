/* eslint-disable react/no-unstable-nested-components */
import { DayPicker } from 'react-day-picker'
import { cn } from '@/util'
import { ko } from 'date-fns/locale'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      locale={ko}
      className={cn('', className)}
      classNames={{
        months: 'flex sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4 flex flex-col items-center',
        caption: 'flex items-center relative',
        caption_label: 'text-lg font-medium text-center flex items-center',
        nav: 'flex items-center absolute w-310 justify-between',
        nav_button: cn('bg-transparent hover:opacity-100'),
        table: 'w-full border-collapse space-y-2 text-center',
        head_row: '',
        head_cell: 'text-muted-foreground rounded-md font-normal',
        row: 'flex',
        cell: cn(
          'relative text-center text-sm h-5 w-5 p-2 focus-within:relative focus-within:z-20',
          props.mode === 'range' ? ' [&.rdp_selected]:text-white' : '',
          '[&:has([rdp-selected])]:!bg-[#222222] [&:has([aria-selected])]:text-white',
        ),
        day: cn(
          'h-5 w-5 p-0 font-normal',
          '[&:has([aria-selected])]: opacity-100',
        ),
        day_selected:
          '!bg-[#222222] text-white hover:bg-[#444444] focus:bg-[#222222]',
        day_today: 'font-bold text-[#222222] border border-gray-400',
        day_outside: 'opacity-50',
        day_disabled: 'text-white opacity-50',
        ...classNames,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
