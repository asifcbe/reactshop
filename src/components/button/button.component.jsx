import './button.styles.jsx'
import {BaseButton,GoogleSignInButton,InvertedButton} from './button.styles.jsx'


export const BUTTON_TYPE_CLASSES={
google:'google-sign-in',
inverted:'inverted',
default:''
}

const getButton = (buttonType) => {
  return {
    [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
    [BUTTON_TYPE_CLASSES.default]:BaseButton
  }[buttonType]
}

function Button({children,buttonType='default',...otherProps}) {
  const CustomButton=getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
        {children}
    </CustomButton>
  )
}

export default Button;