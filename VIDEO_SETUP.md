# Hero Video Setup Guide

## Overview
The Hero Section is configured to use a full-bleed video background (`Hero.mp4`) with a dark overlay and centered content. This guide explains how to properly set up the video files.

## File Structure Required
```
project-root/
├── public/
│   ├── Hero.mp4          (Main hero video)
│   ├── P2P.mp4          (Optional: for other sections)
│   ├── Logo1.png        (Optional: brand logos)
│   └── Logo2.png        (Optional: brand logos)
├── App.tsx
└── ... (other files)
```

## How to Add Video Files

### Option 1: Direct File Upload
1. Create a `public` folder in the project root if it doesn't exist
2. Place `Hero.mp4` directly in the `public/` folder
3. The video will automatically be served at `/Hero.mp4` in your app

### Option 2: Using Vite Asset Import
If you want to import the video as a module:
```tsx
import heroVideo from '/Hero.mp4?url'

// Then use in component:
<video src={heroVideo} />
```

## Video Specifications

### Recommended Video Format
- **Format**: MP4 (H.264 codec)
- **Resolution**: Minimum 1920x1080, Recommended 3840x2160 (4K)
- **Aspect Ratio**: 16:9
- **File Size**: 5-15 MB (optimized)
- **Duration**: 10-30 seconds (looped content)
- **Frame Rate**: 24-30 fps

### Video Optimization Tools
```bash
# Using ffmpeg to optimize video
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset medium Hero.mp4

# For reduced file size (suitable for web)
ffmpeg -i input.mp4 -vf scale=1920:-1 -vcodec libx264 -crf 28 -preset slow Hero.mp4
```

## HTML Video Element

The Hero video is implemented with these attributes:
- `autoPlay` - Starts playing automatically when page loads
- `loop` - Repeats continuously
- `muted` - No audio (required for autoPlay in browsers)
- `playsInline` - Plays inline on mobile (not fullscreen)
- `object-cover` - Maintains aspect ratio while covering the container

## Troubleshooting

### Video Not Playing
1. **Check Console Errors**: Open browser DevTools (F12) → Console
2. **Verify File Path**: Ensure video is at `/Hero.mp4` relative to public folder
3. **Check File Format**: Confirm video is valid MP4 format
4. **Browser Support**: Test in Chrome/Firefox (all modern browsers support MP4)

### Video Debug Logs
Look for these console messages:
- `[v0] Hero video loading...` - Video is being loaded
- `[v0] Hero video ready to play` - Video is ready and will play
- `[v0] Hero video error: ...` - Video failed to load (check path)

### Performance Issues
- Reduce video file size (currently optimized for ~10 MB)
- Use lower resolution if needed (minimum 1920x1080)
- Ensure video codec is H.264 for broad browser support

## Fallback Background
If the video file is missing or fails to load:
- A gradient fallback (`bg-gradient-to-br from-slate-900 via-black to-slate-950`) is applied
- The overlay remains consistent (`bg-gradient-to-b from-black/40 via-black/50 to-black/60`)
- All content remains visible and responsive

## Current Implementation Details

### CSS Classes Used
```tsx
// Video container positioning
className="absolute inset-0 w-full h-full"

// Video element
className="absolute inset-0 w-full h-full object-cover"

// Dark overlay
className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"

// Content overlay
className="absolute inset-0 flex items-center justify-center z-10"
```

### Z-index Stacking (from back to front)
1. Video element (base layer)
2. Dark overlay (readability)
3. Content (centered text, buttons, socials)
4. Scroll fade effect (bottom gradient)

## Mobile Optimization

The video setup includes:
- **Responsive sizing**: Uses `w-full h-full` with `object-cover`
- **No stretching**: Maintains aspect ratio on all devices
- **Mobile playback**: `playsInline` ensures mobile compatibility
- **Touch-friendly**: Buttons and links remain accessible

## Testing Checklist

- [ ] Video loads without console errors
- [ ] Video plays on page load
- [ ] Video loops seamlessly
- [ ] Text remains readable on mobile (small screens)
- [ ] Buttons are clickable and not obscured
- [ ] Social icons are visible
- [ ] Scroll transition to next section is smooth
- [ ] Video works in Chrome, Firefox, Safari, Edge

## Additional Resources

- [MDN: HTML Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Vite Static Asset Handling](https://vitejs.dev/guide/assets.html)
- [Video Optimization Guide](https://web.dev/video-and-source-tags-best-practices/)
