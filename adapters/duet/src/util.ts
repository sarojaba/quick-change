export function variationByType(type) {
  switch (type) {
    case 'success':
    case 'warning':
    case 'danger':
      return type
    default:
      return undefined
  }
}