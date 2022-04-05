import * as React from 'react'

const Context = React.createContext<any>(null)

export function LocaleContext({ locale, children }: any) {
  return (
    <Context.Provider value={locale}>
      {children}
    </Context.Provider>
  )
}

export function useLocale() {
  return React.useContext(Context)
}