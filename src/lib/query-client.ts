import { QueryClient, isServer, QueryCache } from '@tanstack/react-query'

export const defaultStaleTime = 60 * 1000

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: defaultStaleTime,
      },
    },
    queryCache: new QueryCache({}),
  })
}

let browserQueryClient: QueryClient | undefined

export function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  }
  if (!browserQueryClient) browserQueryClient = makeQueryClient()
  return browserQueryClient
}
