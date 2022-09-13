/**
 * Usage - getReplacement([<color to replace>,<prop to replace with>])
 * Takes unlimited amount of replacements: getReplacement(['#000000','color],['transparent','stroke'],[14,'width']) etc.
 *
 * Example
 *
 * Icon: <svg fill='#000000' path='#111111' stroke='transparent' />
 * Replacement func: getReplacement(['#000000','fillColor'],['#111111','pathColor'],['transparent','strokeColor'])
 * Result:
 * <svg
 * fill={theme.colors[props.fillColor] || props.fillColor || '#000000'}
 * path={theme.colors[props.pathColor] || props.pathColor || '#111111'}
 * stroke={theme.colors[props.strokeColor] || props.strokeColor || 'transparent'}
 * />
 * */

const getReplacement = (...themeProps) =>
  (color) => ({
    [color]: `{(theme.colors${themeProps.reduce(
      (str, prop) => `${str}.${prop}`,
      ''
    )}[props.color] || props.color) || "${color}"}`,
  })

export const replacements = {
  UploadIcon: getReplacement('background')('black'),
  ArrowUpIcon: getReplacement('background')('black'),
  ArrowDownIcon: getReplacement('background')('black'),
  LoupeIcon: getReplacement('background')('#0D0D0D'),
  BookmarkIcon: getReplacement('background')('black'),
  BriefcaseIcon: getReplacement('background')('black'),
  ShoppingCartIcon: getReplacement('background')('black'),
  InboxIcon: getReplacement('background')('black'),
}
