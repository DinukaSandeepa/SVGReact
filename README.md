# SVG to React Transformer

A modern web application that transforms SVG code into React-ready components. Built with Next.js and styled with Tailwind CSS, this tool helps developers quickly convert SVG icons into reusable React components.

![SVG to React Transformer](https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=1200&h=400)

## Features

- 🚀 **Instant Transformation**: Convert SVG code to React components in real-time
- 🎨 **Styling Support**: Adds className prop for dynamic styling
- 🛠 **React Property Fixes**: Automatically converts SVG attributes to React-compatible properties
- 📋 **Copy-to-Clipboard**: One-click copying of transformed components
- 🎯 **Smart Naming**: Converts kebab-case to PascalCase with proper React component naming
- 💅 **Modern UI**: Clean, responsive interface built with Tailwind CSS

## Transformations Applied

The transformer performs several key modifications to make SVGs React-ready:

1. Adds `className={className}` to the SVG tag for dynamic styling
2. Removes the `stroke` attribute while preserving other attributes
3. Converts SVG attributes to React properties:
   - `stroke-width` → `strokeWidth`
   - `stroke-linecap` → `strokeLinecap`
   - `stroke-linejoin` → `strokeLinejoin`
4. Removes class attributes (specifically `class="lucide lucide-..."`)
5. Converts component names from kebab-case to PascalCase

## Usage

1. Visit the application in your browser
2. Paste your SVG code into the input field
3. Click "Transform SVG" or press Enter
4. Copy the generated React component and export statement
5. Use in your React project!

### Example

Input:
```svg
<svg class="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14"/>
  <path d="m12 5 7 7-7 7"/>
</svg>
```

Output:
```jsx
const ArrowRightBase = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

export const ArrowRight = withClassName(ArrowRightBase);
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icon library

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
