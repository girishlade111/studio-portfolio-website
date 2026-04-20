# Studio Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and React 19. Features smooth animations, custom cursor, and professional studio design.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Utilities**: clsx, tailwind-merge

## Features

### Core Components
- **Custom Cursor** - Interactive custom cursor that follows mouse movement with smooth animations
- **Navbar** - Responsive navigation with smooth scroll to sections
- **Hero** - Landing section with animated text and call-to-action
- **Expertise** - Professional services/skill showcase with cards
- **Stats** - Animated statistics display with counters
- **Selected Projects** - Portfolio gallery with hover effects
- **Pricing** - Pricing plans display with tiers
- **Testimonials** - Client reviews carousel
- **FAQ** - Frequently asked questions accordion
- **Footer** - Contact info, social links, and copyright

### Highlights
- Smooth page transitions with Framer Motion
- Custom animated cursor effect
- Fully responsive design for all devices
- Dark-themed professional aesthetic
- Interactive hover effects on all interactive elements
- Accessible semantic HTML structure

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/girishlade111/studio-portfolio-website.git

# Navigate to project directory
cd studio-portfolio-website

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev

# Open in browser
http://localhost:3000
```

### Build & Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
portfolio3/
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page
│   └── components/
│       ├── CustomCursor.tsx
│       ├── Expertise.tsx
│       ├── Faq.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Pricing.tsx
│       ├── SelectedProjects.tsx
│       ├── Stats.tsx
│       └── Testimonials.tsx
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

## Configuration

### Environment Variables
Create a `.env.local` file for local configuration:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind CSS
Configuration found in `globals.css` using CSS-based config for v4.

### ESLint
Pre-configured with Next.js ESLint configuration.

## Stats

- **Components**: 10 interactive components
- **Files Modified**: 18 files
- **Lines Added**: 923 insertions
- **Lines Removed**: 98 deletions

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Netlify
- Railway
- Render
- AWS Amplify

## License

MIT License

## Author

**Girish Lade**
- GitHub: [@girishlade111](https://github.com/girishlade111)