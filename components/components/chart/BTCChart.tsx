'use client'

import { useEffect, useRef } from 'react'
import { createChart } from 'lightweight-charts'
import { getKlines } from '@/services/binance'

export default function BTCChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = createChart(chartRef.current, {
      layout: {
        background: { color: '#0f172a' },
        textColor: '#d1d5db',
      },
      width: chartRef.current.clientWidth,
      height: 400,
    })

    const candleSeries = chart.addCandlestickSeries()

    const loadData = async () => {
      const data = await getKlines()
      candleSeries.setData(data)
    }

    loadData()

    return () => chart.remove()
  }, [])

  return <div ref={chartRef} />
}
