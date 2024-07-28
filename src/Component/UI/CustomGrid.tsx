import React, { ReactNode } from 'react';

// Define types for the component props
interface GridProps {
  container?: boolean;
  item?: boolean;
  spacing?: number; // Uniform gap for both rows and columns
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: ReactNode;
}

// Utility function to get the column span classes
const getColumnSpan = (size?: number): string => {
  if (!size) return '';
  return `col-span-${size}`;
};

// Utility function to get the spacing classes
const getSpacingClasses = (spacing?: number): string => {
  if (!spacing) return '';
  return `grid-cols-12 gap-${spacing}`;
};

const CustomGrid: React.FC<GridProps> = ({
  container,
  spacing = 0,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}) => {
  // Determine the container or item class
  const className = container ? `grid grid-flow-row-dense grid-cols-12 ${getSpacingClasses(spacing)}`: `${getColumnSpan(xs || 12)} ${getColumnSpan(sm)} ${getColumnSpan(md)} ${getColumnSpan(lg)} ${getColumnSpan(xl)}`;

  return <div className={className}>{children}</div>;
};

export default CustomGrid;
