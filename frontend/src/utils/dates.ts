export const getCurrentDate = (): string => {
  const date = new Date()
  const day = date.getDate()
  const month = date.toLocaleString('es-ES', { month: 'long' })
  const year = date.getFullYear()

  return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`
}

export const getFormattedDate = () => {
  const date = new Date()

  const day = date.getDate().toString().padStart(2, '0')
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()

  return `Fecha: ${day} / ${month} / ${year}`
}
