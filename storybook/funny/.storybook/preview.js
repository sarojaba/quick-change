import * as React from 'react'

import { LocaleContext } from '../../components/LocaleContext'

import { DesignSystemProvider } from '@quick-change/core'

import * as Bootstra386 from '@quick-change/bootstra-386'
// import { MvpCSS } from '@quick-change/classless' // Not working
import * as CyberStyleCSS from '@quick-change/cyberstyle-css'
import * as DoodleCSS from '@quick-change/doodle-css'
import * as NesCss from '@quick-change/nes-css'
import * as PaperCss from '@quick-change/papercss'
import * as PSoneCSS from '@quick-change/psone-css'
import * as Rpgui from '@quick-change/rpgui'
import * as TerminalCSS from '@quick-change/terminal-css'
import * as UiNeumorphism from '@quick-change/ui-neumorphism'
import * as UiTerminal from '@quick-change/uiterminal'
// import { Windows98, WindowsXP, Windows7 } from '@quick-change/windows'
import * as WiredElements from '@quick-change/wired-elements'

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
  'BOOTSTRA 386': Bootstra386,
  'CyberStyle': CyberStyleCSS,
  'Doodle CSS': DoodleCSS,
  // 'MVP.css': MvpCSS,
  'NES.css': NesCss,
  'PaperCSS': PaperCss,
  'PSone': PSoneCSS,
  'RPGUI': Rpgui,
  'Terminal CSS': TerminalCSS,
  'UI Neumorphism': UiNeumorphism,
  'UI Terminal': UiTerminal,
  // 'Windows 98': Windows98,
  // 'Windows XP': WindowsXP,
  // 'Windows 7': Windows7,
  'Wired Elements': WiredElements
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
