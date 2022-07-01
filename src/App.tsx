import React from 'react';
import { useFela, Style } from './styling'


export const App: React.FC = () => {
  const {css} = useFela()

  return (
    <div className={css({backgroundColor: "red"})}>
        GitHub Searcher
    </div>
  );
}

