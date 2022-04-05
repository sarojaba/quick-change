export function variantByType(type) {
  switch (type) {
    case 'primary':
    case 'secondary':
      return type
    case 'success':
      return 'positive'
    case 'danger':
      return 'negative'
    default:
      return undefined
  }
}