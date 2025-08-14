# Bileha Font Installation Guide

## Current Setup
I've configured your website to use the Bileha font with proper fallbacks. The font infrastructure is ready!

## Font Files Needed
To complete the setup, you need to add Bileha font files to the `/public/fonts/` directory:

### Required Files:
- `Bileha-Regular.woff2` (preferred format)
- `Bileha-Regular.woff` (fallback)
- `Bileha-Regular.ttf` (fallback)
- `Bileha-Bold.woff2` (for headings)
- `Bileha-Bold.woff` (fallback)
- `Bileha-Bold.ttf` (fallback)
- `Bileha-Light.woff2` (optional)
- `Bileha-Light.woff` (optional)
- `Bileha-Light.ttf` (optional)

## How to Add Font Files:

### Option 1: If you have the font files
1. Copy your Bileha font files to `c:\Systems-Group\saridena\public\fonts\`
2. Rename them to match the expected names above
3. Run `npm run build` to rebuild the project

### Option 2: If you need to find/convert the font
1. **Find the source**: Check where you got the Bileha font from
2. **Convert formats**: Use tools like:
   - [Convertio](https://convertio.co/ttf-woff2/)
   - [CloudConvert](https://cloudconvert.com/ttf-to-woff2)
   - [FontSquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)

### Option 3: Alternative similar fonts
If Bileha isn't available, these fonts have similar characteristics:
- **Montserrat** (Google Fonts)
- **Nunito** (Google Fonts)
- **Lato** (Google Fonts)
- **Source Sans Pro** (Google Fonts)

## Current Fallbacks
Until you add the Bileha files, the website will use:
1. Bileha (when files are added)
2. Helvetica Neue (macOS)
3. Helvetica (older systems)
4. Arial (Windows)
5. sans-serif (system default)

## What's Already Configured:
✅ Font loading optimized with `font-display: swap`
✅ Applied to all text elements site-wide
✅ Proper font weights (300, 400, 700)
✅ Tailwind CSS integration
✅ Fallback fonts for reliability

Just add the font files and your website will use Bileha throughout!
