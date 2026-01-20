import SignUpForm from './SignUpForm'
import SignIn from './SignIn'
import './sign-in-up-form.styles.scss';

function Auth() {
  return (
    <div className='Auth'>
        <SignIn/>    
        <SignUpForm />
    </div>
  )
}

export default Auth