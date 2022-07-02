import React from 'react';
import { useFela, Style } from '../styling'

export type ButtonProps = {
	onClick?: () => void
	children: string
}

export const Button: React.FC<ButtonProps> = ({onClick, children}) =>{
	const { css, theme:{colors, spacing, borderRadius} } = useFela()

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

	return(
		<button className={css(buttonStyle)} onClick={onClick}>{children}</button>
	)
}