import * as Fela from "fela"
import { ReactNode } from "react"
import { ThemeProvider, RendererProvider } from "react-fela"
import { Theme, theme as defaultTheme } from "./theme"

export type FelaProviderProps = {
  children: ReactNode
  theme?: Theme
  renderer: Fela.IRenderer
}

export const FelaProvider: React.FC<FelaProviderProps> = ({
  children,
  renderer,
  theme = defaultTheme,
}) => {
  return (
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RendererProvider>
  )
}

