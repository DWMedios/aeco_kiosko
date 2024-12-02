import { Packaging } from '../interfaces'

export const SavePackaging = (packaging: Packaging) => {
  const packagings = GetPackagings() || { packagings: [], can: 0, bottle: 0 }
  const updatedProducts = {
    packagings: [...packagings.packagings, packaging],
    can: packaging.packaging === 'Lata' ? packagings.can + 1 : packagings.can,
    bottle:
      packaging.packaging === 'Botella'
        ? packagings.bottle + 1
        : packagings.bottle,
  }
  sessionStorage.setItem('containers', JSON.stringify(updatedProducts))
}

export const GetPackagings = (): {
  packagings: Packaging[]
  can: number
  bottle: number
} | null => {
  const data = sessionStorage.getItem('containers')
  return data ? JSON.parse(data) : null
}

export const ClearCount = (): void => {
  sessionStorage.clear()
}

export const LastPackings = (): Packaging => {
  const packagings = GetPackagings() || { packagings: [], can: 0, bottle: 0 }
  return packagings.packagings.at(-1) || { name: '', packaging: '' }
}
