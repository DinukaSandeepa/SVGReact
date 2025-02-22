export const transformSvg = (svgCode) => {
  // Extract class name from the SVG
  const classMatch = svgCode.match(/class="lucide lucide-([\w-]+)"/);
  if (!classMatch) return null;

  const originalName = classMatch[1];
  
  // Convert kebab-case to PascalCase and append 'Base'
  const componentName = originalName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Base';

  // Transform SVG code
  let transformedSvg = svgCode
    // Remove class attribute
    .replace(/\s*class="[^"]*"/, '')
    // Add className prop
    .replace('<svg', '<svg className={className}')
    // Remove stroke attribute
    .replace(/\s*stroke="[^"]*"/, '')
    // Convert React unknown properties
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .trim();

  // Create component code
  const componentCode = `const ${componentName} = ({ className }) => (
  ${transformedSvg}
);`;

  // Create export statement
  const exportCode = `export const ${componentName.replace(
    'Base',
    ''
  )} = withClassName(${componentName});`;

  return {
    componentName,
    componentCode,
    exportCode,
  };
};