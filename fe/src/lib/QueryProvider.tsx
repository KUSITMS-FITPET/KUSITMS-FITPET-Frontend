'use client'
default function QueryProvider({ children }: { children: ReactNode }) {
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictPropsWithChildren } from '@/type'

export default function QueryProvider({ children }: StrictPropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: false,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
