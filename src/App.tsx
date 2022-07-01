import React from 'react';
import { useFela, Style } from './styling'
import { Form } from "./components/form"
import { Panel } from "./components/panel"


export const App: React.FC = () => {
  const {
    css,
    theme: { colors, fontSize },
  } = useFela()

  const rule: Style = {
    backgroundColor: colors.background.main,
    minHeight: '100vh',
    width: "100vw",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: fontSize.lg,
    color: colors.fontColor.main
  }

  return (
    <div className={css(rule)}>
        <div className={css({fontSize: fontSize.xl4})}>GitHub Searcher</div>
        <Panel>
          <Form />
        </Panel>
    </div>
  );
}


