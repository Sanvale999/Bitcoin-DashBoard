import { create } from 'zustand'

interface BTCState {
  price: number
  change24h: number
  volume: number
  setData: (data: Partial<BTCState>) => void
}

export const useBTCStore = create<BTCState>((set) => ({
  price: 0,
  change24h: 0,
  volume: 0,
  setData: (data) => set(data),
}))
