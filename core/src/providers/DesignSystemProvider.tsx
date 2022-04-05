import * as React from 'react'

import { ErrorBoundary } from 'react-error-boundary'

const Context = React.createContext<any>(null)

export function DesignSystemProvider({ catalog, name, theme, strict, children }: any) {

  const DesignSystem = catalog[name]

  const settings = { name, strict }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {}}
    >
      <Context.Provider value={{ DesignSystem, settings }}>
        <DesignSystem.StyleLoader theme={theme}>
          {children}
        </DesignSystem.StyleLoader>
      </Context.Provider>
    </ErrorBoundary>
  )
}

export function useComponents() {
  return React.useContext(Context).DesignSystem
}

export function useSettings() {
  return React.useContext(Context).settings
}

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}