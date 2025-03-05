import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface TokenAlert {
  address: string
  threshold: number
  direction: 'above' | 'below'
}

interface TokenState {
  alerts: TokenAlert[]
  watchlist: string[]
  addAlert: (alert: TokenAlert) => void
  removeAlert: (address: string) => void
  updatePrices: (prices: Record<string, number>) => void
}

export const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      alerts: [],
      watchlist: [],
      addAlert: (alert) => set((state) => ({ alerts: [...state.alerts, alert] })),
      removeAlert: (address) => set((state) => ({ 
        alerts: state.alerts.filter(a => a.address !== address) 
      })),
      updatePrices: (prices) => set((state) => ({
        alerts: state.alerts.filter(alert => {
          const currentPrice = prices[alert.address]
          if (!currentPrice) return true // Keep if price not found
          return alert.direction === 'above' 
            ? currentPrice < alert.threshold
            : currentPrice > alert.threshold
        })
      }))
    }),
    {
      name: 'token-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
