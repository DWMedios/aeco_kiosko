import WebApiAeco from '../api/webApiAeco'
import { Method, Packaging, Packagings, Ticket } from '../interfaces'
import { getSessionStorage, setSessionStorage } from './manageStorage'

export const SavePackaging = (packaging: Packaging) => {
  const ticket = GetTicket() || defaultPackaging
  const existing = ticket.packagings.find((p) => p.id === packaging.id)

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1
  } else {
    ticket.packagings.push({ ...packaging, quantity: 1 })
  }
  const updatedProducts = {
    packagings: [...ticket.packagings],
    totalCans: ticket.totalCans + (packaging.packagingType === 'can' ? 1 : 0),
    totalBottles:
      ticket.totalBottles + (packaging.packagingType === 'bottle' ? 1 : 0),
  }
  setSessionStorage('ticket', JSON.stringify(updatedProducts))
}

export const GetTicket = (): Packagings | null => {
  const data = getSessionStorage('ticket')
  return data ? JSON.parse(data) : null
}

export const ClearCountPackings = (): void => {
  sessionStorage.clear()
}

export const LastPackings = (): Packaging => {
  const packagings = GetTicket() || defaultPackaging
  return packagings.packagings.at(-1) || { id: 0, name: '', packagingType: '' }
}

export const SaveProccess = async (method: Method) => {
  try {
    const ticket = ticketTransform(method)
    const response = await WebApiAeco.saveTicket(ticket)
    setSessionStorage('ticket', JSON.stringify(response))
    return true
  } catch (error) {
    return false
  }
}

const ticketTransform = (method: Method): Ticket => {
  const ticket = GetTicket() || defaultPackaging
  return {
    method: method.name,
    summary: {
      reward: method,
      items: ticket.packagings.map((pack) => ({
        quantity: pack.quantity || 1,
        packagingType: pack.packagingType,
        productId: pack.id,
      })),
    },
    totalCans: ticket.totalCans,
    totalBottles: ticket.totalBottles,
  }
}

const defaultPackaging = {
  packagings: [],
  totalCans: 0,
  totalBottles: 0,
}
