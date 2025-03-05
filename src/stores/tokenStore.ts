import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Alert = {
  tokenId: string
  threshold: number
  type: 'above' | 'below'
}

export type Token = {
  id: string
  symbol: string
  name: string
  currentPrice: number
  priceChange24h: number
}

interface TokenState {
  alerts: Alert[]
  watchlist: string[]
  addAlert: (alert: Alert) => void
  removeAlert: (tokenId: string) => void
  toggleWatchlist: (tokenId: string) => void
}

export const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      alerts: [],
      watchlist: [],
      addAlert: (alert) => set((state) => ({ alerts: [...state.alerts, alert] })),
      removeAlert: (tokenId) => set((state) => ({
        alerts: state.alerts.filter(a => a.tokenId !== tokenId)
      })),
      toggleWatchlist: (tokenId) => set((state) => ({
        watchlist: state.watchlist.includes(tokenId)
          ? state.watchlist.filter(id => id !== tokenId)
          : [...state.watchlist, tokenId]
      }))
    }),
    {
      name: 'token-storage',
      getStorage: () => localStorage,
    }
  )
)
