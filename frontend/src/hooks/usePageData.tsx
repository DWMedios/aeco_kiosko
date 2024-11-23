import { useState, useEffect } from 'react'
import WebApiAeco from '../api/webApiAeco'

export function usePageData<T>(pageName: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await WebApiAeco.getPage(pageName)
        if (!response) {
          throw new Error(`Page not found`)
        }
        setData(response?.metadata || null)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [pageName])

  return { data, loading, error }
}
