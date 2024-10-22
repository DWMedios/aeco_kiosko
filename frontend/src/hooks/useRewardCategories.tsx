import { useState, useEffect } from 'react'
import { RewardCategory } from '../interfaces'

const useRewardCategories = () => {
  const [rewards, setRewards] = useState<RewardCategory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await fetch(
          'http://192.168.100.58:3333/api/reward-categories',
        )
        const data: RewardCategory[] = await response.json()
        // Ordenar por el campo "order"
        const sortedRewards = data.sort((a, b) => a.order - b.order)
        setRewards(sortedRewards)
      } catch (error) {
        console.error('Error fetching rewards:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRewards()
  }, [])

  return { rewards, loading }
}

export default useRewardCategories
