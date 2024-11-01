export const getCurrentDate = (): string => {
  const date = new Date()
  const day = date.getDate()
  const month = date.toLocaleString('es-ES', { month: 'long' })
  const year = date.getFullYear()

  return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`
}
