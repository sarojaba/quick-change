export function Title({ size, align, children }) {

  const alignClassName = classNameByAlign(align)

  switch (size) {
    case '1':
      return <h1 className={alignClassName}>{ children }</h1>
    case '2':
      return <h2 className={alignClassName}>{ children }</h2>
    case '3':
      return <h3 className={alignClassName}>{ children }</h3>
    case '4':
      return <h4 className={alignClassName}>{ children }</h4>
    case '5':
      return <h5 className={alignClassName}>{ children }</h5>
    case '6':
      return <h6 className={alignClassName}>{ children }</h6>
    default:
      throw Error(`Not supported size: ${size}`)
  }
}

function classNameByAlign(align) {
  switch (align) {
    case undefined:
      return ''
    case 'center':
      return 'text-center'
    case 'left':
      return 'text-left'
    case 'right':
      return 'text-right'
    default:
      throw Error(`Not supported align: ${align}`)
  }
}