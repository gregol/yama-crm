export const setItem = (name: string, value: string, expires?: number) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(name, value)
  }
}

export const getItem = (name: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(name)
  }
}

export const removeItems = (name: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(name)
  }
}
