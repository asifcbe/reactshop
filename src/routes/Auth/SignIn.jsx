
import {useState} from 'react'
import { signInWithGooglePopup,createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from '../../utils/firebaseutils';
import FormInput from '../../components/forminput/FormInput';
import './sign-in-up-form.styles.scss'
import Button from '../../components/button/button.component';

const defaultFormFields={
  email:'',
    password:'',
  }
function SignIn() {

  const [formFields,setFormFields]=useState(defaultFormFields);
  const {email,password}=formFields;
  
  const signInWithGoogle = async () => {
  const response = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentFromAuth(response.user);
  console.log(userDocRef);
};
const submitHandler=async (event)=>{
  try{
    event.preventDefault();
    let {user}=await signInAuthUserWithEmailAndPassword(email,password);
    console.log(user);
  } catch(error){
    switch(error.code){
      case 'auth/wrong-password':
        alert("incorrect password for email");
        break;
      case 'auth/user-not-found':
        alert("no user associated with this email");
        break;
      case 'auth/invalid-credential':
        alert("invalid credentials");
        break;
      default:
        console.log(error);
    }
  }
}
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormFields({...formFields,[name]:value});
  }  
  return (
    <div className='sign-in-container'>
      <h2>Already have an Account?</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={submitHandler}>
            <FormInput label='Email' name='email' type="email" value={email} onChange={handleChange} />
            <FormInput label='Password' name='password' type="password" value={password} onChange={handleChange} />
            
            <div className="buttons-container">
<Button type='submit'>
              Sign In
            </Button>
            <Button buttonType="google" onClick={signInWithGoogle}>
        Google
      </Button>
            </div>
            
        </form>
    </div>
  )
}

export default SignIn;

