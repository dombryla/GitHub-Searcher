import React from 'react';
import { useFela, Style, spacing } from './styling'
import { Form } from "./components/form"
import { Panel } from "./components/panel"
import { search } from './api';
import { SearchInputs } from './model/models';
import { SubmitHandler } from "react-hook-form"
import { useAsyncCallback } from 'react-async-hook';


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
    color: colors.fontColor.main,
    gap: spacing.s04
  }

  const data = useAsyncCallback(search);

  const onClick: SubmitHandler<SearchInputs> = ({searchPhrase, userName, language}: SearchInputs) => {
    data.execute({searchPhrase, userName, language})
  }

  console.log(data)
  return (
    <div className={css(rule)}>
        <div className={css({fontSize: fontSize.xl4})}>GitHub Searcher</div>
        <Panel>
          <Form onSubmit={onClick}/>
        </Panel>
        <Panel>
          <div>tabelka</div>
        </Panel>
    </div>
  );
}




