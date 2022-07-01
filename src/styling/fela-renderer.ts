import * as Fela from 'fela'
import typescript from 'fela-plugin-typescript'
import prefixer from 'fela-plugin-prefixer'
import fallbackValue from 'fela-plugin-fallback-value'

import { globalCss } from './global-css'

export const createRenderer = (): Fela.IRenderer => {
  const renderer = Fela.createRenderer({
    devMode: true,
    plugins: [typescript(), prefixer(), fallbackValue()],
  })

  renderer.renderStatic(globalCss)

  return renderer
}
