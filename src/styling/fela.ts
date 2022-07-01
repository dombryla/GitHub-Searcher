import * as Fela from 'react-fela'
import { Theme } from './theme'

export type Style<TProps = {}> = Fela.FelaStyle<Theme, TProps>

export function useFela<TProps = {}>(props?: TProps) {
  return Fela.useFela<Theme, TProps>(props)
}
