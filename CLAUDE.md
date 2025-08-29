# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 e-commerce storefront built with Medusa V2, featuring:
- Full-stack TypeScript implementation
- App Router with server components and server actions
- Payment integration with Stripe and Razorpay
- Multi-region support with automatic country detection
- Responsive design with Tailwind CSS and Medusa UI components

## Development Commands

```bash
# Development
yarn dev              # Start dev server on port 8000 with Turbopack
yarn build           # Build production version
yarn start           # Start production server on port 8000
yarn lint            # Run ESLint

# Analysis
yarn analyze         # Analyze bundle size with ANALYZE=true
```

## Environment Setup

1. Copy `.env.template` to `.env.local`
2. Required environment variables:
   - `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` - Medusa publishable API key
   - `MEDUSA_BACKEND_URL` - Medusa server URL (defaults to http://localhost:9000)
   - `NEXT_PUBLIC_BASE_URL` - Storefront URL (defaults to http://localhost:8000)
3. Optional variables:
   - `NEXT_PUBLIC_STRIPE_KEY` - For Stripe payments
   - `NEXT_PUBLIC_DEFAULT_REGION` - Default region code (defaults to "us")
   - `REVALIDATE_SECRET` - For Next.js on-demand revalidation

## Architecture

### Directory Structure
- `src/app/[countryCode]/` - Country-specific routes with middleware-based region detection
- `src/modules/` - Feature modules (account, cart, checkout, products, etc.)
- `src/lib/` - Utilities, configuration, and data fetching
- `src/lib/data/` - Medusa SDK data layer functions
- `src/lib/util/` - Helper utilities and type definitions

### Key Patterns
- Server components for data fetching with Medusa SDK (`src/lib/config.ts`)
- Modular architecture with feature-based organization
- Custom hooks in `src/lib/hooks/`
- Shared components in `src/modules/common/`
- Type definitions in `src/types/`

### Styling
- Tailwind CSS with custom configuration extending Medusa UI preset
- CSS modules for component-specific styles
- Custom animations and responsive breakpoints defined in `tailwind.config.js`

### State Management
- Context providers in `src/lib/context/`
- Server state via Medusa SDK
- Client state with React hooks

### Payment Integration
- Stripe: Components in `src/modules/checkout/components/payment-wrapper/`
- Razorpay: Custom implementation in payment components
- Payment methods configured via environment variables

## Medusa Backend Requirements

- Requires Medusa V2 server running on port 9000 (or configured MEDUSA_BACKEND_URL)
- Regions must be configured in Medusa Admin
- Payment providers (Stripe/Razorpay) must be set up in backend
- Publishable API keys must be created and configured

## Import Paths
- `@lib/*` maps to `src/lib/*`
- `@modules/*` maps to `src/modules/*`  
- `@pages/*` maps to `src/pages/*`

## Build Configuration
- TypeScript with strict mode enabled
- ESLint configured with Next.js rules (build errors ignored in config)
- Next.js image optimization for localhost and AWS S3 domains
- Turbopack enabled for development