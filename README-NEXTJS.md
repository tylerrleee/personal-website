# Tyler Le's Portfolio - Next.js

This portfolio has been successfully refactored from a Vite/React application to Next.js with full static export support for deployment on Vercel or GitHub Pages.

## Features

- **Next.js Framework**: Modern React framework with SSG capabilities
- **Responsive Design**: Mobile-first approach with breakpoints for mobile, tablet, and desktop
- **Component Architecture**: Reusable components for maintainability
- **Static Export**: Pre-rendered static pages for optimal performance
- **Custom Font Loading**: PP Editorial New font with proper fallbacks
- **Smooth Scrolling**: Enhanced navigation experience
- **SEO Optimized**: Proper meta tags and semantic HTML

## Project Structure

```
├── components/          # Reusable React components
│   ├── Layout.js       # Main layout wrapper with head tags
│   ├── Header.js       # Fixed navigation header
│   ├── HeroSection.js  # Main intro section
│   ├── ExperienceSection.js  # Experience cards grid
│   ├── ProjectSection.js     # Projects showcase
│   ├── ExperienceCard.js     # Individual experience card
│   ├── ProjectCard.js        # Individual project card
│   └── SmoothScrollLink.js   # Custom smooth scroll component
├── pages/               # Next.js pages
│   ├── _app.js         # App wrapper with global CSS
│   └── index.js        # Main homepage
├── styles/              # CSS styles
│   └── globals.css     # Global styles with responsive design
├── public/              # Static assets
│   ├── fonts/          # Custom fonts
│   └── images/         # Optimized images
└── out/                 # Generated static export (after build)
```

## Local Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server locally
- `npm run export` - Build and export static files to `out/` directory
- `npm run lint` - Run ESLint for code quality

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy with default settings - static export is configured

### GitHub Pages

1. Build and export static files:
   ```bash
   npm run build
   ```

2. Deploy the `out/` directory to GitHub Pages
   ```bash
   npm run deploy
   ```

### Manual Static Hosting

1. Generate static export:
   ```bash
   npm run build
   ```

2. Upload the contents of the `out/` directory to any static hosting provider

## Responsive Breakpoints

- **Mobile**: ≤768px - Single column layout
- **Tablet**: 769px-1024px - Two column layouts  
- **Desktop**: ≥1025px - Full grid layouts

## Key Features Implemented

✅ **Complete Next.js Migration**: Moved from Vite to Next.js with proper routing  
✅ **Asset Organization**: All images moved to `/public/images/`, fonts to `/public/fonts/`  
✅ **Component Architecture**: Modular, reusable components  
✅ **Responsive Design**: Fully responsive with mobile-first approach  
✅ **Static Export Ready**: Configured for deployment on any static host  
✅ **Performance Optimized**: Next.js Image component with proper sizing  
✅ **SEO Ready**: Proper meta tags and semantic structure  
✅ **Smooth Interactions**: Hover effects and smooth scrolling preserved  

## Technologies Used

- **Next.js 15**: React framework with static export
- **React 19**: Latest React with concurrent features
- **CSS3**: Custom styles with CSS Grid and Flexbox
- **Next/Image**: Optimized image loading
- **Custom Fonts**: PP Editorial New loaded locally

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)  
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All external links open in new tabs with security attributes
- Images are optimized and use proper alt text
- Font loading is optimized with proper fallbacks
- CSS Grid layout provides consistent spacing across devices