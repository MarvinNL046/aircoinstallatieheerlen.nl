# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Airco Installatie Heerlen - A Next.js 13.5.6 website for StayCool Airco, providing air conditioning installation services in Heerlen, Parkstad, and Zuid-Limburg regions.

## Tech Stack

- **Framework**: Next.js 13.5.6 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Forms**: React Hook Form + Zod validation
- **Email**: EmailJS integration
- **CRM**: GoHighLevel webhook integration
- **Build**: Standalone output mode

## Development Commands

```bash
npm run dev          # Start development server on port 3000
npm run build        # Build for production (includes sitemap generation)
npm run lint         # Run ESLint
npm run start        # Start production server
npm run generate-sitemaps  # Manually generate sitemaps
```

## Key Architecture

### App Router Structure
```
app/
├── api/              # API routes (currently empty)
├── diensten/         # Service pages with dynamic [slug] and [city] routes
├── kennisbank/       # Knowledge base articles
├── steden/           # City-specific landing pages
├── merken/           # Brand showcase pages
└── [pages].tsx       # Root pages (contact, faq, about, etc.)
```

### Component Architecture
- **UI Components**: Located in `components/ui/` - Shadcn/ui components (Radix UI based)
- **Form Components**: `components/forms/` - Contact forms with EmailJS and GoHighLevel integration
- **Section Components**: `components/sections/` - Reusable page sections (hero, CTA, features)
- **Layout Components**: `components/layout/` - Header and footer components

### Data Management
- **Static Data**: JSON files in `data/` directory (diensten.json, products.json)
- **Dynamic Routes**: Service pages support city-specific variations via `[slug]/[city]` pattern
- **SEO**: Pre-built sitemaps with city and service combinations

### Form Handling Flow
1. React Hook Form with Zod validation
2. EmailJS for email notifications (configured in `lib/emailjs.ts`)
3. GoHighLevel webhook for CRM integration
4. Environment variables control service IDs and endpoints

### Environment Configuration
Required environment variables (see `.env.local.example`):
- `NEXT_PUBLIC_SITE_URL` - Base URL for the site
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_EMAILJS_*` - EmailJS configuration
- `NEXT_PUBLIC_GHL_WEBHOOK_URL` - GoHighLevel webhook endpoint

### Key Patterns

**Multi-City SEO Strategy**: Dynamic routing creates city-specific service pages automatically. The pattern `diensten/[slug]/[city]` generates combinations like `/diensten/installatie/heerlen`.

**Contact Form Integration**: All forms use a dual submission approach:
1. EmailJS for immediate email notification
2. GoHighLevel webhook for CRM lead capture

**Component Imports**: Use path alias `@/*` which maps to the project root.

**Sitemap Generation**: Pre-build script generates static sitemaps for all city/service combinations.

### Performance Considerations
- Standalone output mode for optimized deployment
- Images unoptimized (for static export compatibility)
- SWC minification enabled
- Lucide React icons optimized via experimental feature

### Testing
Currently no test framework is configured. Consider adding Jest/React Testing Library for component testing.

### Common Tasks

**Adding a new service page**:
1. Add service data to `data/diensten.json`
2. Create component in `app/diensten/[slug]/page.tsx` if custom layout needed
3. Run `npm run generate-sitemaps` to update sitemap

**Adding a new city**:
1. Update city lists in relevant components
2. Regenerate sitemaps
3. City-specific pages auto-generate via dynamic routing

**Updating contact form**:
1. Modify form components in `components/forms/`
2. Update EmailJS template if field changes
3. Update GoHighLevel webhook mapping if needed