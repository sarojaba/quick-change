export function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 's'
    case 'medium':
      return 'm'
    case 'large':
      return 'l'
    default:
      return undefined
  }
}