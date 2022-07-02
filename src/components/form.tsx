import React from 'react';
import { useFela, Style } from '../styling'
import { useForm, SubmitHandler } from "react-hook-form";
import { SearchInput } from '../model/models';
import { Button } from './button';
import { useSearchParams } from 'react-router-dom';


export type FormProps = {
	onSubmit: SubmitHandler<SearchInput>
}

export const Form: React.FC<FormProps> = ({onSubmit}) => {

  const {
    css, theme:{spacing, colors, fontSize, borderRadius, border}
  } = useFela()

  const [searchParams] = useSearchParams();
  const defaultValues = getDefaultValuesFromQuery(searchParams)


  const { register, handleSubmit,  formState: { errors } } = useForm<SearchInput>({defaultValues});


  const fieldsetStyle: Style = {
    display: "flex",
    flexDirection: "column",
    border: "none",
    margin: "0px",
    padding: `${spacing.s01} 0`,
  }

  const errorMessageStyle: Style = {
    fontSize: fontSize.sm,
    color: colors.fontColor.error
  }

  const inputStyle: Style = {
    outline: "none",
		width: "250px",
		height: "35px",
    borderRadius: borderRadius.rounded,
    backgroundColor: colors.background.input,
    color: colors.fontColor.light,
    padding: `${spacing.s005} ${spacing.s02}`,
    border: border.main,
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
				<div className={css({display: "flex", gap: spacing.s03, alignItems: "stretch", justifyContent: "space-evenly"})}>
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
				</div>
				<div className={css({height: spacing.s03})}></div>
				<div className={css({display: "flex", justifyContent: "center"})}>
          <Button>Search</Button>
				</div>
      </form>
    </>
  );
}


const getDefaultValuesFromQuery = (query: URLSearchParams): SearchInput =>{
  return({
    searchPhrase: query.get("searchPhrase") || "" ,
    userName: query.get("userName") || "",
    language:  "js"
  })
}