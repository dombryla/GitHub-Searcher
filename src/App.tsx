import React from 'react';
import { useFela, Style } from './styling'


export const App: React.FC = () => {

  const {
    css,
    theme: { colors, fontSize, spacing },
  } = useFela()

  const rule: Style = {
    backgroundColor: colors.backgroundColor.main,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: fontSize.xl,
    color: colors.fontColor.main
  }

  return (
    <div className={css(rule)}>
      <div
        className={css({
          margin: `${spacing.s02}`,
          height: 'inherit',
        })}
      >
        <div>GitHub Searcher</div>
      </div>
    </div>
  );
}

