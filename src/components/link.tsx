import React from "react"
import {useFela, Style } from "../styling"

export type LinkProps = {
    title: string
    url: string
  }
  
export const Link:React.FC<LinkProps> = ({title, url}) => {
  const {
    css,
    theme: { colors },
  } = useFela()
  
  const rule: Style = {
    textDecoration: "inherit",
    color: "inherit",
    fontWeight: "lighter",
    nested: {
      ":hover":{
        textDecoration: "underline",
        color: colors.fontColor.light
      }
    }
  }
  
  return(
    <>
      <a href={url} target="_blank" rel="noreferrer" className={css(rule)}>{title}</a>
    </>
  )
}