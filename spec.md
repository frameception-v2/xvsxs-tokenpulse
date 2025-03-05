```markdown
# Token Price Alert Frame Specification

## 1. OVERVIEW

### Core Functionality
- Real-time price tracking for wallet tokens and watchlisted assets
- Visual alerts for price changes exceeding user-defined thresholds
- Interactive token portfolio visualization
- Custom watchlist management
- Historical price chart display (24h/7d/30d)

### UX Flow
1. Frame loads with connected wallet's token overview
2. Three-column layout: Watchlist | Portfolio | Price Alerts
3. Dynamic price updates with color-coded fluctuations
4. Contextual hover/touch interactions for detailed views
5. Non-intrusive notification badges for significant changes
6. Slide-out panel for managing watchlist and alert thresholds

## 2. TECHNICAL REQUIREMENTS

### Frontend Components
```typescript
// TokenCard.tsx
interface TokenData {
  symbol: string
  price: number
  change24h: number
  balance?: number
}

function TokenCard({ token }: { token: TokenData }) {
  return (
    <div className="token-card">
      <Sparkline data={token.history} />
      <div className="price-indicator" data-change={token.change24h}>
        ${token.price.toFixed(2)}
      </div>
    </div>
  )
}
```

### API Integration
- Wallet balance via Wagmi `useBalance`
- Token prices via CoinGecko API
- Historical data: CoinGecko Market Chart
- Farcaster context via `sdk.context`

### State Management
- Zustand for global state:
```typescript
type TokenState = {
  watchlist: string[]
  alerts: Record<string, number>
  portfolio: TokenData[]
  addAlert: (token: string, threshold: number) => void
}
```

### Mobile Responsiveness
- CSS Grid with fractional units
- Touch-optimized swipe navigation
- Dynamic font sizing (clamp())
- Conditional rendering based on `window.innerWidth`

## 3. FRAMES v2 IMPLEMENTATION

### Canvas Elements
1. Animated price sparklines using SVG
2. Floating action button for watchlist management
3. Heatmap visualization of portfolio distribution
4. Interactive price history scrubber

### Animations
- Spring-based layout transitions
- Color morphing for price changes
- Particle effects on threshold breaches
- Smooth chart interpolations

### Input Handling
- Drag-to-refresh gesture
- Pinch zoom on charts
- Long-press for token context menu
- Voice input for quick searches

### Notifications
```typescript
useEffect(() => {
  const interval = setInterval(checkThresholds, 30000)
  return () => clearInterval(interval)
}, [])

const checkThresholds = () => {
  state.alerts.forEach((threshold, token) => {
    if (currentPrice > threshold) {
      sdk.actions.showToast(`${token} crossed $${threshold}`)
    }
  })
}
```

### Data Persistence
- Watchlist stored in localStorage
- Portfolio snapshots as data URLs
- Share via `sdk.actions.openUrl` with encoded state

## 4. MOBILE CONSIDERATIONS

### Touch Optimization
- 48px minimum touch targets
- Momentum scrolling containers
- Right-click alternatives via long-press
- Virtual keyboard-aware layout

### Responsive Techniques
- Aspect-ratio maintained charts
- Conditional mobile-first CSS
- Dynamic column reordering
- Touch-friendly gesture zones

### Performance
- Web Workers for price calculations
- Canvas-based rendering for visualizations
- Smart data hydration
- Code splitting for non-critical features

## 5. CONSTRAINTS COMPLIANCE

### Database Requirements
- ❌ No persistent server storage
- ✔️ All user data stored in localStorage
- ✔️ API cache in IndexedDB

### Smart Contracts
- ❌ Zero contract interactions
- ✔️ Read-only chain data via Wagmi

### Third-Party Integrations
- ✔️ Only Farcaster SDK + CoinGecko API
- ✔️ Native wallet integration via WAGMI

### Complexity Control
- ❌ No ML predictions
- ❌ No cross-chain support
- ❌ No social trading features
- ✔️ Focused price tracking scope
```

This specification leverages Frames v2 capabilities while maintaining strict adherence to project constraints. The solution balances rich interactivity with performance considerations, particularly for mobile users. All technical decisions align with the provided template's existing architecture and approved dependencies.