import React from 'react';
import { useFela, Style } from '../styling'
import { Button } from './button';

export type AvatarProps = {
    url: string
    onClick: () =>void
  }
  
export const Avatar: React.FC<AvatarProps> = ({url, onClick}) =>{
const { css, theme:{colors, border, spacing, borderRadius} } = useFela()
    
const rule: Style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: " translate(-50%, -50%)",
  zIndex: 10,
  padding: spacing.s04,
  border: border.main,
  borderRadius: borderRadius.xl2,
  boxShadow: `0px 0px 11px -3px ${colors.background.input}`,
  backgroundColor: colors.background.second,
}
  
  return(
    <div className={css(rule)}>
      <img src={url} alt="avatar"></img>
			<div className={css({height: spacing.s04})}></div>
      <Button onClick={onClick}>Close</Button>
    </div>
  )
}

