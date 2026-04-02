'use client'

import { useEffect } from 'react'
import { useBTCStore } from '@/store/useBTCStore'
import { getBTCPrice } from '@/services/binance'

export default function Header() {
  const { price, change24h, volume, setData } = useBTCStore()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBTCPrice()

      setData({
        price: parseFloat(data.lastPrice),
        change24h: parseFloat(data.priceChangePercent),
        volume: parseFloat(data.volume),
      })
    }

    fetchData()
    const interval = setInterval(fetchData, 5000)

    return () => clearInterval(interval)
  }, [setData])

  return (
    <div className="flex justify-between p-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">BTC Dashboard</h1>

      <div className="flex gap-6">
        <span>${price.toFixed(2)}</span>
        <span className={change24h >= 0 ? 'text-green-400' : 'text-red-400'}>
          {change24h.toFixed(2)}%
        </span>
        <span>Vol: {volume.toFixed(0)}</span>
      </div>
    </div>
  )
}
