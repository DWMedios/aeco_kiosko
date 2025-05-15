import WebApiAeco from '../api/webApiAeco'
import { Method, Packaging, Packagings, Ticket } from '../interfaces'
import { getLocalStorage, setLocalStorage } from './manageStorage'

export const SavePackaging = async (packaging: Packaging) => {
  try {
    const ticket = GetTicket() || defaultPackaging
    const existing = ticket.packagings.find((p) => p.id === packaging.id)

    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1
    } else {
      ticket.packagings.push({ ...packaging, quantity: 1 })
    }
    const updatedProducts = {
      packagings: [...ticket.packagings],
      total_cans:
        ticket.total_cans + (packaging.packagingType === 'can' ? 1 : 0),
      total_bottles:
        ticket.total_bottles + (packaging.packagingType === 'bottle' ? 1 : 0),
    }
    setLocalStorage('ticket', JSON.stringify(updatedProducts))
    return true
  } catch (error) {
    return false
  }
}

export const GetTicket = (): Packagings | null => {
  const data = getLocalStorage('ticket')
  return data ? JSON.parse(data) : null
}

export const LastPackaging = (): Packaging => {
  const packagings = GetTicket() || defaultPackaging
  return packagings.packagings.at(-1) || { id: 0, name: '', packagingType: '' }
}

export const SaveProccess = async (method: Method) => {
  try {
    const ticket = ticketTransform(method)
    await WebApiAeco.saveTicket(ticket)
    // setLocalStorage('ticket', JSON.stringify(response))
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
    total_cans: ticket.total_cans,
    total_bottles: ticket.total_bottles,
  }
}

const defaultPackaging = {
  packagings: [],
  total_cans: 0,
  total_bottles: 0,
}
