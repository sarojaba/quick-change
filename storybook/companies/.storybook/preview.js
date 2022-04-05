import * as React from 'react'

import { LocaleContext } from '../../components/LocaleContext'

import { DesignSystemProvider } from '@quick-change/core'

import * as Antd from '@quick-change/antd'
import * as Atlassian from '@quick-change/atlassian'
// import * as Backpack from '@quick-change/backpack' // Storybook(Webpack) Issue
import * as BaseWeb from '@quick-change/base-web'
// import * as BBC from '@quick-change/bbc' // Issue
import * as Canvas from '@quick-change/canvas'
// import * as Carbon from '@quick-change/carbon' // Style not working
// import * as Clarity from '@quick-change/clarity' // Storybook(Webpack) Issue
import * as Class101 from '@quick-change/class101'
// import * as Coral from '@quick-change/coral' // Storybook(Webpack) Issue
import * as Doodlin from '@quick-change/doodlin'
import * as Duet from '@quick-change/duet'
import * as ElasticUI from '@quick-change/elastic-ui'
import * as Evergreen from '@quick-change/evergreen'
// import * as Fast from '@quick-change/fast'
import * as FluentUI from '@quick-change/fluent-ui'
import * as Forma36 from '@quick-change/forma36'
// import * as Gamut from '@quick-change/gamut' // Storybook(Webpack) Issue
import * as Gestalt from '@quick-change/gestalt'
import * as HPE from '@quick-change/hpe'
import * as Instructure from '@quick-change/instructure'
// import * as JUI from '@quick-change/jui'
import * as Lightning from '@quick-change/lightning'
import * as Momentum from '@quick-change/momentum'
import * as Moon from '@quick-change/moon'
import * as Mui from '@quick-change/mui'
// import * as OneUI from '@quick-change/one-ui'
// import * as Orbit from '@quick-change/orbit' // Storybook(Webpack) Issue
import * as Polaris from '@quick-change/polaris'
import * as Primer from '@quick-change/primer'
// import * as Ruter from '@quick-change/ruter' // Storybook(Webpack) Issue
import * as Seeds from '@quick-change/seeds'
import * as Source from '@quick-change/source'
import * as Spectrum from '@quick-change/spectrum'
// import * as Stacks from '@quick-change/stacks' // Not a React
import * as SupabaseUI from '@quick-change/supabase-ui'
// import * as VanillaFramework from '@quick-change/vanilla-framework' // Issue
import * as Vercel from '@quick-change/vercel'
import * as Vibe from '@quick-change/vibe'
import * as Wanda from '@quick-change/wanda'

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
  'Ant Design': Antd,
  'Atlassian': Atlassian,
  // 'Backpack': Backpack,
  'Base Web': BaseWeb,
  // 'BBC': BBC,
  'Canvas': Canvas,
  // 'Carbon': Carbon,
  // 'Chakra UI': ChakraUI,
  // 'Clarity': Clarity,
  'Class101': Class101,
  // 'Coral': Coral,
  'Doodlin': Doodlin,
  'Duet': Duet,
  'Elastic UI': ElasticUI,
  'Evergreen': Evergreen,
  // 'Fast': Fast,
  // 'Flowbite': Flowbite,
  'Fluent UI': FluentUI,
  'Forma 36': Forma36,
  // 'Gamut': Gamut,
  'Gestalt': Gestalt,
  'HPE': HPE,
  'Instructure': Instructure,
  // 'JUI': JUI,
  'Lightning': Lightning,
  'Momentum': Momentum,
  'Moon': Moon,
  'MUI': Mui,
  // 'MVP.css': MvpCSS,
  // 'One UI': OneUI,
  // 'Orbit': Orbit,
  'Polaris': Polaris,
  'Primer': Primer,
  // 'Ruter': Ruter,
  'Seeds': Seeds,
  'Source': Source,
  'Spectrum': Spectrum,
  // 'Stacks': Stacks,
  'Supabase UI': SupabaseUI,
  // 'Vanilla Framework': VanillaFramework,
  'Vercel': Vercel,
  'Vibe': Vibe,
  'Wanda': Wanda
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
    defaultValue: 'Ant Design',
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
