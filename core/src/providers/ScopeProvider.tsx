import * as React from 'react'

const Context = React.createContext<any>(null)

export function ScopeProvider({ scope, children }: any) {
  return (
    <Context.Provider value={scope}>
      {children}
    </Context.Provider>
  )
}

export function useScope() {
  return React.useContext(Context)
}