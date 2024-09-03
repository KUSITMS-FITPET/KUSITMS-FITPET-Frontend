'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictPropsWithChildren } from '@/type'

	@@ -10,14 +10,16 @@ export default function QueryProvider({ children }: StrictPropsWithChildren) {
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
