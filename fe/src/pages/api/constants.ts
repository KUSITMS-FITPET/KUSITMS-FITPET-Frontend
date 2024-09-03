import { Method } from 'axios'

export const HTTP_METHODS: Record<
  string,
  Extract<Method, 'get' | 'post' | 'patch' | 'delete' | 'put'>
> = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  DELETE: 'delete',
  PUT: 'put',
} as const

export const ACCESS_TOKEN = 'accessToken' as const
export const REFRESH_TOKEN = 'refreshToken' as const
export const ROLE = 'role' as const
