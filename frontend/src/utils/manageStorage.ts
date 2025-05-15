export const setLocalStorage = (label: string, data: string) => {
  localStorage.setItem(label, data)
}

export const getLocalStorage = (label: string) => {
  return localStorage.getItem(label)
}
