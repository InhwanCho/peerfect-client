'use client';

import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { getQueryClient } from '@/lib/query-client'
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  )
}

// 챌린지 관련된건 HydrationBoundary으로 prefetch 진행하고,
// 유저 관련된건 clinet에서 fetch 진행 예정