Here's the organized todo list following the implementation sequence:

### Phase 1: Core Infrastructure
- [x] Create Next.js 14 project with TypeScript template (user gets modern framework base)
- [x] Install zustand, wagmi, @farcaster/auth-kit (enables state/wallet/Farcaster features)
- [x] Configure tsconfig.json strict: true + typeRoots (catches type errors early)
- [x] Add 3-column responsive layout using CSS grid (foundation for all UI components)
- [x] Implement mobile-first fractional unit grid (ensures mobile layout integrity)
- [ ] Update favicon.ico and metadata in head.tsx (brand customization)

### State Management
- [ ] Define TokenState interface with alerts/watchlist types (type-safe state foundation)
- [ ] Create zustand store with persistence middleware (state survives page refreshes)
- [ ] Implement addAlert/removeAlert store actions (user can manage price alerts)
- [ ] Create filteredTokens selector with memoization (optimized render performance)
- [ ] Add store hydration on mount in _app.tsx (persisted state initialization)
- [ ] Define CoinGeckoResponse type with validators (safe API data handling)

### Phase 2: Data Layer
- [ ] Configure wagmi client with InjectedConnector (wallet connection support)
- [ ] Create useWalletTokens hook with ERC20 ABI (displays user's token balances)
- [ ] Implement balance formatting utility (human-readable amounts)
- [ ] Add Farcaster connect/disconnect handlers (social wallet integration)
- [ ] Create CoinGecko service with axios (price data pipeline)
- [ ] Implement IndexedDB caching via localforage (offline data access)
- [ ] Add exponential backoff in API retries (handles rate limits gracefully)

### Phase 3: Components
- [ ] Build TokenCard with clamp() sizing (responsive grid items)
- [ ] Implement SVG sparkline component (visual price history)
- [ ] Create color-morphing price indicator (instant visual feedback)
- [ ] Add swipe gestures with react-use-gesture (mobile navigation)
- [ ] Build threshold input with regex validation (safe alert creation)
- [ ] Implement alert checker with 30s interval (timely notifications)
- [ ] Create toast system with Farcaster actions (user sees alerts)

### Phase 4: Mobile
- [ ] Add drag-to-refresh with react-use-gesture (mobile UX pattern)
- [ ] Implement long-press context menu (secondary actions)
- [ ] Create momentum scrolling container (native-like feel)
- [ ] Optimize touch targets (48px buttons/controls)
- [ ] Add column reordering media query (mobile layout adaptation)
- [ ] Offload calculations to Web Worker (main thread optimization)

### Phase 5: Polish
- [ ] Connect wallet to token grid (final data integration)
- [ ] Implement slide-out watchlist panel (user-controlled view)
- [ ] Add historical chart time filters (24h/7d/30d options)
- [ ] Create loading skeletons (perceived performance)
- [ ] Implement haptic feedback (mobile interaction confirmation)
- [ ] Add share via data URL (social distribution)

Implementation order follows infrastructure → data → components → mobile → polish. Each task builds on previous completions while maintaining isolated testability. Mobile considerations integrated at each layer with dedicated optimization phase.
