import ReactMarkdown from 'react-markdown'

import { useLocale } from '../components/LocaleContext'

export function Translation({ render }) {
  const locale = useLocale()
  
  return (
    <ReactMarkdown>
      {render(locale)}
    </ReactMarkdown>
  )
}