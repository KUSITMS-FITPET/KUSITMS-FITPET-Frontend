'use client'

import { InputHTMLAttributes, ChangeEvent, useCallback } from 'react'
import { cn } from '@/util'
import { useDOMRef } from '@/hooks'
import { ReactRef } from '@/type/react'

export interface UseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: ReactRef<HTMLInputElement>
  wrapperClassName?: string
  error?: boolean
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  isClearable?: boolean
  onValueChange?: (value: string) => void
  onClear?: () => void
}

export function useInput(props: UseInputProps) {
  const {
    ref,
    error,
    wrapperClassName,
    startContent,
    endContent,
    isClearable,
    onValueChange,
    onClear,
    ...otherProps
  } = props

  const domRef = useDOMRef(ref)

  const handleClear = useCallback(() => {
    onValueChange?.('')
    onClear?.()
  }, [onValueChange, onClear])

  const handleChangeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!otherProps.disabled) {
        otherProps.onChange?.(e)
        onValueChange?.(e.target.value)
      }
    },
    [otherProps, onValueChange],
  )

  const getBaseProps = useCallback(
    () => ({
      className: cn(
        'flex items-center bg-white rounded-8 px-20 border border-[#D1D5DB]',
        wrapperClassName,
      ),
    }),
    [wrapperClassName],
  )

  const getInputProps = useCallback(
    () => ({
      ...otherProps,
      ref: domRef,
      className: cn(
        'bg-white my-12 h-full focus:outline-none',
        otherProps.className,
        error && 'border-[##EF4444]',
      ),
      onChange: handleChangeValue,
    }),
    [domRef, handleChangeValue, otherProps, error],
  )

  const getClearButtonProps = useCallback(
    () => ({
      onClick: handleClear,
    }),
    [handleClear],
  )

  return {
    handleClear,
    getBaseProps,
    getInputProps,
    getClearButtonProps,
    isClearable,
  }
}
