# Image Optimization for GitHub Pages

## Current Issue
Your images are very large (10-13MB each), causing slow loading on GitHub Pages.

## Recommended Solutions:

### 1. Compress Images
Use these tools to reduce file sizes by 80-90%:
- **TinyPNG** (https://tinypng.com/) - Online compression
- **ImageOptim** (Mac) or **ImageCompressor** (Windows)
- **Squoosh** (https://squoosh.app/) - Google's web-based tool

### 2. Convert to WebP Format
- WebP images are 25-50% smaller than PNG/JPG
- Use tools like **Convertio** or **Squoosh** to convert

### 3. Create Multiple Sizes
For responsive images, create these sizes:
- Small (480px width) - for mobile
- Medium (768px width) - for tablets  
- Large (1200px width) - for desktop

### 4. Batch Processing
Use this PowerShell script to check current sizes:

```powershell
Get-ChildItem "public/photos/**/*.png" | Select-Object Name, @{Name="SizeMB";Expression={[math]::Round($_.Length/1MB,2)}} | Sort-Object SizeMB -Descending
```

## Target Goals:
- Reduce each image from ~12MB to ~200-500KB
- Total reduction: 95%+ file size decrease
- Expected result: 10x faster loading times

## Implementation Priority:
1. Compress existing images first (immediate 80% improvement)
2. Convert to WebP format (additional 30% improvement)
3. Implement responsive images (future enhancement)
