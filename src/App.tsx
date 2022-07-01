import React from 'react';
import { useFela, Style } from './styling'
import { useForm, SubmitHandler } from "react-hook-form";


type SearchInputs = {
  searchPhrase: string,
  userName: string,
  language: "js" | "go" | "java"
}
export const App: React.FC = () => {

  const {
    css,
    theme: { colors, fontSize, spacing },
  } = useFela()

  const { register, handleSubmit,  formState: { errors } } = useForm<SearchInputs>();

  const rule: Style = {
    backgroundColor: colors.backgroundColor.main,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: fontSize.xl,
    color: colors.fontColor.main
  }

  const onSubmit: SubmitHandler<SearchInputs> = (data) => {
    console.log(data)
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='searchPhrase'>
            Search phrase
            <input {...register("searchPhrase", {required: "This field is required."})} id="searchPhrase"></input>
          </label>
          <p>{errors.searchPhrase?.message}</p>
          <input {...register("userName", {required: "This field is required."})}></input>
          <p>{errors.userName?.message}</p>
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}


