export interface BaseResponse<T> {
  code: number
  isSuccess: boolean
  message: string
  result: T
}
