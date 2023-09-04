import React from 'react';

const classConfig = {
  inline: value => (value ? 'inline-grid' : 'grid'),
  columns: value => `grid-cols-${value}`,
  rows: value => `grid-rows-${value}`,
  gap: value => `gap-${value}`,
  rowGap: value => `row-gap-${value}`,
  columnGap: value => `col-gap-${value}`,
  alignItems: value => `place-items-${value}`,
  justifyItems: value => `place-items-${value}`,
  autoRows: value => `grid-auto-rows-${value}`,
  minWidth: value => `min-w-${value}`,
  maxWidth: value => `max-w-${value}`,
  minHeight: value => `min-h-${value}`,
  maxHeight: value => `max-h-${value}`,
  autoFlow: value => `grid-auto-flow-${value}`
};

const generateGridClasses = (config) => {
  return Object.entries(config)
    .filter(([key, value]) => value && classConfig[key])
    .map(([key, value]) => classConfig[key](value))
    .join(' ');
};


const Grid = ({
                children,
                pattern,
                columns,
                rows,
                gap = '4',
                rowGap,
                columnGap,
                alignItems = 'start',
                justifyItems = 'start',
                templateAreas,
                areas,
                autoFlow = 'row',
                autoRows,
                minWidth,
                maxWidth,
                minHeight,
                maxHeight,
                inline = false,
                ...props
              }) => {
  const patternConfig = pattern ? gridPatterns[pattern] : {};
  const gridClasses = generateGridClasses({
    inline,
    columns: columns || patternConfig.columns,
    rows,
    gap,
    rowGap,
    columnGap,
    alignItems,
    justifyItems,
    autoRows,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    autoFlow
  });
  
  return (
    <div
      className={gridClasses}
      style={{
        gridTemplateAreas: areas ? `"${areas.join('" "')}"` : (patternConfig.areas ? `"${patternConfig.areas.join('" "')}"` : undefined)
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
