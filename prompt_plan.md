Here's the optimized prompt sequence for incremental implementation:

```markdown
# Phase 1: Core Infrastructure Setup

```text
PROMPT 1: Initialize Next.js project with TypeScript template
- Create new Next 14 project with app router
- Install base dependencies: zustand, wagmi, @farcaster/auth-kit
- Configure tsconfig.json with strict type checking
- Add core layout structure with 3 responsive columns
- Set up basic mobile-first CSS grid with fractional units
- Implement template customization: Update favicon, title, and meta tags
```

```text
PROMPT 2: Create Zustand store for global state
- Define TokenState type matching specification
- Implement store actions: addAlert, removeAlert, updatePrices
- Add localStorage persistence for watchlist and alerts
- Create selector hooks for derived state (filtered tokens, active alerts)
- Wire up store hydration on mount with rehydrate action
- Add TypeScript types for CoinGecko response shapes
```

# Phase 2: Data Integration Layer

```text
PROMPT 3: Implement Wagmi wallet integration
- Configure wagmi client with injected provider
- Create useWalletTokens hook combining useBalance + ERC20 ABI
- Add error handling for wallet connection states
- Implement token balance formatting utilities
- Create wallet context provider component
- Add disconnect/connect handlers with farcaster sdk.context
```

```text
PROMPT 4: Build CoinGecko API service
- Create price fetching service with axios
- Implement market chart historical data adapter
- Add request caching with IndexedDB (localforage)
- Write type guards for API response validation
- Create refreshTokenData action in zustand store
- Implement exponential backoff for rate limiting
```

# Phase 3: Core Components Implementation

```text
PROMPT 5: Create TokenCard component
- Implement responsive grid item with clamp() sizing
- Add SVG sparkline with dummy data
- Create price change indicator with color morphing
- Add hover states for desktop/mobile
- Implement swipe gestures for mobile
- Connect to zustand store for real-time updates
```

```text
PROMPT 6: Build Alert Threshold System
- Create threshold input component with validation
- Implement alert checking interval (30s)
- Add toast notifications via farcaster sdk.actions
- Create visual badge component for alert states
- Wire up alert persistence to localStorage
- Add sound effects for threshold breaches
```

# Phase 4: Mobile Optimization

```text
PROMPT 7: Implement Touch Interactions
- Add drag-to-refresh gesture with react-use-gesture
- Create long-press context menu component
- Implement momentum scrolling for token lists
- Add keyboard-aware layout adjustments
- Optimize touch targets (48px min)
- Implement column reordering on small screens
```

```text
PROMPT 8: Performance Enhancements
- Offload price calculations to Web Worker
- Implement canvas-based heatmap visualization
- Add dynamic code splitting for charts
- Set up smart data hydration strategies
- Optimize re-renders with React.memo
- Configure service worker for API cache
```

# Phase 5: Final Integration

```text
PROMPT 9: Wire Up Main Interface
- Connect wallet state to token grid
- Implement slide-out watchlist panel
- Add historical chart time filters (24h/7d/30d)
- Connect gesture handlers to data refresh
- Implement responsive layout conditionals
- Add error boundary wrappers
```

```text
PROMPT 10: Final Polishing
- Add loading skeletons for async states
- Implement color theme transitions
- Add haptic feedback for mobile
- Test voice input integration
- Verify localStorage quota handling
- Add share functionality via data URLs
```

Each prompt builds on previous implementations while maintaining discrete functionality boundaries. The sequence follows:
1. Infrastructure → 2. Data → 3. Components → 4. Optimization → 5. Integration

Key mobile considerations embedded throughout:
- Touch gesture handling in PROMPT 7
- Performance-critical code in PROMPT 8
- Responsive layout rules in PROMPT 1/9
- Mobile-first CSS in all component prompts

All prompts respect constraints by:
- Using client-side storage only
- Leveraging existing template components
- Avoiding smart contract interactions
- Maintaining Farcaster SDK integration