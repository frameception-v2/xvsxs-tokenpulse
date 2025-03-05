import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Alert {
  tokenId: string;
  threshold: number;
  condition: 'above' | 'below';
}

interface TokenState {
  alerts: Alert[];
  watchlist: string[];
  addAlert: (alert: Alert) => void;
  removeAlert: (tokenId: string, threshold: number) => void;
}

export const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      alerts: [],
      watchlist: [],
      addAlert: (alert) => set((state) => ({
        alerts: [...state.alerts.filter(a => 
          a.tokenId !== alert.tokenId || a.threshold !== alert.threshold
        ), alert]
      })),
      removeAlert: (tokenId, threshold) => set((state) => ({
        alerts: state.alerts.filter(a => 
          !(a.tokenId === tokenId && a.threshold === threshold)
        )
      }))
    }),
    {
      name: 'token-storage',
      partialize: (state) => ({ alerts: state.alerts, watchlist: state.watchlist }),
    }
  )
);
