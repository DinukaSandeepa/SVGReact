import { ComponentType } from 'react';

export const withClassName = <P extends { className?: string }>(
  Component: ComponentType<P>
) => {
  const WrappedComponent = (props: P) => {
    return <Component {...props} className={`w-6 h-6 ${props.className || ''}`} />;
  };

  WrappedComponent.displayName = `withClassName(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};