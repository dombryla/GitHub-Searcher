import React from 'react';
import { useFela, Style } from '../styling'
import { useForm, SubmitHandler } from "react-hook-form";


type SearchInputs = {
  searchPhrase: string,
  userName: string,
  language: Language
}

type Language = "js" | "go" | "java"


export const Form: React.FC = () => {

  const {
    css, theme:{spacing, colors, fontSize, borderRadius, border}
  } = useFela()

  const { register, handleSubmit,  formState: { errors } } = useForm<SearchInputs>();


  const onSubmit: SubmitHandler<SearchInputs> = ({searchPhrase, userName, language}) => {
    console.log(`https://api.github.com/search/code?q=${searchPhrase} user:${userName} language:${language}`)
  }

  const fieldsetStyle: Style = {
    display: "flex",
    flexDirection: "column",
    border: "none",
    margin: "0px",
    padding: `${spacing.s01} 0`
  }

  const errorMessageStyle: Style = {
    fontSize: fontSize.sm,
    color: colors.fontColor.error
  }

  const inputStyle: Style = {
    outline: "none",
    borderRadius: borderRadius.rounded,
    backgroundColor: colors.background.input,
    color: colors.fontColor.light,
    padding: `${spacing.s005} ${spacing.s02}`,
    border: border.main,
  }

  const buttonStyle: Style = {
    backgroundColor: colors.background.button,
    borderRadius: borderRadius.rounded,
    color: colors.fontColor.white,
    padding: `${spacing.s005} ${spacing.s03}`,
    border: "none",
    cursor: "pointer",
    nested: {
        ":hover": {
          backgroundColor: colors.background.buttonHover
        },
    }
  }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={css(fieldsetStyle)}>
            <label htmlFor='searchPhrase'>Search phrase: </label>
            <input {...register("searchPhrase", {required: "This field is required."})} id="searchPhrase" className={css(inputStyle)} placeholder="Type a phrase..."></input>
            <p className={css(errorMessageStyle)}>{errors.searchPhrase?.message}</p>
          </fieldset>
          <fieldset className={css(fieldsetStyle)}>
            <label htmlFor='userName'>User Name: </label>
            <input {...register("userName", {required: "This field is required."})} className={css(inputStyle)} placeholder="Type a user name..."></input>
            <p className={css(errorMessageStyle)}>{errors.userName?.message}</p>
          </fieldset>
          <fieldset className={css(fieldsetStyle)}>
            <label htmlFor='language'>Language: </label>
            <select {...register("language", {required: "This field is required."})}  id="language" className={css(inputStyle)}>
              <option value="js">Java Script</option>
              <option value="go">Go</option>
              <option value="java">Java</option>
            </select>
            <p className={css(errorMessageStyle)}>{errors.language?.message}</p>
          </fieldset>
          <button className={css(buttonStyle)}>Search</button>
        </form>
    </>
  );
}



