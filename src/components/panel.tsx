import { useFela, Style } from '../styling'
import { borderRadius } from '../styling/theme';


type PanelProps = {
  children: JSX.Element
}
  
export const Panel: React.FC<PanelProps> = ({children}) =>{
  const {
    css,
    theme: { colors, spacing, border },
  } = useFela()
  
  const panel: Style = {   
    backgroundColor: colors.background.second, 
    padding: spacing.s05, 
    borderRadius: borderRadius.rounded, 
		border: border.main,
	}
  
  return(
    <div className={css(panel)}>
      {children}
    </div>
  )
}
  