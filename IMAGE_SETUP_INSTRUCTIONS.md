# Image Setup Instructions for Production

## Required Images for Launch

### 1. OG Image (Open Graph for social sharing)
**Location:** `/public/og-image.png`
**Dimensions:** 1200x630px
**Format:** PNG or JPG
**Purpose:** Shows when links are shared on social media

**How to create:**
1. Use `/public/brand/templata-logo.svg` as base
2. Create 1200x630px canvas with branded background
3. Center logo with tagline "The Encyclopedia for Living"
4. Export as `og-image.png`
5. Replace the temporary `og-image.svg` file

**Tools:** Figma, Canva, or Photoshop

### 2. Favicons
**Locations needed:**
- `/public/favicon.ico` - 32x32px ICO format
- `/public/favicon-16x16.png` - 16x16px PNG
- `/public/favicon-32x32.png` - 32x32px PNG  
- `/public/apple-touch-icon.png` - 180x180px PNG

**How to create:**
1. Use `/public/brand/favicon-white.svg` as source
2. Convert to different sizes using favicon generator
3. Use tool like https://realfavicongenerator.net/
4. Upload your SVG and download all required formats
5. Place in `/public/` directory

### 3. Update metadata in layout.tsx
Once real images are ready, update these references:
- Root layout OG image (line 35-41)
- Template/article metadata OG images

## Current Status
✅ robots.txt created
✅ sitemap.xml generated  
⚠️  Temporary SVG files in place (replace with PNG/ICO)
⚠️  Need proper 1200x630 OG image
⚠️  Need favicon files in all formats
