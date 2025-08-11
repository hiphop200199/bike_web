import { request } from './base'

const secondPrefix = 'banner'

export const getAllList = async () => {
  return await request.getAllList(secondPrefix)
}
