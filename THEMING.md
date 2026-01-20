# Theme Configuration Guide

This project uses a centralized theming system with CSS variables, making it easy to change your brand colors in one place.

## How to Change Theme Colors

### 1. Update Brand Colors in `app/globals.css`

All brand colors are defined in the `:root` section of `app/globals.css`. To change your theme color, simply update the RGB values:

```css
:root {
  /* Brand Colors - Change these to update your theme */
  /* Format: oklch(lightness chroma hue) */
  --brand-50: oklch(0.98 0.02 302);   /* Lightest shade */
  --brand-100: oklch(0.95 0.05 302);
  --brand-200: oklch(0.90 0.10 302);
  --brand-300: oklch(0.82 0.15 302);
  --brand-400: oklch(0.72 0.20 302);
  --brand-500: oklch(0.62 0.25 302);   /* Primary brand color */
  --brand-600: oklch(0.54 0.25 302);   /* Hover states */
  --brand-700: oklch(0.46 0.23 302);
  --brand-800: oklch(0.40 0.20 302);
  --brand-900: oklch(0.34 0.17 302);
  --brand-950: oklch(0.25 0.12 302);   /* Darkest shade */
}
```

### 2. Understanding OKLCH Color Format

This project uses OKLCH color format: `oklch(lightness chroma hue)`
- **Lightness**: 0 (black) to 1 (white)
- **Chroma**: 0 (gray) to ~0.4 (vibrant)
- **Hue**: 0-360 degrees (color wheel)

### 3. Example Color Palettes

#### Purple (Current - Hue: 302)
```css
--brand-500: oklch(0.62 0.25 302);
--brand-600: oklch(0.54 0.25 302);
```

#### Blue (Hue: 250)
```css
--brand-500: oklch(0.55 0.22 250);
--brand-600: oklch(0.48 0.22 250);
```

#### Green (Hue: 145)
```css
--brand-500: oklch(0.65 0.20 145);
--brand-600: oklch(0.58 0.20 145);
```

#### Red (Hue: 25)
```css
--brand-500: oklch(0.62 0.25 25);
--brand-600: oklch(0.55 0.25 25);
```

#### Orange (Hue: 50)
```css
--brand-500: oklch(0.68 0.20 50);
--brand-600: oklch(0.60 0.20 50);
```

### 3. Using Brand Colors in Components

In your components, use the `brand-*` utility classes instead of hardcoded colors:

```tsx
// ✅ Good - Uses theme variable
<div className="bg-brand-500 text-white">
  <Icon className="text-brand-500" />
</div>

// ❌ Bad - Hardcoded color
<div className="bg-purple-500 text-white">
  <Icon className="text-purple-500" />
</div>
```

### 4. Available Brand Color Classes

- **Backgrounds**: `bg-brand-50` through `bg-brand-950`
- **Text**: `text-brand-50` through `text-brand-950`
- **Borders**: `border-brand-50` through `border-brand-950`
- **Opacity**: `bg-brand-500/10`, `bg-brand-500/20`, etc.

### 5. Dark Mode Support

To add dark mode variants for your brand colors, update the `.dark` section in `app/globals.css`:

```css
.dark {
  /* Override brand colors for dark mode if needed */
  --brand-500: 192 132 252;  /* Lighter shade for dark backgrounds */
  --brand-600: 168 85 247;
}
```

## Quick Color Change Example

To change from purple to blue theme:

1. Open `app/globals.css`
2. Find the `--brand-*` variables in `:root`
3. Change the hue value (third number) from 302 to 250:
   ```css
   --brand-50: oklch(0.98 0.02 250);
   --brand-100: oklch(0.95 0.05 250);
   --brand-200: oklch(0.90 0.10 250);
   --brand-300: oklch(0.82 0.15 250);
   --brand-400: oklch(0.72 0.20 250);
   --brand-500: oklch(0.62 0.25 250);
   --brand-600: oklch(0.54 0.25 250);
   --brand-700: oklch(0.46 0.23 250);
   --brand-800: oklch(0.40 0.20 250);
   --brand-900: oklch(0.34 0.17 250);
   --brand-950: oklch(0.25 0.12 250);
   ```
4. Save the file - changes will apply immediately!

**Pro Tip**: To quickly change colors, just modify the hue value (0-360):
- Purple: 302
- Blue: 250
- Cyan: 200
- Green: 145
- Yellow: 90
- Orange: 50
- Red: 25

## Color Tools

Use these tools to work with OKLCH colors:
- [OKLCH Color Picker](https://oklch.com/)
- [OKLCH Color Palette Generator](https://www.tints.dev/)
- [Evil Martians OKLCH Tool](https://oklch.evilmartians.io/)

## Components Using Brand Colors

The following components use the brand color system:
- `components/landing/card.tsx` - Feature card icons
- `components/landing/hero-visual.tsx` - Visual mockup elements
- `components/landing/hero-section.tsx` - Hero badges and buttons
- `components/landing/header.tsx` - Logo and navigation buttons
- `components/landing/footer.tsx` - Footer logo
- `components/landing/how-it-works.tsx` - Step indicators
- `components/landing/cta.tsx` - CTA section background
- `components/landing/integration.tsx` - Integration visuals
