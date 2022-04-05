import * as React from 'react'

import '@shopify/polaris/build/esm/styles.css'

import enTranslations from '@shopify/polaris/locales/en.json'

import { AppProvider } from '@shopify/polaris'

export function StyleLoader({ theme, children }) {
  return (
    <AppProvider i18n={enTranslations}>
      {children}
    </AppProvider>
  )
}