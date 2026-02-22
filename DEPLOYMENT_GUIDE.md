# Web3 Currency Landing Page - Deployment & Optimization Guide

## Pre-Deployment Checklist

### 1. Environment Variables
```bash
# Copy the environment template
cp .env.example .env.production

# Add your production values:
VITE_GA_MEASUREMENT_ID=G_YOUR_GA_ID
VITE_GEMINI_API_KEY=your_key_here
```

### 2. Update Google Analytics
- Replace `GA_MEASUREMENT_ID` in `index.html` with your actual Google Analytics Measurement ID
- Create custom events in GA4 dashboard for tracking

### 3. Update Canonical URL
- Replace `https://web3currency.com` in `index.html` with your actual domain

### 4. Update Open Graph Images
- Create og-image.jpg (1200x630px) and twitter-image.jpg (1024x512px)
- Upload to your domain and update URLs in index.html

## Deployment Steps

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Other Platforms
The project includes `vercel.json` for Vercel but is compatible with:
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Docker

## SEO Optimization Checklist

- [x] Meta title (under 60 characters): "Web3 Currency - Learn, Explore, Earn | Web3 Education Community"
- [x] Meta description (under 160 characters)
- [x] H1 tag: "The Standard for Web3 Navigation"
- [x] H2 tags for sections: "Built on Core Principles", "Strategic Ecosystem Structure"
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] robots.txt
- [x] sitemap.xml
- [x] JSON-LD structured data (Organization + FAQ)
- [x] Alt text on images
- [x] Canonical tag

## Analytics Setup

### Google Analytics 4 Setup
1. Create GA4 property at analytics.google.com
2. Get Measurement ID
3. Replace `GA_MEASUREMENT_ID` in index.html
4. Create custom events:
   - `cta_click` - CTA button clicks
   - `community_join` - WhatsApp community joins
   - `social_click` - Social media clicks
   - `section_view` - Scroll depth tracking
   - `faq_interaction` - FAQ clicks
   - `airdrop_interaction` - Airdrop engagement

### Conversion Tracking
- Set WhatsApp community join as primary conversion
- Set ecosystem exploration as secondary conversion
- Set P2P desk interest as tertiary conversion

## Security Hardening

### Headers Applied
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Content-Security-Policy (CSP)
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy (no geolocation, microphone, camera)

### HTTPS Enforcement
- Vercel provides automatic HTTPS
- Add to your domain in Vercel dashboard
- Enable auto-renewal for SSL certificates

## Performance Optimization

### Built-in Optimizations
- Code splitting (React vendor chunk)
- Terser minification
- CSS minification
- Video lazy loading with preload metadata
- Responsive images
- Glass-morphism CSS optimization

### Lighthouse Targets
- Performance: > 85
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

### Monitoring
- Set up error tracking (Sentry)
- Monitor Core Web Vitals
- Track Real User Monitoring (RUM)

## CDN & Caching Strategy

### Cache Headers
- Static assets (.js, .css): max-age=31536000, immutable
- Videos: max-age=3600, public
- HTML: no-cache, must-revalidate

### Image Optimization
- Store images in public folder
- Use modern formats (WebP with fallbacks)
- Implement responsive images

## Domain Configuration

### DNS Records
```
Type: A
Name: @
Value: <Vercel IP>

Type: CNAME
Name: www
Value: cname.vercel.com
```

### Custom Domain in Vercel
1. Go to Project Settings
2. Add your domain
3. Update DNS records
4. Enable auto-renew SSL

## Monitoring & Analytics

### Key Metrics
- Bounce rate
- Time on page
- Conversion rate (WhatsApp joins)
- Traffic by channel
- Device breakdown
- Geographic distribution

### Event Tracking Events
- Hero CTA clicks
- Ecosystem exploration rate
- P2P desk inquiries
- Airdrop clicks
- FAQ engagement
- Social media clicks
- Video plays

## Troubleshooting

### Common Issues

**Videos not loading**
- Verify video files in `/public/` folder
- Check browser video support
- Clear browser cache

**Analytics not tracking**
- Verify GA ID is correct
- Check CSP isn't blocking gtag script
- Verify events in GA4 dashboard

**SEO issues**
- Submit sitemap.xml to Google Search Console
- Check robots.txt allows crawling
- Verify canonical tag is correct

## Post-Launch

### Week 1
- Monitor error logs
- Check analytics setup
- Verify all links work
- Test social shares

### Week 2-4
- Optimize conversion funnels
- A/B test CTA button text
- Improve underperforming sections
- Analyze user behavior

## Support & Contact
For issues, contact: web3currency.info@gmail.com
