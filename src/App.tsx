import React from 'react';
import { useFela, Style, spacing } from './styling'
import { Form } from "./components/form"
import { Panel } from "./components/panel"
import { search } from './api';
import { SearchInputs } from './model/models';
import {SubmitHandler} from "react-hook-form"


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

  const onClick: SubmitHandler<SearchInputs> = ({searchPhrase, userName, language}: SearchInputs) => {
    // console.log(`https://api.github.com/search/code?q=${searchPhrase} user:${userName} language:${language}`)
    search({searchPhrase, userName, language}).then(item => {console.log(item)})
  }

  return (
    <div className={css(rule)}>
        <div className={css({fontSize: fontSize.xl4})}>GitHub Searcher</div>
        <Panel>
          <Form onSubmit={onClick}/>
        </Panel>
        <Panel>
          <div>eloo</div>
        </Panel>
    </div>
  );
}


