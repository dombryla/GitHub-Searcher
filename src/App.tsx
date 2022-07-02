import React from 'react';
import { useFela, Style } from './styling'
import { Form } from "./components/form"
import { Panel } from "./components/panel"
import { search } from './api';
import { SearchInput, SearchItem } from './model/models';
import { SubmitHandler } from "react-hook-form"
import { useAsyncCallback } from 'react-async-hook';
import { Link } from './components/link';
import { Avatar } from './components/avatar';


export const App: React.FC = () => {

  const [showAvatar, setShowAvatar] = React.useState(false)

  const {
    css,
    theme: { colors, fontSize, spacing },
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

  const onClick: SubmitHandler<SearchInput> = ({searchPhrase, userName, language}: SearchInput) => {
    data.execute({searchPhrase, userName, language})
  }

  const tableStyle: Style = {
    borderCollapse: "collapse"
  }

  const showModal = (): void =>{
    setShowAvatar(true)
  }

  const hideModal = (): void => {
    setShowAvatar(false)
  }


  return (
    <div className={css(rule)}>
      <div className={css({fontSize: fontSize.xl4})}>GitHub Searcher</div>
      <Panel>
        <Form onSubmit={onClick}/>
      </Panel>
      <Panel backgroundColor={colors.background.main}>
      {(() => {
        switch (data.status) {
          case 'loading':
            return <div>Loading...</div>
          case 'error':
            return <div>Something went bad</div>
          case 'success':
            return (
              <table className={css(tableStyle)}>
              <thead className={css({
                opacity: "1",
                fontSize: fontSize.xl2,
                backgroundColor: colors.background.second
              })}
              >
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>User</th>
                </tr>
              </thead>
              <div className={css({padding: spacing.s025})}></div>
              <tbody className={css({textAlign: "center"})}>
                {data.result!.map((item: SearchItem, i: number) => {
                  return(
                    <tr className={css({borderBottom: `1px solid ${colors.background.second}`})} key={i}>
                      <td>
                        <Link url={item.url} title={item.name} />
                      </td>
                      <td>{item.description}</td>
                      <td 
                        className={css({cursor: "pointer", nested: {":hover":{color: colors.fontColor.light}}})} onClick={showModal}>
                          {item.login}
                      </td>
                      {showAvatar && <Avatar url={item.avatarUrl}  onClick={hideModal} />}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            )
          default:
            return <div>Use filter panel to get files</div>
        }
      })()}
      </Panel>
    </div>
  );
}

