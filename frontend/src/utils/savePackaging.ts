import WebApiAeco from '../api/webApiAeco'
import { Method, Packaging, Packagings, Ticket } from '../interfaces'

export const SavePackaging = async (packaging: Packaging) => {
  try {
    let ticket = GetTicket()
    if (!ticket) {
      ticket = {
        packagings: [],
        total_cans: 0,
        total_bottles: 0,
      }
    }
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
    localStorage.removeItem('ticket')
    localStorage.setItem('ticket', JSON.stringify(updatedProducts))
    ticket = GetTicket()
    return true
  } catch (error) {
    return false
  }
}

export const GetTicket = (): Packagings | null => {
  const data = localStorage.getItem('ticket')
  return data && data !== '' ? JSON.parse(data) : null
}

export const LastPackaging = (): Packaging => {
  const packagings = GetTicket() || {
    packagings: [],
    total_cans: 0,
    total_bottles: 0,
  }
  return packagings.packagings.at(-1) || { id: 0, name: '', packagingType: '' }
}

export const SaveProccess = async (method: Method) => {
  try {
    const ticket = ticketTransform(method)
    await WebApiAeco.saveTicket(ticket)
    return true
  } catch (error) {
    return false
  }
}

const ticketTransform = (method: Method): Ticket => {
  const ticket = GetTicket() || {
    packagings: [],
    total_cans: 0,
    total_bottles: 0,
  }
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
