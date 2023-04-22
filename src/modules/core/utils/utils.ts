import { getItem } from './CRMPersistData'

export const sessionExpire = () => {
  const now = Date.now() / 1000 // convert to seconds
  const dateExpire = parseInt(getItem('exp') ?? '0')
  if (isNaN(dateExpire)) return true

  return now > dateExpire
}

export const createPassword = (length: number): string => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-*'
  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex]
  }

  return password
}
