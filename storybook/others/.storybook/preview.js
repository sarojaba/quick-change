import * as React from 'react'

import { LocaleContext } from '../../components/LocaleContext'

import { DesignSystemProvider } from '@quick-change/core'

import * as Adwaita from '@quick-change/adwaita'
// import * as Backpack from '@quick-change/backpack' // Storybook(Webpack) Issue
import * as Bootstrap from '@quick-change/bootstrap'
// import * as Bulma from '@quick-change/bulma' // Storybook(Source Code Highlight) Issue
// import * as ChakraUI from '@quick-change/chakra-ui'  // Need more
// import * as Class101 from '@quick-change/class101'
// import { MvpCSS } from '@quick-change/classless' // Not working
// import * as Coral from '@quick-change/coral' // Storybook(Webpack) Issue
// import * as Flowbite from '@quick-change/flowbite' // Postpone (Need support tailwindcss)
import * as Foundation from '@quick-change/foundation'
// import * as Gamut from '@quick-change/gamut' // Storybook(Webpack) Issue
import * as GovUK from '@quick-change/gov-uk'
import * as Helsinki from '@quick-change/helsinki'
import * as Mantine from '@quick-change/mantine'
import * as Milligram from '@quick-change/milligram'
import * as PicoCss from '@quick-change/picocss'
import * as Rebass from '@quick-change/rebass'
import * as SemanticUI from '@quick-change/semantic-ui'
import * as Uswds from '@quick-change/uswds'
// import * as VanillaFramework from '@quick-change/vanilla-framework' // Issue

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /**
   * Only DocsPage mode
   */
  viewMode: 'docs',
  previewTabs: {
    canvas: { hidden: true }
  }
}

const catalog = {
  'Adwaita': Adwaita,
  'Bootstrap': Bootstrap,
  // 'Bulma': Bulma,
  // 'Chakra UI': ChakraUI,
  // 'Clarity': Clarity,
  // 'Class101': Class101,
  // 'Coral': Coral,
  // 'Flowbite': Flowbite,
  'Foundation': Foundation,
  // 'Gamut': Gamut,
  'GOV.UK': GovUK,
  'Helsinki': Helsinki,
  'Mantine': Mantine,
  'Milligram': Milligram,
  // 'MVP.css': MvpCSS,
  'Pico.css': PicoCss,
  'Rebass': Rebass,
  'Semantic UI': SemanticUI,
  'USWDS': Uswds
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: navigator.language.startsWith('ko') ? 'ko' : 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'ko', right: '🇰🇷', title: '한국어' },
      ],
      showName: true
    }
  },
  designSystem: {
    name: 'Design System',
    description: 'Global Design System for components',
    defaultValue: 'Adwaita',
    toolbar: {
      icon: 'circlehollow',
      items: Object.keys(catalog),
      showName: true
    }
  }
}

export const decorators = [
  (Story, context) => {
    return (
      <DesignSystemProvider
        catalog={catalog}
        name={context.globals.designSystem}
      >
        <LocaleContext locale={context.globals.locale}>
          <Story />
        </LocaleContext>
      </DesignSystemProvider>
    )
  }
]
