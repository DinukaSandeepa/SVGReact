import { createElement } from 'react';

export const withClassName = (Component) => {
  const WrappedComponent = (props) => {
    return createElement(Component, {
      ...props,
      className: `w-6 h-6 ${props.className || ''}`,
    });
  };

  WrappedComponent.displayName = `withClassName(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};