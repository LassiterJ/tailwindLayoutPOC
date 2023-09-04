import React from 'react';

const generateGridClasses = ({
                               inline,
                               columns,
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
                             }) => {
  const classes = [];
  
  if (inline) classes.push('inline-grid');
  else classes.push('grid');
  
  if (columns) classes.push(`grid-cols-${columns}`);
  if (rows) classes.push(`grid-rows-${rows}`);
  if (gap) classes.push(`gap-${gap}`);
  if (rowGap) classes.push(`row-gap-${rowGap}`);
  if (columnGap) classes.push(`col-gap-${columnGap}`);
  if (alignItems) classes.push(`place-items-${alignItems}`);
  if (justifyItems) classes.push(`place-items-${justifyItems}`);
  if (autoRows) classes.push(`grid-auto-rows-${autoRows}`);
  if (minWidth) classes.push(`min-w-${minWidth}`);
  if (maxWidth) classes.push(`max-w-${maxWidth}`);
  if (minHeight) classes.push(`min-h-${minHeight}`);
  if (maxHeight) classes.push(`max-h-${maxHeight}`);
  if (autoFlow) classes.push(`grid-auto-flow-${autoFlow}`);
  
  return classes.join(' ');
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
