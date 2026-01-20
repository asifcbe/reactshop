import './button.styles.scss'

const BUTTON_TYPE_CLASSES={
google:'google-sign-in',
inverted:'inverted',
default:''
}



function Button({children,buttonType='default',...otherProps}) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        {children}
    </button>
  )
}

export default Button;